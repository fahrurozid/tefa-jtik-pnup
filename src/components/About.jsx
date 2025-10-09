import React from "react";
import aboutUsImage from "../assets/abous.svg";

const About = () => {
  return (
    <section id="about" className="bg-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            {/* <img src={aboutUsImage} alt="Tim TEFA JTIK berkolaborasi" className="rounded-2xl shadow-lg w-full h-full object-cover" /> */}
            <img src={aboutUsImage} alt="Tim TEFA JTIK berkolaborasi" className="rounded-2xl w-full h-full object-cover" />
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">ABOUT US</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Kenapa Harus <span className="text-primary">Memilih</span> Kami?
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Teaching Factory TIK PNUP adalah ekosistem produksi layanan dan produk digital yang memadukan pembelajaran, riset terapan, dan layanan industri. Setiap proyek mengusung deliverable terukur, quality gate ketat, serta standar
              DevOps untuk memastikan solusi siap diadopsi.
            </p>
            <a href="https://tik.poliupg.ac.id/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-primary font-semibold mt-8">
              Learn More
              <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
