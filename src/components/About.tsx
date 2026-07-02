
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden">
              <img 
                src="/images/klai-me.jpg"
                alt="King, happily sitting next to a lake."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
              About Me
            </span>
<h2 className="mb-6">To build a better Internet</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a designer and technologist with extensive experience in digital environments, I've witnessed and adapted to the many iterations of the Internet. My work has spanned organizational contexts from experimental-focused startups to process-driven enterprises, each presenting unique opportunities for innovation.
              </p>
              <p>
                My design philosophy is built on understanding people's needs, business goals, and technological possibilities to create solutions that innovate, but mainly solve real problems.
              </p>
              <p>
                Let's work together on the quest to build a better Internet.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">Design Tools</h3>
                <p className="text-sm text-muted-foreground">Figma, Lovable, Protopie, Adobe Suite, Affinity</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">Methodology</h3>
                <p className="text-sm text-muted-foreground">Human-centered Design, Design Thinking, Lean UX, Agile</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">Advocacy</h3>
                <p className="text-sm text-muted-foreground">Usability, Accessibility, Ethical AI</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-foreground">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Design Systems, Workshops, Mentoring, Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
