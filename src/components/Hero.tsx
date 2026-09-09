import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Decorative ambient blobs */}
      <div
        className="brand-blob animate-float-slow -top-40 -left-40 w-[30rem] h-[30rem] md:w-[38rem] md:h-[38rem]"
        aria-hidden="true"
      />
      <div
        className="brand-blob animate-float-slow-reverse top-1/4 -right-48 w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem] opacity-60"
        aria-hidden="true"
      />

      <div className="container-width relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-2 animate-slide-down">
            <h1 className="hero-title mt-4 px-4">
              {t('hero.word1')} <span className="text-[0.55em] font-normal mx-1 align-middle text-brand">/</span> {t('hero.word2')} <br />
              <span className="text-[0.55em] font-normal mx-1 align-middle text-brand">/</span> {t('hero.word3')}
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            {t('hero.tagline')}
          </p>

          <div className="pt-4 animate-fade-in [animation-delay:400ms]">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-brand text-brand-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              {t('hero.cta')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
