import React from "react";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { withBase } from "@/lib/basePath";

const Hero = () => {
  const { language, t } = useLanguage();

  // No Chinese CV yet — falls back to the English one, same pattern used
  // for case-study content elsewhere in the app.
  const cvFileName = language === 'es' ? 'King-Wai-Lai-Yu-CV-ES.pdf' : 'King-Wai-Lai-Yu-CV-EN.pdf';

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Bauhaus composition — Kandinsky's canonical pairing: blue circle, red square, yellow triangle */}
      <div
        className="bauhaus-shape rounded-full bg-bauhaus-blue border-4 border-foreground -top-20 -left-20 w-64 h-64 md:w-[26rem] md:h-[26rem] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="bauhaus-shape bg-bauhaus-red border-4 border-foreground rotate-12 top-20 -right-8 w-32 h-32 md:top-16 md:-right-14 md:w-48 md:h-48"
        aria-hidden="true"
      />
      <div
        className="bauhaus-triangle bottom-6 left-[6%] md:bottom-14 md:left-[14%]"
        style={{
          borderLeft: "46px solid transparent",
          borderRight: "46px solid transparent",
          borderBottom: "80px solid hsl(var(--bauhaus-yellow))",
          filter: "drop-shadow(4px 4px 0 hsl(var(--foreground)))",
        }}
        aria-hidden="true"
      />
      <div
        className="bauhaus-shape rounded-full border-4 border-foreground bg-background top-1/3 right-[8%] w-14 h-14 hidden md:block"
        aria-hidden="true"
      />

      <div className="container-width relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-2 animate-slide-down">
            <span className="label-tag bg-bauhaus-yellow text-bauhaus-yellow-foreground">
              {t('hero.eyebrow')}
            </span>
            <h1 className="hero-title mt-4 px-4">
              {t('hero.word1')} <span className="text-[0.55em] font-normal mx-1 align-middle text-bauhaus-red">/</span> {t('hero.word2')} <br />
              <span className="text-[0.55em] font-normal mx-1 align-middle text-bauhaus-blue">/</span> {t('hero.word3')}
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            {t('hero.tagline')}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3 bg-primary text-primary-foreground border-2 border-foreground font-bold uppercase tracking-wide shadow-hard-red transition-all hover:-translate-y-[3px] hover:-translate-x-[3px] hover:shadow-hard-blue"
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

            <a
              href={withBase(`/${cvFileName}`)}
              download={cvFileName}
              className="inline-flex items-center px-7 py-3 bg-background text-foreground border-2 border-foreground font-bold uppercase tracking-wide shadow-hard-blue transition-all hover:-translate-y-[3px] hover:-translate-x-[3px] hover:shadow-hard-red"
            >
              <Download className="w-5 h-5 mr-2" aria-hidden="true" />
              {t('hero.downloadCv')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
