import React from 'react';

const labs = ["Lab RPL & DevOps", "Lab AI/ML", "Lab IoT & Embedded", "Lab Jaringan & Keamanan", "Lab Multimedia/AR‑VR"];
const partnerships = ["Project Delivery", "Joint Development", "Research Collaboration"];

const Infrastructure = () => {
  return (
    <section className="bg-dark text-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">Fasilitas & Laboratorium</h2>
            <ul className="space-y-3">
              {labs.map((lab, index) => (
                <li key={index} className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span>{lab}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-6">Kolaborasi & Kemitraan</h2>
            <ul className="space-y-3">
              {partnerships.map((p, index) => (
                <li key={index} className="flex items-center gap-3">
                  <i className="fas fa-handshake text-primary"></i>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;