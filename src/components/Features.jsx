import React, { useState } from "react";
import styles from "./Features.module.css";

const featuresData = {
  nilaiTambah: {
    title: "Nilai Tambah",
    groups: [
      {
        title: "Untuk Industri",
        icon: "fas fa-industry",
        points: ["Solusi hemat biaya & cepat", "Akses ke talenta muda terbaik", "Inovasi berbasis riset terkini"],
      },
      {
        title: "Untuk Mahasiswa",
        icon: "fas fa-user-graduate",
        points: ["Pengalaman proyek nyata", "Portofolio profesional", "Praktik berstandar industri"],
      },
      {
        title: "Untuk Kampus",
        icon: "fas fa-university",
        points: ["Hilirisasi karya & riset", "Publikasi & perolehan HKI", "Jejaring kemitraan berkelanjutan"],
      },
    ],
  },
  modelOperasi: {
    title: "Model Operasi",
    content: [
      {
        title: "Metodologi",
        icon: "fas fa-project-diagram",
        description: "Project-based & Product-based learning dengan siklus sprint 2–3 minggu untuk hasil yang tangkas.",
      },
      {
        title: "Peran dalam Tim",
        icon: "fas fa-users",
        description: "Struktur tim profesional: Product Owner (mitra), Project Manager & Tech Lead (dosen), serta Developer & QA (mahasiswa).",
      },
      {
        title: "Quality Gate",
        icon: "fas fa-shield-alt",
        description: "Jaminan mutu melalui code review, testing (unit/E2E), pemenuhan standar keamanan dasar (OWASP Top 10), dan performance budget.",
      },
    ],
  },
};

const Features = () => {
  const [activeTab, setActiveTab] = useState("nilaiTambah");

  return (
    <section id="features" className="bg-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Tombol Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12" data-aos="fade-up">
          <button className={`${styles.tabButton} ${activeTab === "nilaiTambah" ? styles.active : ""}`} onClick={() => setActiveTab("nilaiTambah")}>
            Nilai Tambah
          </button>
          <button className={`${styles.tabButton} ${activeTab === "modelOperasi" ? styles.active : ""}`} onClick={() => setActiveTab("modelOperasi")}>
            Model Operasi
          </button>
        </div>

        {/* Konten Tab */}
        <div className={styles.content}>
          {activeTab === "nilaiTambah" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
              {featuresData.nilaiTambah.groups.map((group, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <i className={`${group.icon} text-primary text-2xl`}></i>
                    <h3 className="text-xl font-bold text-dark">{group.title}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside lg:ml-10">
                    {group.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "modelOperasi" && (
            <div className="max-w-4xl mx-auto space-y-8" data-aos="fade-up" data-aos-delay="200">
              {featuresData.modelOperasi.content.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
