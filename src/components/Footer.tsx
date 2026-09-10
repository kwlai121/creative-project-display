
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="accent-hairline py-10 border-t-2 border-foreground">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} K.Lai. {t('footer.rights')}
          </p>

          <nav className="flex items-center space-x-8" aria-label="Footer navigation">
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.projects')}
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/king-lai-3ab14324/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-bauhaus-blue transition-colors"
              aria-label={t('footer.linkedinAria')}
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:kwlai121@gmail.com"
              className="text-muted-foreground hover:text-bauhaus-red transition-colors"
              aria-label={t('footer.emailAria')}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
