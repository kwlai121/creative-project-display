import React from 'react';
const Contact = () => {
  return <section id="contact" className="section">
      <div className="container-width">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
            Contact
          </span>
          <h2 className="mb-4">Let's work together</h2>
          <p className="text-muted-foreground mb-8">
            I'm open to new opportunities and collaborations. Whether you have a project in mind or just want to chat about design, feel free to reach out.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a href="tel:+50670494874" className="text-muted-foreground hover:text-foreground transition-colors">(506) 7049-4874</a>
            </div>
            
            <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:kwlai121@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">kwlai121@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;