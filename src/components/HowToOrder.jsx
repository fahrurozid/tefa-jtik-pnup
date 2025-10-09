import React from "react";

const steps = [
  "Ajukan kebutuhan via formulir RFQ.",
  "Diskusi teknis & feasibility check.",
  "Penawaran & penandatanganan SoW.",
  "Project Kick-off & sprint planning.",
  "Iterasi pengembangan & demo berkala.",
  "UAT, Go-Live, & handover dokumentasi.",
];

const HowToOrder = () => {
  return (
    <section className="bg-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark">Alur Pemesanan Proyek</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 mb-8" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">{index + 1}</div>
              <p className="pt-1.5 text-lg text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
