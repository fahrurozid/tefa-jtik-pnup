import React from "react";
import styles from "./WorkProcess.module.css";

const processSteps = [
  { icon: "fas fa-comments", title: "Briefing & Planning", description: "Memahami kebutuhan klien dan merencanakan ruang lingkup proyek bersama tim mahasiswa." },
  { icon: "fas fa-drafting-compass", title: "Design & Prototype", description: "Merancang solusi, membuat wireframe, dan mengembangkan prototipe fungsional." },
  { icon: "fas fa-code", title: "Development", description: "Tahap eksekusi di mana tim kami melakukan coding, konfigurasi, dan implementasi teknis." },
  { icon: "fas fa-rocket", title: "Testing & Delivery", description: "Melakukan pengujian kualitas menyeluruh sebelum menyerahkan hasil akhir proyek kepada klien." },
];

const WorkProcess = () => {
  return (
    <section id="process" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16" data-aos="fade-up">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">HERE ARE THE STEPS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Bagaimana Cara Kami <span className="text-primary">Bekerja?</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-600">Kami memiliki proses kerja yang terstruktur untuk memastikan setiap proyek ditangani dengan benar sesuai dengan kebutuhan Anda.</p>
          </div>
        </div>

        <div className="lg:hidden">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 border-2 border-gray-200 bg-white rounded-full flex items-center justify-center flex-shrink-0 z-10">
                  <i className={`${step.icon} text-primary text-2xl`}></i>
                </div>
                {index < processSteps.length - 1 && <div className="w-px h-full bg-gray-300"></div>}
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className={styles.stepsContainer}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.stepItem} data-aos="zoom-in" data-aos-delay={index * 150}>
                <div className={styles.stepIcon}>
                  <i className={`${step.icon} text-primary text-2xl`}></i>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-x-8 mt-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 150}>
                <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
