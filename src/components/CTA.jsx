import React from "react";

const CTA = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold text-white">Ready to bring your ideas to life?</h3>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto">Let's collaborate to build something amazing. Reach out to us today and let's get started on your next project.</p>
        <a href="#contact" className="mt-8 inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTA;
