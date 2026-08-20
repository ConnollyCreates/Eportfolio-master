---
name: Gabriel Connolly Portfolio
description: A recruiter-first strongman competition broadcast for a backend-first software engineer.
colors:
  arena: "oklch(14% 0.018 25)"
  graphite: "oklch(21% 0.024 25)"
  chalk: "oklch(94% 0.015 85)"
  muted-tape: "oklch(76% 0.025 75)"
  signal-red: "oklch(62% 0.20 29)"
  plate-blue: "oklch(58% 0.12 245)"
  success-green: "oklch(77% 0.14 135)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 9vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.08em"
rounded:
  hard: "0px"
  plate: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.arena}"
    typography: "{typography.label}"
    rounded: "{rounded.hard}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.hard}"
    padding: "12px 18px"
  score-label:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.muted-tape}"
    typography: "{typography.label}"
    rounded: "{rounded.hard}"
    padding: "6px 10px"
---

# Design System: Gabriel Connolly Portfolio

## Overview

**Creative North Star: The Load-Tested Broadcast**

The physical scene is a recruiter watching one decisive lift on a competition broadcast, then reading a clean results sheet before the next candidate call. The screen is dark enough to frame authentic arena photography, chalk-white type cuts through the scene, red signals action, blue belongs to plates and selected controls, and green confirms a completed system state.

The design is strong, curious, and grounded. Strongman creates recognition, while the plates introduce the work, community, and service that shaped Gabriel. The opening playscreen has the force of a broadcast title card. Everything below it becomes faster and more conventional: ruled experience rows, approachable project stories, a concise human profile, and direct contact.

**Key characteristics:**

- One competition playscreen, followed by four familiar recruiter sections.
- Authentic deadlift and overhead press photography with code-native broadcast graphics.
- Barlow Condensed for physical force and Source Sans 3 for fast reading.
- Ruled score tables and lower thirds instead of stacks of floating cards.
- An original circular plate badge that reads `GC · LOAD TESTED · SYSTEMS · 2027`.
- Optional click-by-click lift motion that introduces four parts of Gabriel's story without gating them.

## Colors

The strategy is a committed arena palette. Near-black warm neutrals and chalk text dominate the surface. Red, blue, and green each have one clear broadcast role.

### Foundation

- **Arena** (`oklch(14% 0.018 25)`): Main page, header, deep image overlays, and highest-contrast regions.
- **Graphite** (`oklch(21% 0.024 25)`): Score rows, selected surfaces, disclosure bodies, and secondary panels.
- **Chalk** (`oklch(94% 0.015 85)`): Primary text, key rules, and high-contrast marks.
- **Muted Tape** (`oklch(76% 0.025 75)`): Dates, metadata, descriptions, and passive labels.

### Signals

- **Signal Red** (`oklch(62% 0.20 29)`): Primary actions, live recording marks, and one decisive emphasis per region.
- **Plate Blue** (`oklch(58% 0.12 245)`): Selected event, barbell plates, links, and visible focus rings.
- **Success Green** (`oklch(77% 0.14 135)`): Completed load test, availability, and verified outcomes only.

**The Broadcast Signal Rule.** Red prompts action, blue marks selection and plate hardware, and green confirms completion. Never use those colors as interchangeable decoration. Any colored state also needs text, shape, or icon support.

## Typography

**Display and score font:** Barlow Condensed, with Arial Narrow and sans-serif fallbacks.  
**Body and interface font:** Source Sans 3, with Segoe UI and sans-serif fallbacks.

There is no monospace family. Technical credibility comes from structure and evidence, not terminal costume.

### Hierarchy

- **Hero display:** Barlow Condensed 700, `clamp(3.6rem, 9vw, 8rem)`, 0.86 line height. Use for Gabriel's name and the decisive opening statement.
- **Section heading:** Barlow Condensed 700, `clamp(2.4rem, 5vw, 4.8rem)`, 0.94 line height. Use for Experience, Projects, About, and Contact.
- **Row title:** Barlow Condensed 600, `clamp(1.45rem, 2.4vw, 2rem)`, 1 line height. Use for roles, companies, and projects.
- **Body:** Source Sans 3 400, `1rem`, 1.58 line height, capped at 70 characters.
- **Interface label:** Source Sans 3 700, `0.75rem`, 0.08em tracking. Reserve uppercase for short event, score, status, and button labels.

