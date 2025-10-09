import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    slug: "web-development",
    icon: "fas fa-laptop-code",
    title: "Web App Development",
    description: "Pengembangan sistem informasi, ERP mini, dan dashboard interaktif.",
  },
  {
    slug: "mobile-development",
    icon: "fas fa-mobile-alt",
    title: "Mobile App (Android/iOS)",
    description: "Aplikasi cross-platform menggunakan Flutter atau React Native.",
  },
  {
    slug: "data-analytics",
    icon: "fas fa-chart-bar",
    title: "Data Analytics & BI",
    description: "ETL, dashboard KPI, dan implementasi model prediksi dasar.",
  },
  {
    slug: "computer-vision",
    icon: "fas fa-eye",
    title: "Computer Vision / NLP",
    description: "Solusi deteksi wajah/objek, OCR, dan pengembangan chatbot.",
  },
  {
    slug: "iot-prototype",
    icon: "fas fa-microchip",
    title: "Prototype IoT",
    description: "Pengembangan perangkat dari sensor, gateway, hingga edge computing.",
  },
  {
    slug: "cloud-devops",
    icon: "fas fa-cloud-upload-alt",
    title: "Cloud & DevOps",
    description: "Migrasi cloud, hardening, CI/CD, containerization, dan monitoring.",
  },
  {
    slug: "cybersecurity",
    icon: "fas fa-shield-alt",
    title: "Security Assessment",
    description: "Vulnerability Assessment & Penetration Testing (VA/PT) tingkat dasar.",
  },
  {
    slug: "ui-ux",
    icon: "fas fa-drafting-compass",
    title: "UI/UX Design",
    description: "Perancangan wireframe, high-fidelity design, dan usability testing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16" data-aos="fade-up">
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Solusi Komprehensif untuk <span className="text-primary">Kebutuhan Anda</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-600">Setiap layanan yang kami tawarkan adalah hasil kolaborasi nyata antara mahasiswa bertalenta dan kebutuhan industri, menghasilkan solusi yang inovatif dan efektif.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Link
              to={`/service/${service.slug}`}
              key={index}
              className="group block bg-dark/5 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:bg-accent transition-all duration-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute top-6 right-6 bg-gray-100 group-hover:bg-primary group-hover:text-white rounded-full p-3 transition-colors duration-300">
                <i className="fas fa-arrow-right"></i>
              </div>

              <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
