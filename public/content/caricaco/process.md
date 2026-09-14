### Discovery
I worked from a structured discovery brief with the foundation's team to map the real constraints: a tight, foundation-scale budget, a hard delivery deadline tied to the program's application window, and a contact form that was silently failing candidates. Understanding who actually lands on the page — mostly mobile-first applicants aged 18–29, arriving from social campaigns — shaped almost every decision that followed.

### Migration Planning
I audited the legacy Bootstrap/jQuery template to separate what was actually broken (the PHP form handler, the missing SEO, the responsive gaps) from what already worked (the brand identity, the program content), then planned the Astro/Tailwind rebuild around keeping the latter and fixing the former — not a redesign from scratch.

### Implementation
I rebuilt the page in Astro and Tailwind CSS v4, standardized the CTA button and type scale across every instance, embedded a Google Forms flow with a honeypot field tuned for the audience's low spam risk without adding CAPTCHA friction, and implemented schema.org structured data and per-page Open Graph metadata.

### Accessibility & Performance Validation
I audited the rebuilt site against WCAG 2.1 AA and tested it under throttled 3G/4G conditions, matching the connection quality most of the program's actual applicants use.
