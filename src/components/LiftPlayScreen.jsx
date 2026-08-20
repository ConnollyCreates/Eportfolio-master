import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

const MAX_STORIES = 4;
const TRANSITION_DURATION = 820;
const DEFAULT_PLATE_LABELS = ["WF", "S32", "KH", "USO"];

const PLATE_SLOTS = [
  { leftX: 280, rightX: 438, y: 86, width: 42, height: 108, color: "red" },
  { leftX: 226, rightX: 486, y: 76, width: 48, height: 128, color: "red" },
  { leftX: 166, rightX: 540, y: 66, width: 54, height: 148, color: "blue" },
  { leftX: 100, rightX: 600, y: 56, width: 60, height: 168, color: "green" },
];

const getEventId = (event, index) =>
  event?.id || event?.slug || event?.label?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || `event-${index + 1}`;

const getEventImage = (event) => {
  const image = event?.image || event?.media || {};
  return typeof image === "string" ? { src: image } : image;
};

const getStoryId = (story, index) => story?.id || `story-${index + 1}`;

const getStoryTitle = (story, index) =>
  story?.title || story?.organization || story?.source || story?.name || story?.label || `Story ${index + 1}`;

const getReducedMotionPreference = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const LiftPlayScreen = ({
  events = [],
  stories = [],
  onStoryChange,
}) => {
  const instanceId = useId().replace(/:/g, "");
  const eventList = useMemo(() => (Array.isArray(events) ? events.filter(Boolean) : []), [events]);
  const storyList = useMemo(() => {
    return Array.isArray(stories) ? stories.filter(Boolean).slice(0, MAX_STORIES) : [];
  }, [stories]);
  const defaultEvent =
    eventList.find((event, index) =>
      `${getEventId(event, index)} ${event.label || ""}`.toLowerCase().includes("deadlift"),
    ) || eventList[0];
  const [selectedEventId, setSelectedEventId] = useState(() =>
    defaultEvent ? getEventId(defaultEvent, eventList.indexOf(defaultEvent)) : "",
  );
  const [reducedMotion, setReducedMotion] = useState(getReducedMotionPreference);
  const [loadedCount, setLoadedCount] = useState(0);
  const [activeStoryIndex, setActiveStoryIndex] = useState(-1);
  const [settlingStoryIndex, setSettlingStoryIndex] = useState(-1);
  const [complete, setComplete] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const timerRef = useRef(null);
  const runIdRef = useRef(0);

  const selectedEvent =
    eventList.find((event, index) => getEventId(event, index) === selectedEventId) || defaultEvent;
  const selectedIndex = selectedEvent ? eventList.indexOf(selectedEvent) : -1;
  const activeEventId = selectedEvent ? getEventId(selectedEvent, selectedIndex) : "";
  const selectedImage = getEventImage(selectedEvent);
  const imageSources = Array.isArray(selectedImage.sources) ? selectedImage.sources : [];
  const activeStory = activeStoryIndex >= 0 ? storyList[activeStoryIndex] : null;
  const nextStory = loadedCount < storyList.length ? storyList[loadedCount] : null;
  const settlingStory = settlingStoryIndex >= 0 ? storyList[settlingStoryIndex] : null;

  const notifyStoryChange = useCallback(
    (storyId) => {
      onStoryChange?.(storyId);
    },
    [onStoryChange],
  );

  const clearPendingTransition = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    runIdRef.current += 1;
  }, []);

  const commitStory = useCallback(
    (storyIndex) => {
      const story = storyList[storyIndex];
      if (!story) return;

      const nextCount = storyIndex + 1;
      const isComplete = nextCount === MAX_STORIES && storyList.length >= MAX_STORIES;
      setLoadedCount(nextCount);
      setActiveStoryIndex(storyIndex);
      setSettlingStoryIndex(-1);
      setComplete(isComplete);
      setLiveMessage(
        `${getStoryTitle(story, storyIndex)} chapter loaded.${isComplete ? " All four experience chapters are loaded." : ""}`,
      );
      notifyStoryChange(getStoryId(story, storyIndex));
      timerRef.current = null;
    },
    [notifyStoryChange, storyList],
  );

  const commitReset = useCallback(() => {
    setLoadedCount(0);
    setActiveStoryIndex(-1);
    setSettlingStoryIndex(-1);
    setComplete(false);
    setResetting(false);
    setLiveMessage("Bar reset. Wells Fargo is next.");
    notifyStoryChange(null);
    timerRef.current = null;
  }, [notifyStoryChange]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event) => setReducedMotion(event.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!reducedMotion) return;

    if (resetting) {
      clearPendingTransition();
      commitReset();
    } else if (settlingStoryIndex >= 0) {
      clearPendingTransition();
      commitStory(settlingStoryIndex);
    }
  }, [clearPendingTransition, commitReset, commitStory, reducedMotion, resetting, settlingStoryIndex]);

  useEffect(() => () => clearPendingTransition(), [clearPendingTransition]);

  const startReset = () => {
    clearPendingTransition();

    if (reducedMotion) {
      commitReset();
      return;
    }

    setResetting(true);
    setComplete(false);
    setLiveMessage("Resetting the experience bar.");
    const runId = runIdRef.current;
    timerRef.current = window.setTimeout(() => {
      if (runIdRef.current !== runId) return;
      commitReset();
    }, TRANSITION_DURATION);
  };

  const loadNextStory = () => {
    if (complete) {
      startReset();
      return;
    }

    const storyIndex = loadedCount;
    const story = storyList[storyIndex];
    if (!story || settlingStoryIndex >= 0 || resetting) return;

    clearPendingTransition();

    if (reducedMotion) {
      commitStory(storyIndex);
      return;
    }

    setSettlingStoryIndex(storyIndex);
    setLiveMessage(`${getStoryTitle(story, storyIndex)} chapter loading.`);
    const runId = runIdRef.current;
    timerRef.current = window.setTimeout(() => {
      if (runIdRef.current !== runId) return;
      commitStory(storyIndex);
    }, TRANSITION_DURATION);
  };

  const controlLabel = resetting
    ? "Resetting bar"
    : complete
      ? "Start over"
      : settlingStory
        ? `Loading ${getStoryTitle(settlingStory, settlingStoryIndex)}`
        : nextStory
          ? `Load ${getStoryTitle(nextStory, loadedCount)}`
          : "No story available";

  const statusText = resetting
    ? "Returning all plate pairs to the rack."
    : complete
      ? "All four experience chapters are on the bar."
      : settlingStory
        ? `${getStoryTitle(settlingStory, settlingStoryIndex)} is settling onto the bar.`
        : `${loadedCount} of ${MAX_STORIES} experience chapters loaded.`;

  return (
    <section
      aria-busy={settlingStoryIndex >= 0 || resetting}
      aria-label="Strongman experience playscreen"
      className={`lift-play-screen ${complete ? "is-complete" : ""} ${
        settlingStoryIndex >= 0 ? "is-settling" : ""
      } ${resetting ? "is-resetting" : ""}`}
      data-loaded-count={loadedCount}
    >
      <div className="lift-play-screen__event-picker" role="group" aria-label="Choose a strongman event">
        {eventList.map((event, index) => {
          const eventId = getEventId(event, index);
          const isSelected = eventId === activeEventId;

          return (
            <button
              aria-controls={`${instanceId}-event-stage`}
              aria-pressed={isSelected}
              className={`lift-play-screen__event-button ${isSelected ? "is-selected" : ""}`}
              key={eventId}
              onClick={() => setSelectedEventId(eventId)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {event.label}
            </button>
          );
        })}
      </div>

      <div className="lift-play-screen__stage" id={`${instanceId}-event-stage`}>
        <figure className="lift-play-screen__event-media">
          {selectedImage.src && (
            <picture className="lift-play-screen__picture" key={activeEventId}>
              {imageSources.map((source) => (
                <source
                  key={`${source.media || "all"}-${source.srcSet}`}
                  media={source.media}
                  srcSet={source.srcSet}
                  type={source.type}
                />
              ))}
              <img
                alt={
                  selectedImage.alt ||
                  `Gabriel Connolly competing in the ${selectedEvent?.label || "selected strongman"} event`
                }
                className="lift-play-screen__photo"
                decoding="async"
                loading={selectedIndex > 0 ? "lazy" : "eager"}
                sizes={selectedImage.sizes || "(max-width: 720px) 100vw, 58vw"}
                src={selectedImage.src}
                srcSet={selectedImage.srcSet}
              />
            </picture>
          )}

          <figcaption className="lift-play-screen__lower-third">
            <span>Event {String(selectedIndex + 1).padStart(2, "0")}</span>
            <strong>{selectedEvent?.label}</strong>
          </figcaption>

          <svg
            aria-label="GC, Load Tested Systems, 2027"
            className="lift-play-screen__badge"
            role="img"
            viewBox="0 0 200 200"
          >
            <defs>
              <path id={`${instanceId}-badge-top`} d="M 28 100 A 72 72 0 0 1 172 100" />
              <path id={`${instanceId}-badge-bottom`} d="M 172 108 A 72 72 0 0 1 28 108" />
            </defs>
            <circle className="lift-badge__outer" cx="100" cy="100" r="94" />
            <circle className="lift-badge__ring" cx="100" cy="100" r="76" />
            <circle className="lift-badge__hub" cx="100" cy="100" r="48" />
            <text className="lift-badge__rim-text">
              <textPath href={`#${instanceId}-badge-top`} startOffset="50%" textAnchor="middle">
                LOAD TESTED
              </textPath>
            </text>
            <text className="lift-badge__rim-text">
              <textPath href={`#${instanceId}-badge-bottom`} startOffset="50%" textAnchor="middle">
                SYSTEMS 2027
              </textPath>
            </text>
            <text className="lift-badge__monogram" textAnchor="middle" x="100" y="112">
              GC
            </text>
            <circle className="lift-badge__bolt" cx="20" cy="100" r="3" />
            <circle className="lift-badge__bolt" cx="180" cy="100" r="3" />
          </svg>
        </figure>

        <div className="lift-play-screen__test">
          <svg
            aria-labelledby={`${instanceId}-barbell-title ${instanceId}-barbell-description`}
            className={`lift-play-screen__barbell ${complete ? "is-lifted" : ""}`}
            role="img"
            viewBox="0 0 760 280"
          >
            <title id={`${instanceId}-barbell-title`}>Experience chapter barbell</title>
            <desc id={`${instanceId}-barbell-description`}>
              Four paired plate sets represent Wells Fargo, Salt32, Knight Hacks, and USO philanthropy. One experience
              chapter loads per button press.
            </desc>
            <g className="lift-barbell__assembly">
              <rect className="lift-barbell__shaft" height="14" rx="7" width="690" x="35" y="133" />
              <rect className="lift-barbell__collar" height="34" width="20" x="72" y="123" />
              <rect className="lift-barbell__collar" height="34" width="20" x="668" y="123" />
              <circle className="lift-barbell__sleeve" cx="48" cy="140" r="10" />
              <circle className="lift-barbell__sleeve" cx="712" cy="140" r="10" />

              {PLATE_SLOTS.map((slot, index) => {
                const story = storyList[index];
                if (!story) return null;

                const isSettling = index === settlingStoryIndex;
                const isLoaded = !resetting && (index < loadedCount || isSettling);
                const isActive = !resetting && index === activeStoryIndex;
                const stateClasses = `${isLoaded ? "is-loaded" : ""} ${isSettling ? "is-settling" : ""} ${
                  isActive ? "is-active" : ""
                }`;
                const plateLabel = story.plate || story.plateLabel || DEFAULT_PLATE_LABELS[index];

                return (
                  <g
                    className={`lift-plate-pair lift-plate-pair--${index + 1} ${stateClasses}`}
                    key={getStoryId(story, index)}
                  >
                    {[slot.leftX, slot.rightX].map((x, sideIndex) => (
                      <g
                        className={`lift-plate lift-plate--${index + 1} ${
                          sideIndex === 0 ? "lift-plate--left" : "lift-plate--right"
                        } ${stateClasses}`}
                        data-plate-color={slot.color}
                        key={sideIndex === 0 ? "left" : "right"}
                      >
                        <rect
                          className="lift-plate__body"
                          height={slot.height}
                          rx="6"
                          width={slot.width}
                          x={x}
                          y={slot.y}
                        />
                        <rect
                          className="lift-plate__groove"
                          height={slot.height - 16}
                          rx="4"
                          width={slot.width - 14}
                          x={x + 7}
                          y={slot.y + 8}
                        />
                        <text
                          className="lift-plate__label"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          x={x + slot.width / 2}
                          y="140"
                        >
                          {plateLabel}
                        </text>
                      </g>
                    ))}
                  </g>
                );
              })}
            </g>
          </svg>

          <div className="lift-play-screen__controls">
            <button
              aria-describedby={`${instanceId}-load-status`}
              aria-disabled={settlingStoryIndex >= 0 || resetting || (!nextStory && !complete)}
              className="lift-play-screen__run"
              onClick={loadNextStory}
              type="button"
            >
              {controlLabel}
            </button>
            <span className="lift-play-screen__status" id={`${instanceId}-load-status`}>
              {statusText}
            </span>
            <span aria-atomic="true" aria-live="polite" className="lift-play-screen__announcement" role="status">
              {liveMessage}
            </span>
          </div>
        </div>
      </div>

      <section
        aria-labelledby={`${instanceId}-story-title`}
        className={`lift-play-screen__story-panel ${activeStory ? "is-active" : "is-empty"}`}
      >
        <div className="lift-story-panel__meta">
          <span>{activeStory?.category || "Experience chapters"}</span>
          <span>
            {String(Math.max(activeStoryIndex + 1, 0)).padStart(2, "0")} / {String(MAX_STORIES).padStart(2, "0")}
          </span>
        </div>
        <strong className="lift-story-panel__title" id={`${instanceId}-story-title`}>
          {activeStory ? getStoryTitle(activeStory, activeStoryIndex) : "Load one experience at a time"}
        </strong>
        <p className="lift-story-panel__short">
          {activeStory?.short || "Each click adds one paired plate set and opens the story it represents."}
        </p>
        {activeStory?.detail && <p className="lift-story-panel__detail">{activeStory.detail}</p>}
      </section>
    </section>
  );
};

export default LiftPlayScreen;
