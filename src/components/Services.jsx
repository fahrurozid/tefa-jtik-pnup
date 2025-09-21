import React from "react";

const servicesData = [
  {
    mainIcon: "fas fa-cloud", 
    title: "Software as a Service",
    description: "Proyek aplikasi yang diselesaikan dengan teknologi modern.",
    decorativeIcon: "fas fa-cloud", 
  },
  {
    mainIcon: "fas fa-microchip", 
    title: "Smart Device",
    description: "Tingkat keandalan pada solusi jaringan yang kami bangun.",
    decorativeIcon: "fas fa-microchip",
  },
  {
    mainIcon: "fas fa-envelope-open-text", 
    title: "Persuratan",
    description: "Jangkauan audiens dari konten digital yang kami produksi.",
    decorativeIcon: "fas fa-envelope-open-text",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-light">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-3xl font-bold text-dark">Our Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div> */}
        <div className="grid lg:grid-cols-2 gap-4 items-center mb-16">
          <div data-aos="fade-right">
            <h2 className="text-4xl lg:text-5xl font-medium text-dark leading-tight">
              How We Deliver <span className="text-accent">Real World</span> Impact
            </h2>
          </div>
          <div data-aos="fade-left">
            <p className="text-gray-600">Setiap layanan yang kami tawarkan adalah hasil kolaborasi nyata antara mahasiswa bertalenta dan kebutuhan industri, menghasilkan solusi yang inovatif dan efektif.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service, index) => (
            <a href="#" key={index} className="group block bg-black/5 rounded-3xl p-8 shadow-lg hover:bg-accent transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="absolute top-6 right-6 bg-gray-100 group-hover:bg-primary rounded-full p-2 transition-colors duration-300">
                <i className="fas fa-arrow-right text-dark group-hover:text-white transition-colors duration-300"></i>
              </div>

              <div className="h-20">
                {" "}
                <i className={`${service.mainIcon} text-5xl text-primary group-hover:text-dark transition-colors duration-300`}></i>
              </div>

              <h3 className="text-3xl font-semibold text-primary group-hover:text-black transition-colors duration-300 mt-1">{service.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-black transition-colors duration-300 mt-2">{service.description}</p>

              <div className="absolute -bottom-8 -right-8 text-accent/30 group-hover:text-white/10 transition-colors duration-300">
                <i className={`${service.decorativeIcon} fa-7x`}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
