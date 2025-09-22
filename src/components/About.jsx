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
              Why You Should Choose <span className="text-primary">TEFA JTIK</span>
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Kami adalah teaching factory yang berspesialisasi dalam pengembangan web, manajemen jaringan, dan produksi konten digital. Tim ahli kami yang terdiri dari dosen dan mahasiswa bekerja sama untuk memberikan solusi yang
              disesuaikan untuk memenuhi kebutuhan spesifik industri.
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
