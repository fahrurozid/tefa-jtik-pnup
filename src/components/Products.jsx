import React from "react";

import projectImage1 from "../assets/webdev.jpg";
import projectImage2 from "../assets/server.jpg";
import projectImage3 from "../assets/iot.jpg";

const projectsData = [
  {
    image: projectImage1,
    title: "College Information System",
    description: "Platform terpusat untuk mengelola data mahasiswa, jadwal, dan nilai secara efisien.",
    link: "#",
  },
  {
    image: projectImage2,
    title: "Network Design",
    description: "Solusi desain dan implementasi sistem jaringan.",
    link: "#",
  },
  {
    image: projectImage3,
    title: "Internet of Things (IoT)",
    description: "Perangkat pintar yang dirancang untuk monitoring dan otomatisasi, dari prototipe hingga implementasi.",
    link: "#",
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16" data-aos="fade-up">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">OUR TOP PRODUCTS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Find Your Next <br />
              <span className="text-accent">Favorite Product</span>
            </h2>
          </div>
          <div className="text-gray-600">
            <p>Kami menyediakan layanan pengembangan teknologi yang dirancang untuk membantu klien meningkatkan visibilitas, memperkuat brand, dan menjangkau target audiens secara efektif.</p>
            <a href="#" className="group inline-flex items-center text-primary font-semibold mt-4">
              Discover More
              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projectsData.map((project, index) => (
            <a href={project.link} key={index} className="group block" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="overflow-hidden rounded-1xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-top transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                <p className="text-gray-500 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