**The Human Voice Rule.** Display typography can be loud. Copy should sound like Gabriel talking to a curious recruiter: first person where natural, concrete nouns and verbs, and enough context to understand why the work mattered. Never substitute adjectives for substance.

## Layout and Rhythm

Use a strict visible grid inspired by televised results graphics. Full-width rules establish the structure; uneven column widths prioritize the result and outcome. Avoid centered stacks and repeated cards.

### Opening playscreen

- Desktop uses a split composition. Identity occupies the left track; the event photograph and lift overlay occupy the larger right track.
- The first viewport includes Gabriel's name, target roles, UCF and May 2027, a plainspoken introduction, four compact life and work chapters, and Experience, resume, email, GitHub, and LinkedIn actions.
- Mobile order is identity, event image and load control, compact chapter strip, then actions. Do not require the lift interaction to understand any chapter.
- Use a restrained photo scrim for legibility. Do not place copy over visually busy portions without a solid tonal fallback.

### Recruiter sections

- Experience uses full-width ruled rows with role, date, one outcome sentence, metrics, technologies, and a native Technical details disclosure.
- Projects uses three selected result rows plus one compact archive disclosure.
- About pairs one short strongman paragraph with education, leadership, recognition, and a single grouped toolkit row.
- Contact is a compact ruled footer section with direct links. It does not consume an entire viewport.

Spacing alternates between dense score information and generous section changes. Use 16 to 24 pixels inside rows, 48 to 96 pixels between major sections, and fluid outer gutters.

## Identity Badge

The badge is an original circular plate mark, not a sports logo. Its outer ring reads `GC · LOAD TESTED · SYSTEMS · 2027`; a simple `GC` monogram or hub shape occupies the center. Render it as inline SVG or CSS so it remains sharp, tintable, and lightweight.

Do not use the exact WSM logo, `WORLD'S STRONGEST MAN` word mark, crown motifs, globe lockups, copied typography, or recognizable event trade dress. Do not describe Gabriel as affiliated with, sponsored by, or competing in WSM. Incidental meet branding inside authorized photos remains documentary background only.

## Components

### Header

Use a compact fixed or sticky header with Gabriel's original plate badge, Experience, Projects, About, and Resume. Email is the persistent action. The mobile menu uses an explicit open and close button, full-width 48 pixel rows, focus containment while open, Escape support, and focus restoration when closed.

### Event selector

Deadlift and Overhead Press are two adjacent buttons with an accessible selected state. Deadlift is the default. Plate Blue identifies the selected event through fill plus text or icon. The Overhead Press image must not be requested until selection. Rename this event to Log Press only after a matching authorized photograph is supplied.

### Lift stage

The event photograph carries a code-native barbell overlay. Four symmetric plate pairs read `WF`, `S32`, `KH`, and `USO`. They represent Wells Fargo, Salt32, Knight Hacks, and Gabriel's philanthropy work for the USO. From the bar outward, use red, red, blue, then green so the visual follows a believable powerlifting load. Plates look like simplified competition plates, not branded equipment. Keep labels readable at 360 pixels and expose each full story in nearby text.

### Load the next chapter control

The primary Signal Red button advances one deliberate step at a time:

1. `Load Wells Fargo` adds the `WF` pair and shows the enterprise engineering story.
2. `Load Salt32` adds the `S32` pair and shows the founder and builder story.
3. `Load Knight Hacks` adds the `KH` pair and shows the community story.
4. `Load Theta Chi + USO` adds the `USO` pair and shows the philanthropy story.
5. After the fourth pair settles, raise the completed bar by 12 pixels and offer `Start over`.

