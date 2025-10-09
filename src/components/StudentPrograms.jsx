import React from "react";

const programs = [
  { icon: "fas fa-award", title: "Studio Produk Digital (Capstone)", description: "Mengerjakan proyek klien nyata selama 1–2 semester, dari awal hingga akhir." },
  { icon: "fas fa-flask", title: "Lab Terapan", description: "Spesialisasi di bidang: RPL, IoT, AI/ML, Jaringan, Keamanan, dan Multimedia." },
  { icon: "fas fa-briefcase", title: "PKL/KP Terintegrasi", description: "Penempatan langsung di proyek internal TEFA atau di perusahaan mitra industri." },
  { icon: "fas fa-lightbulb", title: "Startup Studio", description: "Mengembangkan produk dari tahap penemuan ide, pembuatan MVP, hingga pitching." },
];

const StudentPrograms = () => {
  return (
    <section className="bg-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark">Program Unggulan Mahasiswa</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <i className={`${program.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{program.title}</h3>
              <p className="text-sm text-gray-500">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentPrograms;
