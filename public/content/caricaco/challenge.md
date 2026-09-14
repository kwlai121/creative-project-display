Fundación Caricaco's youth entrepreneurship program, Academia Caricaco, was running on a free HTML template — Bootstrap 5 and jQuery, unmaintained since launch. The contact form was the real danger: it posted to a PHP script that no longer existed, so any applicant who typed a message instead of clicking the main button lost it silently, with no error and no confirmation. For a program with a hard application deadline, that's not a bug — it's an invisible leak of exactly the people the foundation exists to reach.

### Key Challenges

- **A Form That Lied** — The contact form appeared to work, but silently discarded every message sent through it instead of the primary CTA, with zero error feedback to the applicant or the foundation.
- **Invisible to Search** — The site's `<title>` and meta description still read "Free HTML Templates." A foundation fighting inequality was, from Google's perspective, an unbranded template demo.
- **A Message Undermined by Its Own Execution** — The signature CTA button ("Aplicación Gratuita") appeared four times across the page in three different font sizes and two different typefaces, and a key header vanished entirely at certain laptop viewport widths.

The program's applicants are 18–29-year-olds in urban and peri-urban areas with high unemployment, most arriving from a social-media campaign that promises something serious — a Platzi partnership, a $5,000 prize, real mentorship. The landing page they hit didn't match that promise, and there was no error message telling them so. They just didn't finish applying, and didn't come back.
