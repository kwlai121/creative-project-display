import React from "react";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-2 animate-slide-down">
            <h1 className="hero-title mt-4 px-4">
              Designer <span className="text-[0.55em] font-normal mx-1 align-middle">/</span> Analyst <br />
              <span className="text-[0.55em] font-normal mx-1 align-middle">/</span> Doer
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Making complex things simple, one project at a time
          </p>

          <div className="pt-4 animate-fade-in [animation-delay:400ms]">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90"
            >
              Check out my projects
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
