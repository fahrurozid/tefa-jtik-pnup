import React from "react";

const productsData = [
  {
    icon: "fas fa-film",
    title: "Video & Digital Content Production",
    description: "Kami menyediakan layanan produksi video profesional, mulai dari video profil perusahaan, iklan digital, hingga konten media sosial.",
    delay: 50,
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile & Web Application Development",
    description: "Membangun aplikasi mobile (Android/iOS) dan website modern yang responsif sesuai kebutuhan bisnis Anda.",
    delay: 100,
  },
  {
    icon: "fas fa-pencil-alt",
    title: "Visual Branding Package",
    description: "Paket lengkap untuk identitas visual bisnis Anda, termasuk desain logo, palet warna, dan panduan merek.",
    delay: 150,
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud-Based Dashboard & Monitoring",
    description: "Solusi dashboard berbasis cloud untuk memonitor data bisnis Anda secara real-time dari mana saja.",
    delay: 200,
  },
  {
    icon: "fas fa-database",
    title: "Database System Solutions",
    description: "Perancangan dan implementasi sistem database yang efisien dan aman untuk mengelola data Anda.",
    delay: 250,
  },
  {
    icon: "fas fa-globe",
    title: "Network Design & Deployment",
    description: "Menyediakan layanan desain, instalasi, dan pemeliharaan infrastruktur jaringan komputer untuk kantor atau bisnis.",
    delay: 300,
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold">Our Products</h3>
        <hr className="w-16 h-1 bg-primary border-0 rounded-full mt-4 mb-6 mx-auto" />
        <p className="max-w-2xl mx-auto text-gray">Solusi digital lengkap untuk mengembangkan bisnis Anda. </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
          {productsData.map((product, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={product.delay} className="bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer h-full">
              <div className="flex-grow">
                <div className="text-3xl text-primary mb-4">
                  <i className={product.icon}></i>
                </div>
                <h4 className="text-lg font-bold mb-2">{product.title}</h4>
                <p className="text-gray text-sm leading-relaxed">{product.description}</p>
              </div>
              <div className="mt-6 text-right">
                <i className="fas fa-arrow-right text-primary text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
