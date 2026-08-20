### Research & Requirements Gathering
I mapped the clinic's real constraints: no existing brand assets beyond a name, patients who default to WhatsApp over email, and a family narrative — three generations, since 1952 — to anchor the trust-building strategy.

### Data Architecture
I structured the site as a single page with anchor-based navigation, wired schema.org Organization markup and Open Graph metadata for how the site is represented off-site, and mapped the form-to-inbox pipeline: WPForms → authenticated SMTP via the Gmail API → the clinic's real inbox.

### UX Design & Prototyping
I built the visual system around the clinic's blue-to-teal tooth mark, keeping the palette cool and clinical rather than reaching for a warmer, more generic dental-brand look.

### Frontend Development
I built the site in WordPress/Elementor with hand-written CSS for the custom design system, responsive behavior down to 640px, and production image assets — logo lockups and hero photography — optimized and served as WebP.

### Testing & Optimization
I ran repeated Lighthouse audits and fixed every flagged issue with evidence: WCAG contrast ratios computed against the relative-luminance formula, heading hierarchy corrected, structured data added, then re-verified after each change.
