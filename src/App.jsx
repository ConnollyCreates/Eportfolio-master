import { useEffect, useRef, useState } from "react";
import LiftPlayScreen from "./components/LiftPlayScreen.jsx";
import SignalIcon from "./components/SignalIcon.jsx";
import resumeUrl from "./assets/gabriel-connolly-resume.pdf";
import {
  about,
  archiveProjects,
  contact,
  deadlift,
  earlierEngineering,
  experience,
  hero,
  leadership,
  loadStories,
  nav,
  selectedProjects,
  skills,
} from "./data/portfolio.js";

const resumeFilename = "Gabriel-Connolly-Resume.pdf";

const isExternal = (href = "") => href.startsWith("http");

const iconForLabel = (label = "") => {
  const normalized = label.toLowerCase();
  if (normalized.includes("github")) return "github";
  if (normalized.includes("linkedin")) return "linkedin";
  if (normalized.includes("email")) return "mail";
  if (normalized.includes("resume")) return "download";
  return "external";
};

function LinkAction({ link, className = "text-link", children }) {
  const external = isExternal(link.href);
  const icon = link.href.startsWith("#") ? "arrow" : iconForLabel(link.label);
  return (
    <a
      className={className}
      download={link.download ? (typeof link.download === "string" ? link.download : resumeFilename) : undefined}
      href={link.href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children ?? link.label}
      <SignalIcon name={icon} size={17} />
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const priorFocusRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    priorFocusRef.current = document.activeElement;
    const firstLink = menuPanelRef.current?.querySelector("a");
    firstLink?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }

      if (event.key === "Tab" && menuPanelRef.current) {
        const focusable = [
          menuButtonRef.current,
          ...menuPanelRef.current.querySelectorAll("a, button"),
        ].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = ({ restoreFocus = false } = {}) => {
    setMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => priorFocusRef.current?.focus());
    }
  };

  const emailLink = contact.email ?? { label: "Email", href: "mailto:gconnolly0208@gmail.com" };

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Gabriel Connolly, home">
        <span className="brand__disc" aria-hidden="true">GC</span>
        <span className="brand__name">Gabriel Connolly</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <a href={item.href} key={item.label}>{item.label}</a>
        ))}
      </nav>

      <a className="header-email" href={emailLink.href}>
        <SignalIcon name="mail" size={17} />
        <span>Email</span>
      </a>

      <button
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        className="menu-button"
        onClick={() => {
          if (menuOpen) closeMenu({ restoreFocus: true });
          else setMenuOpen(true);
        }}
        ref={menuButtonRef}
        type="button"
      >
        <SignalIcon name={menuOpen ? "close" : "menu"} size={22} />
      </button>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation" ref={menuPanelRef}>
          <div className="mobile-nav__score">UCF computer science · May 2027</div>
          <nav aria-label="Mobile navigation">
            {nav.map((item, index) => (
              <a href={item.href} key={item.label} onClick={() => closeMenu()}>
                <span>0{index + 1}</span>
                {item.label}
                <SignalIcon name="arrow" />
              </a>
            ))}
            <a href={emailLink.href} onClick={() => closeMenu()}>
              <span>05</span>
              Email
              <SignalIcon name="mail" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [activeStoryId, setActiveStoryId] = useState(null);
  const profileLinks = (hero.profileLinks ?? contact.links ?? []).filter(
    (link) => !link.href.startsWith("mailto:"),
  );
  const primaryAction = hero.primaryAction ?? { label: "View experience", href: "#experience" };
  const resumeAction = hero.resumeAction ?? { label: "Download resume", href: resumeUrl, download: true };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__identity">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.name}</h1>
        <p className="hero__role">{hero.role}</p>
        <p className="hero__education">{hero.education}</p>
        <p className="hero__statement">{hero.statement}</p>
        <p className="hero__availability">
          <span aria-hidden="true" />
          {hero.availability}
        </p>
      </div>

      <div className="hero__visual">
        <LiftPlayScreen
          deadlift={deadlift}
          onStoryChange={setActiveStoryId}
          stories={loadStories}
        />
      </div>

      <ol className="hero__chapters" aria-label="Experiences represented on the bar">
        {loadStories.map((item) => (
          <li
            className={`chapter-readout${activeStoryId === item.id ? " is-active" : ""}`}
            key={item.id}
          >
            <span>{item.category}</span>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ol>

      <div className="hero__actions">
        <LinkAction className="button button--primary" link={primaryAction} />
        <LinkAction className="button button--secondary" link={{ ...resumeAction, href: resumeUrl, download: true }} />
        <div className="hero__profiles" aria-label="Profile and contact links">
          <a href={(contact.email ?? {}).href ?? "mailto:gconnolly0208@gmail.com"}>
            Email <SignalIcon name="mail" size={16} />
          </a>
          {profileLinks.map((link) => (
            <LinkAction className="profile-link" key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ headingId, number, label, title, intro }) {
  return (
    <header className="section-heading">
      <div className="section-heading__label">
        <span>{number}</span>
        {label}
      </div>
      <div>
        <h2 id={headingId}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}

function MetricReadout({ metrics = [] }) {
  if (!metrics.length) return null;
  return (
    <dl className="metric-readout">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`}>
          <dt>{metric.value}</dt>
          <dd>{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function TechnologyList({ technologies = [] }) {
  if (!technologies.length) return null;
  return (
    <ul className="technology-list" aria-label="Technologies used">
      {technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  );
}

function EntryLinks({ links = [] }) {
  if (!links.length) return null;
  return (
    <div className="entry-links">
      {links.map((link) => <LinkAction key={link.label} link={link} />)}
    </div>
  );
}

function ImageLightbox({ image, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const handleCancel = (event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.showModal();

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      if (dialog.open) dialog.close();
    };
  }, [onClose]);

  return (
    <dialog
      aria-label="Expanded project screenshot"
      className="image-lightbox"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      ref={dialogRef}
    >
      <div className="image-lightbox__content">
        <div className="image-lightbox__toolbar">
          <p>{image.caption}</p>
          <button aria-label="Close expanded image" className="image-lightbox__close" onClick={onClose} type="button">
            Close <SignalIcon name="close" size={18} />
          </button>
        </div>
        <img alt={image.alt} className="image-lightbox__image" src={image.src} />
      </div>
    </dialog>
  );
}

function ImageGallery({ media }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <div className="entry-media-gallery" aria-label={media.label ?? "Project screenshots"}>
        {media.images.map((image) => (
          <figure className="entry-media" key={image.src}>
            <button
              aria-label={`Expand ${image.alt}`}
              className="entry-media__zoom"
              onClick={() => setActiveImage(image)}
              type="button"
            >
              <img
                alt={image.alt}
                height={image.height}
                loading="lazy"
                src={image.src}
                width={image.width}
              />
              <span>Expand image <SignalIcon name="zoom" size={17} /></span>
            </button>
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {activeImage && <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />}
    </>
  );
}

function EntryDetails({ entry, summaryLabel = "Technical details" }) {
  const hasContent = entry.details?.length || entry.technologies?.length || entry.media;
  if (!hasContent) return null;
  return (
    <details className="technical-details">
      <summary>
        {summaryLabel}
        <SignalIcon className="details-chevron" name="chevron" size={18} />
      </summary>
      <div className="technical-details__body">
        {entry.details?.length > 0 && (
          <ul className="decision-list">
            {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        )}
        <TechnologyList technologies={entry.technologies} />
        {entry.media?.kind === "image" && (
          <figure className={`entry-media${entry.media.presentation ? ` entry-media--${entry.media.presentation}` : ""}`}>
            <img
              alt={entry.media.alt}
              height={entry.media.height}
              loading="lazy"
              src={entry.media.src}
              srcSet={entry.media.srcSet}
              sizes={entry.media.sizes}
              width={entry.media.width}
            />
            {entry.media.caption && <figcaption>{entry.media.caption}</figcaption>}
          </figure>
        )}
        {entry.media?.kind === "gallery" && <ImageGallery media={entry.media} />}
      </div>
    </details>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        headingId="experience-title"
        number="01"
        label="Experience"
        title="Where I’ve been."
        intro="Here's a quick overview of each experience. Open the details if you wanna see how I got it done."
      />
      <div className="competition-table">
        <div className="competition-table__header" aria-hidden="true">
          <span>Organization / role</span>
          <span>What I worked on</span>
          <span>Highlights</span>
        </div>
        {experience.map((entry, index) => (
          <article className="experience-row" key={entry.id}>
            <div className="entry-rank" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
            <header className="entry-identity">
              <p>{entry.date}</p>
              <h3>{entry.organization}</h3>
              <span>{entry.role}</span>
              {entry.location && <small>{entry.location}</small>}
            </header>
            <div className="entry-outcome">
              <p>{entry.outcome}</p>
              <EntryLinks links={entry.links} />
              <EntryDetails entry={entry} />
            </div>
            <MetricReadout metrics={entry.metrics} />
          </article>
        ))}
      </div>

      <details className="archive-block earlier-engineering">
        <summary>
          <span>Earlier Experiences</span>
          <span>{earlierEngineering.length} roles</span>
          <SignalIcon className="details-chevron" name="chevron" size={19} />
        </summary>
        <div className="archive-list">
          {earlierEngineering.map((entry) => (
            <article key={entry.id}>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.organization}</p>
              </div>
              <time>{entry.date}</time>
              <p>{entry.summary}</p>
              <EntryLinks links={entry.links} />
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}

function ProjectSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        headingId="projects-title"
        number="02"
        label="Projects"
        title="A few things I’ve done."
        intro="These are the projects I’m proudest of, from a product I shipped on my own to two fast-moving team builds."
      />

      <div className="project-list">
        {selectedProjects.map((project, index) => (
          <article
            className={`project-row${project.metrics?.length ? "" : " project-row--no-metrics"}`}
            key={project.id}
          >
            <div className="project-row__index">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>Project</small>
            </div>
            <div className="project-row__body">
              <div className="project-row__title">
                <div>
                  <p>{project.date}</p>
                  <h3>{project.name}</h3>
                </div>
                <EntryLinks links={project.links} />
              </div>
              <p className="project-row__outcome">{project.outcome}</p>
              {project.summary && <p className="project-row__summary">{project.summary}</p>}
              <EntryDetails entry={project} summaryLabel="What I built" />
            </div>
            <MetricReadout metrics={project.metrics} />
          </article>
        ))}
      </div>

      <details className="archive-block project-archive">
        <summary>
          <span>Project archive</span>
          <span>{archiveProjects.length} builds</span>
          <SignalIcon className="details-chevron" name="chevron" size={19} />
        </summary>
        <div className="archive-list">
          {archiveProjects.map((project) => (
            <article key={project.id}>
              <div>
                <h3>{project.title ?? project.name}</h3>
                {project.date && <time>{project.date}</time>}
              </div>
              <p>{project.summary}</p>
              <EntryLinks links={project.links} />
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}

function AboutSection() {
  const education = about.education ?? {};
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <SectionHeading
        headingId="about-title"
        number="03"
        label="About"
        title={about.heading}
      />

      <div className="about-grid">
        <div className="about-copy">
          <p>{about.body}</p>
          {about.media?.src && (
            <figure className="about-photo">
              <img
                alt={about.media.alt}
                height={about.media.height}
                loading="lazy"
                src={about.media.src}
                srcSet={about.media.srcSet}
                sizes={about.media.sizes}
                width={about.media.width}
              />
              {about.media.caption && <figcaption>{about.media.caption}</figcaption>}
            </figure>
          )}
        </div>

        <div className="credentials">
          <article className="education-block">
            <p className="credentials__label">Education</p>
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <time>{education.graduation}</time>
            {education.distinctions?.length > 0 && (
              <ul>{education.distinctions.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            )}
          </article>
          <div className="leadership-list">
            <p className="credentials__label">Leadership and recognition</p>
            {leadership.map((item) => (
              <article key={item.id ?? item.organization}>
                <h3>{item.organization}</h3>
                <p>{item.role} · {item.date}</p>
                <p>{item.summary}</p>
                {item.highlights?.length > 0 && (
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                )}
                <EntryLinks links={item.links} />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-row" aria-label="Technical toolkit">
        {skills.map((group) => (
          <div key={group.label ?? group.name}>
            <h3>{group.label ?? group.name}</h3>
            <p>{(group.items ?? group.technologies ?? []).join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const links = (contact.links ?? []).filter(
    (link) => !link.label.toLowerCase().includes("resume"),
  );
  const email = contact.email ?? { label: "gconnolly0208@gmail.com", href: "mailto:gconnolly0208@gmail.com" };
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">04 · Contact</p>
        <h2 id="contact-title">{contact.heading ?? "Want to talk?"}</h2>
        <p>{contact.body}</p>
      </div>
      <div className="contact-actions">
        <a className="contact-email" href={email.href}>
          <span>Email</span>
          <strong>{email.label}</strong>
          <SignalIcon name="mail" size={20} />
        </a>
        <a className="contact-link" download={resumeFilename} href={resumeUrl}>
          Resume <SignalIcon name="download" />
        </a>
        {links.map((link) => <LinkAction className="contact-link" key={link.label} link={link} />)}
      </div>
    </section>
  );
}

function ResumePage() {
  return (
    <div className="resume-page">
      <a className="skip-link" href="#resume-document">Skip to resume</a>
      <header className="resume-header">
        <a className="brand" href="/">
          <span className="brand__disc" aria-hidden="true">GC</span>
          <span className="brand__name">Back to portfolio</span>
        </a>
        <div>
          <a className="button button--secondary" download={resumeFilename} href={resumeUrl}>
            Download PDF <SignalIcon name="download" />
          </a>
          <a className="button button--primary" href="mailto:gconnolly0208@gmail.com">
            Email Gabriel <SignalIcon name="mail" />
          </a>
        </div>
      </header>
      <main className="resume-view" id="resume-document">
        <div className="resume-view__heading">
          <p className="eyebrow">Gabriel Connolly · Resume</p>
          <h1>Backend / Infrastructure / Full-Stack Engineer</h1>
        </div>
        <object data={resumeUrl} type="application/pdf" aria-label="Gabriel Connolly resume PDF">
          <p>
            Your browser cannot display this PDF. <a href={resumeUrl}>Open the resume directly.</a>
          </p>
        </object>
      </main>
    </div>
  );
}

function PortfolioPage() {
  const footerLinks = [
    ...(contact.links ?? []).filter((link) => ["GitHub", "LinkedIn"].includes(link.label)),
    { label: "Email", href: contact.email?.href ?? "mailto:gconnolly0208@gmail.com" },
  ];

  return (
    <>
      <a className="skip-link" href="#experience">Skip to experience</a>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <span>Gabriel Connolly · UCF CS</span>
        <nav className="site-footer__links" aria-label="Footer links">
          {footerLinks.map((link) => {
            const external = isExternal(link.href);
            return (
              <a
                aria-label={link.label}
                href={link.href}
                key={link.label}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                <SignalIcon name={iconForLabel(link.label)} size={18} />
              </a>
            );
          })}
        </nav>
      </footer>
    </>
  );
}

export default function App() {
  return window.location.pathname === "/resume" ? <ResumePage /> : <PortfolioPage />;
}