Each pair uses an approximately 800 millisecond transform and opacity transition so a visitor can follow the movement. Disable the control only while that single pair is settling. Start over resets the unloaded state and waits for the next user click. Animate only opacity and transforms with `cubic-bezier(0.16, 1, 0.3, 1)`. Under reduced motion, keep the manual progression but apply each step immediately.

### Chapter strip

Show four compact, always-readable chapter labels: Wells Fargo, Salt32, Knight Hacks, and Theta Chi with the USO. The story panel reveals a human one-line summary after each click. The short plate labels are mnemonic shortcuts, and the chapter strip highlights the current story.

### Experience and project rows

Rows use full boundaries or horizontal rules, never colored side stripes. Each primary item shows scan content before an optional native disclosure. Details remain in the document flow and work without custom animation. Technologies are compact text groups, not logo walls or decorative hashtags.

### Buttons and links

Primary buttons are Signal Red with Arena text for accessible small-label contrast. Secondary buttons use Arena or Graphite with a complete Chalk or Muted Tape border. Selected Plate Blue controls also use Arena text. Controls are at least 44 pixels tall. Hover can lift a control by 2 pixels; focus uses a 3 pixel Plate Blue outline with a 3 pixel offset. Do not animate layout properties.

## Depth and Imagery

Depth comes from authentic photography, tonal separation, complete boundaries, and score-table rules. Avoid ambient shadows, glass blur, glossy chrome, and ornamental glows. A restrained shadow is acceptable only to separate the barbell graphic from the photograph.

Deadlift is the only initial hero request. Supply responsive width and format variants and keep the mobile candidate below 90 KB. Overhead Press loads after explicit selection. Every meaningful photo has concise alt text that identifies Gabriel, the lift, and the relevant setting without overstating competition credentials.

## Accessibility and Responsive Rules

- Meet WCAG 2.2 AA contrast and semantic requirements.
- Preserve logical heading order and one clear page landmark structure.
- Keep every tap target at least 44 by 44 CSS pixels.
- Make event selection, menu state, disclosures, and load-test status keyboard and screen-reader operable.
- Use a polite live region to announce which chapter was loaded and when the full bar is ready.
- Do not convey meaning through red, blue, or green alone.
- Remove sequence timing and decorative transforms under `prefers-reduced-motion`.
- Do not autoplay sound, video, or vibration.
- Prevent horizontal overflow and preserve complete content at 360 pixels wide and 200% zoom.
- Validate at 1440 by 900, 768 by 1024, 390 by 844, and 360 by 800.

## Performance Rules

- Keep production JavaScript below 65 KB gzip.
- Keep production CSS below 10 KB gzip.
- Keep the initial mobile Deadlift image below 90 KB.
- Defer Overhead Press imagery until event selection.
- Use React state, inline SVG, and CSS transforms for the lift. Do not add canvas, physics, or animation libraries.
- Reserve media dimensions to avoid layout shift.
- Preserve readable identity, chapter summaries, links, and experience if enhancement code fails.

## Do and Do Not

### Do

- Put identity, May 2027 availability, role fit, personal chapters, and direct actions in the first viewport.
- Let authentic strongman photography make the page memorable.
- Keep Experience, Projects, About, and Contact conventional and fast to scan.
- Use score graphics, lower thirds, ruled tables, and plate geometry with restraint.
- Make every interactive result available as visible text.
- Use the original `GC · LOAD TESTED · SYSTEMS · 2027` badge.

### Do not

- Do not use the exact WSM logo, `WORLD'S STRONGEST MAN` branding, copied trade dress, or any implied affiliation.
- Do not build a video game menu, fantasy environment, segmented quest, or recruiter traversal puzzle.
- Do not use generic AI design signals such as purple gradients, glass panels, repeated icon cards, or vague superlatives.
- Do not use monospace as shorthand for engineering credibility.
- Do not use gradient text, colored side-stripe borders, nested cards, decorative shadows, or chrome bevels.
- Do not hide core content behind the lift interaction, menu, hover, or animation.
- Do not restore outdated technology logos, unsupported claims, old strength numbers, or long biography copy.
