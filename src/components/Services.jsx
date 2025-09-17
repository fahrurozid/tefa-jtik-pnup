import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold">Our Services</h3>
        <hr className="w-16 h-1 bg-primary border-0 rounded-full mt-4 mb-6 mx-auto" />
        <p className="max-w-2xl mx-auto text-gray">Layanan kami dirancang untuk membuat bisnis Anda menonjol dan lebih mudah dikenal.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl text-primary mb-4">
              <i className="fas fa-cloud"></i>
            </div>
            <h4 className="text-xl font-bold mb-2">Software As a Service</h4>
            <p className="text-gray text-sm">Layanan perangkat lunak berbasis cloud yang memudahkan akses dan penggunaan aplikasi tanpa perlu instalasi, hemat biaya, dan fleksibel sesuai kebutuhan.</p>
            <a href="#" className="inline-flex items-center mt-6 font-semibold text-primary hover:text-primary-dark">
              Know More <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl text-primary mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4 className="text-xl font-bold mb-2">Smart Device</h4>
            <p className="text-gray text-sm">Perangkat pintar yang terhubung dengan internet untuk mempermudah aktivitas sehari-hari melalui otomatisasi, kontrol jarak jauh, dan integrasi teknologi modern.</p>
            <a href="#" className="inline-flex items-center mt-6 font-semibold text-primary hover:text-primary-dark">
              Know More <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
