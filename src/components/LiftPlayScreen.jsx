import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

const TRANSITION_DURATION = 1180;
const DEFAULT_PLATE_LABELS = ["25", "25", "25", "25", "5"];

// Inboard to outboard: four 25 kg plates and one 5 kg plate per side.
// A 20 kg bar plus 105 kg per side makes Gabriel's 230 kg deadlift.
const PLATE_SLOTS = [
  { leftX: 236, y: 75, width: 46, height: 130, color: "red", storyIndex: 0, delay: 0 },
  { leftX: 188, y: 75, width: 46, height: 130, color: "red", storyIndex: 1, delay: 0 },
  { leftX: 140, y: 75, width: 46, height: 130, color: "red", storyIndex: 2, delay: 0 },
  { leftX: 92, y: 75, width: 46, height: 130, color: "red", storyIndex: 3, delay: 0 },
  { leftX: 62, y: 96, width: 28, height: 88, color: "white", storyIndex: 3, delay: 110 },
];

const getStoryId = (story, index) => story?.id || `story-${index + 1}`;

const getStoryTitle = (story, index) =>
  story?.title || story?.organization || story?.source || story?.name || story?.label || `Story ${index + 1}`;

const getReducedMotionPreference = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const LiftPlayScreen = ({ deadlift = {}, stories = [], onStoryChange }) => {
  const instanceId = useId().replace(/:/g, "");
  const storyList = useMemo(
    () => (Array.isArray(stories) ? stories.filter(Boolean).slice(0, 4) : []),
    [stories],
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

  const image = deadlift.image || {};
  const imageSources = Array.isArray(image.sources) ? image.sources : [];
  const totalStories = storyList.length;
  const activeStory = activeStoryIndex >= 0 ? storyList[activeStoryIndex] : null;
  const nextStory = loadedCount < totalStories ? storyList[loadedCount] : null;
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
      const isComplete = nextCount === totalStories;
      setLoadedCount(nextCount);
      setActiveStoryIndex(storyIndex);
      setSettlingStoryIndex(-1);
      setComplete(isComplete);
      setLiveMessage(
        `${getStoryTitle(story, storyIndex)} loaded.${isComplete ? " The 230 kilogram deadlift story is complete." : ""}`,
      );
      notifyStoryChange(getStoryId(story, storyIndex));
      timerRef.current = null;
    },
    [notifyStoryChange, storyList, totalStories],
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
    setLiveMessage("Returning the plates to the rack.");
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
    setLiveMessage(`${getStoryTitle(story, storyIndex)} loading onto the bar.`);
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
    ? "Returning plates to the rack."
    : complete
      ? "All four chapters are loaded."
      : settlingStory
        ? `${getStoryTitle(settlingStory, settlingStoryIndex)} is settling onto the bar.`
        : `${loadedCount} of ${totalStories} chapters loaded.`;

  return (
    <section
      aria-busy={settlingStoryIndex >= 0 || resetting}
      aria-label="230 kilogram deadlift introduction"
      className={`lift-play-screen ${complete ? "is-complete" : ""} ${
        settlingStoryIndex >= 0 ? "is-settling" : ""
      } ${resetting ? "is-resetting" : ""}`}
      data-loaded-count={loadedCount}
    >
      <div className="lift-play-screen__stage" id={`${instanceId}-deadlift-stage`}>
        <figure className="lift-play-screen__event-media">
          {image.src && (
            <picture className="lift-play-screen__picture">
              {imageSources.map((source) => (
                <source
                  key={`${source.media || "all"}-${source.srcSet}`}
                  media={source.media}
                  srcSet={source.srcSet}
                  type={source.type}
                />
              ))}
              <img
                alt={image.alt || "Gabriel Connolly completing a deadlift at a strength competition"}
                className="lift-play-screen__photo"
                decoding="async"
                loading="eager"
                sizes={image.sizes || "(max-width: 720px) 100vw, 58vw"}
                src={image.src}
                srcSet={image.srcSet}
              />
            </picture>
          )}

          <figcaption className="lift-play-screen__lower-third">
            <span>Deadlift</span>
            <strong>{deadlift.totalKg || 230} kg PR</strong>
          </figcaption>

        </figure>

        <div className="lift-play-screen__test">
          <svg
            aria-labelledby={`${instanceId}-barbell-title ${instanceId}-barbell-description`}
            className={`lift-play-screen__barbell ${complete ? "is-lifted" : ""}`}
            role="img"
            viewBox="0 0 960 280"
          >
            <title id={`${instanceId}-barbell-title`}>230 kilogram deadlift barbell</title>
            <desc id={`${instanceId}-barbell-description`}>
              A 20 kilogram bar is loaded with four 25 kilogram plates and one 5 kilogram plate on each side for
              Gabriel Connolly&apos;s 230 kilogram deadlift. The chapters of his story load in four deliberate steps.
            </desc>
            <g className="lift-barbell__assembly">
              <rect className="lift-barbell__shaft" height="14" rx="7" width="890" x="35" y="133" />
              <rect className="lift-barbell__collar lift-barbell__collar--competition" height="38" rx="4" width="15" x="283" y="121" />
              <rect className="lift-barbell__collar lift-barbell__collar--competition" height="38" rx="4" width="15" x="662" y="121" />
              <path className="lift-barbell__collar-groove" d="M288 124v32m5-32v32m374-32v32m5-32v32" />
              <path
                className="lift-barbell__knurl"
                d="M400 135l7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10m5-10 7 10"
              />
              <circle className="lift-barbell__sleeve" cx="50" cy="140" r="10" />
              <circle className="lift-barbell__sleeve" cx="910" cy="140" r="10" />

              {PLATE_SLOTS.map((slot, index) => {
                const isSettling = slot.storyIndex === settlingStoryIndex;
                const isLoaded = !resetting && (slot.storyIndex < loadedCount || isSettling);
                const isActive = !resetting && slot.storyIndex === activeStoryIndex;
                const stateClasses = `${isLoaded ? "is-loaded" : ""} ${isSettling ? "is-settling" : ""} ${
                  isActive ? "is-active" : ""
                }`;
                const rightX = 960 - (slot.leftX + slot.width);
                const plateLabel = DEFAULT_PLATE_LABELS[index];

                return (
                  <g className={`lift-plate-pair lift-plate-pair--${index + 1} ${stateClasses}`} key={plateLabel + index}>
                    {[slot.leftX, rightX].map((x, sideIndex) => (
                      <g
                        className={`lift-plate lift-plate--${index + 1} ${
                          sideIndex === 0 ? "lift-plate--left" : "lift-plate--right"
                        } ${stateClasses}`}
                        data-plate-color={slot.color}
                        key={sideIndex === 0 ? "left" : "right"}
                        style={{ "--plate-delay": `${slot.delay}ms` }}
                      >
                        <rect className="lift-plate__body" height={slot.height} rx="6" width={slot.width} x={x} y={slot.y} />
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
          <span>{activeStory?.category || "The story behind the bar"}</span>
          <span>
            {String(Math.max(activeStoryIndex + 1, 0)).padStart(2, "0")} / {String(totalStories).padStart(2, "0")}
          </span>
        </div>
        <strong className="lift-story-panel__title" id={`${instanceId}-story-title`}>
          {activeStory ? getStoryTitle(activeStory, activeStoryIndex) : "Load the four chapters"}
        </strong>
        <p className="lift-story-panel__short">
          {activeStory?.short || "Each load adds real plates to a 230 kilogram deadlift and introduces one part of my story."}
        </p>
        {activeStory?.detail && (
          <details className="lift-story-panel__details" key={getStoryId(activeStory, activeStoryIndex)}>
            <summary>Read the full chapter</summary>
            <p>{activeStory.detail}</p>
          </details>
        )}
      </section>
    </section>
  );
};

export default LiftPlayScreen;
