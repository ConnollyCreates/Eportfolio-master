# Product

## Register

brand

## Users

The primary audience is technical recruiters, engineering managers, and senior engineers hiring 2027 new-grad software engineers for backend, infrastructure, and full-stack roles. They often scan for ten to thirty seconds between interviews, sometimes on a phone. They need Gabriel's role target, May 2027 graduation, main work and leadership chapters, resume, and contact paths without learning a custom interface.

The secondary audience is potential collaborators, founders, and students who want a deeper view of how Gabriel builds, leads, and approaches difficult systems work.

## Product Purpose

This portfolio introduces Gabriel as a backend-first, product-minded engineer who also cares deeply about community and service. Strongman supplies the memorable personal frame: every meaningful experience adds something to the bar. The writing should sound like Gabriel explaining his work to another person, not like a case-study generator.

Success means a recruiter can quickly identify Gabriel, his target roles, May 2027 availability, and the four parts of his story:

- Enterprise engineering at Wells Fargo.
- Co-founding and building Salt32.
- Community leadership through Knight Hacks.
- Philanthropy through Theta Chi and the USO.

The first viewport must expose Experience, resume, email, GitHub, and LinkedIn paths. No interaction can be required to understand Gabriel or reach his work.

## Brand Personality

Strong, curious, and grounded.

The page should feel like a strongman competition broadcast designed by a systems engineer. Authentic lift photography, score graphics, ruled tables, plate geometry, and concise lower thirds create the setting. The voice is friendly, specific, and comfortable using first person. Strength is expressed through the work and the life behind it, never chest-thumping or unsupported claims.

## Information Architecture

Use one memorable opening playscreen followed by a familiar recruiter journey:

1. **Experience:** Wells Fargo 2026, Salt32, and Wells Fargo 2025, followed by one collapsed Earlier engineering disclosure.
2. **Projects:** StackRoast, MemorAI, and JPMorgan Chase Code for Good, followed by a compact project archive.
3. **About:** A concise strongman connection, UCF education, leadership and recognition, plus a compact grouped technical toolkit.
4. **Contact:** Direct email, resume, GitHub, and LinkedIn links.

The header exposes Experience, Projects, About, and Resume. Email remains the persistent action. The resume header link opens `/resume`; prominent hero and contact actions may download the PDF.

## Signature Interaction

The opening playscreen offers Deadlift and Overhead Press event selectors. Deadlift is selected by default. Overhead Press imagery loads only after the visitor requests it. The second label follows the supplied photograph accurately; it can become Log Press when a matching authorized image is available.

A code-native barbell overlay carries four symmetric plate pairs labeled `WF`, `S32`, `KH`, and `USO`. Each pair represents one part of Gabriel's story: Wells Fargo, Salt32, Knight Hacks, and philanthropy for the USO. From the bar outward, the physical plate order is red, red, blue, then green.

The load is manual and deliberate. Each button press adds exactly one plate pair over roughly 800 milliseconds, reveals the matching short story, and changes the button to name the next chapter. The fourth pair settles before the bar rises. The completed control offers `Start over`; it resets the bar without automatically rushing through the sequence again. This is a short personal introduction, not a game or navigation gate. React state, inline SVG, and CSS transforms are sufficient. Do not use canvas, physics, dragging, audio, or a new runtime dependency.

Under reduced-motion preferences, keep the same click-by-click progression but remove decorative movement and delays. Core identity, chapter labels, navigation, and actions remain visible before and without running the interaction.

## Content Policy

The updated resume is authoritative wherever sources overlap. Preserve useful material that exists only on the live portfolio in compressed form, including earlier Java roles, Wells Fargo Postman and Taproot work, older projects, scholarships, and leadership recognition.

Do not restore generic service cards, outdated technology logo collections, long autobiography sections, old strength numbers, or unsupported percentage claims. Strongman writing must not include personal records or coaching history.

Favor ordinary language over portfolio jargon. Avoid phrases such as `production products`, `systems under real constraints`, `failure modes`, `engineering evidence`, or `correctness` when a clearer sentence can say what Gabriel actually built. Project summaries should answer what it is, why Gabriel built it, and what he personally handled before listing implementation detail.

The exact WSM logo, the `WORLD'S STRONGEST MAN` word mark, event trade dress, and any derivative mark that implies endorsement or affiliation are prohibited. Use the original circular `GC · LOAD TESTED · SYSTEMS · 2027` plate badge as Gabriel's identity mark. Incidental meet branding may remain inside authentic, authorized photography, but it cannot become interface branding.

## Anti-references

- A segmented case-study maze that makes recruiters traverse ledgers, maps, rounds, or repeated timelines before reaching experience.
- A video game fan interface with menus, lore, health bars, crosshairs, scanlines, or controls that obscure the portfolio.
- The exact WSM logo, `WORLD'S STRONGEST MAN` branding, or any presentation that suggests sponsorship, competition participation, or official affiliation.
- Generic AI portfolio design: purple gradients, glass panels, repeated icon cards, giant technology logo walls, and vague superlatives.
- A resume dump that presents dense bullets before clear outcomes.
- An interaction gate that hides identity, Gabriel's story, navigation, or contact information.
- A heavy WebGL, canvas, or physics showcase that drains batteries or stutters on mobile.
- A bodybuilding aesthetic based on flames, chrome bevels, aggression, or motivational slogans.

## Design Principles

1. **Person first.** Identity, target role, May 2027 timing, four meaningful chapters, and direct actions belong in the opening experience.
2. **Strength frames the work.** The competition visual system makes Gabriel memorable, while every label and interaction points back to a real experience.
3. **One playscreen, then standard reading.** The opening may be theatrical. Experience, Projects, About, and Contact use familiar scrolling, anchors, tables, rows, links, and native disclosures.
4. **Interaction is an optional introduction.** The load sequence helps a visitor learn Gabriel's story without withholding information.
5. **Authenticity beats imitation.** Use Gabriel's authorized photography and an original badge. Do not copy sports or entertainment intellectual property.
6. **Earn every byte and movement.** Responsive imagery, deferred secondary media, compact bundles, and static reduced-motion states demonstrate engineering judgment.

## Accessibility and Performance

Target WCAG 2.2 AA. All content and controls must work with keyboard, touch, screen readers, zoom, reduced-motion preferences, and without hover. Maintain logical heading order, useful alt text, descriptive links, visible focus, sufficient contrast, and touch targets of at least 44 by 44 CSS pixels. Event selectors expose their selected state, each loaded chapter is announced through a polite live region, and information is never conveyed by color or motion alone.

The experience must remain complete at 360 CSS pixels wide. Mobile order is identity, event image and load control, compact chapter strip, and actions. Avoid horizontal overflow at 360, 390, 768, and 1440 pixel validation widths.

Keep production JavaScript below 65 KB gzip and CSS below 10 KB gzip. Keep the initial mobile hero image below 90 KB. Do not request the Overhead Press image until the selector is activated. Do not autoplay audio or video. Respect data-saving behavior where practical and retain meaningful content if enhancement code fails.
