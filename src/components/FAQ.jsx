import React, { useState } from "react";
import styles from "./FAQ.module.css";

// 1. Semua data Q&A Anda dimasukkan ke dalam array ini
const faqData = [
  {
    question: "Apa perbedaan TEFA dengan praktikum biasa?",
    answer: "TEFA mengerjakan proyek nyata dengan standar mutu industri langsung dari mitra, sedangkan praktikum biasa berfokus pada pemahaman konsep dasar akademis.",
  },
  {
    question: "Siapa yang mengerjakan proyek?",
    answer: "Proyek dikerjakan oleh tim mahasiswa terpilih yang telah lolos seleksi, di bawah bimbingan langsung dari dosen ahli dan engineer profesional dari perusahaan mitra.",
  },
  {
    question: "Bagaimana kualitas proyek dijaga?",
    answer: "Kualitas dijaga melalui beberapa tahapan, termasuk code review, pengujian (unit testing, E2E testing), demo berkala dengan klien, dan pemenuhan acceptance criteria yang disepakati.",
  },
  {
    question: "Bisakah TEFA mengurus hosting atau domain?",
    answer: "Ya, kami menyediakan layanan penuh mulai dari pengembangan hingga deployment, termasuk manajemen hosting dan domain melalui paket layanan Cloud & DevOps kami.",
  },
  {
    question: "Bagaimana pengaturan Hak Kekayaan Intelektual (HKI)?",
    answer: "Pengaturan HKI mengacu pada skema yang disepakati bersama di awal proyek, yang akan dituangkan dalam kontrak kerja sama (MoU/PKS).",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button className="w-full flex justify-between items-center text-left" onClick={onClick}>
        <h3 className="text-lg font-semibold text-dark">{item.question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
          <i className="fas fa-plus text-primary"></i>
        </span>
      </button>
      <div className={`${styles.answer} ${isOpen ? "max-h-96 pt-4" : "max-h-0"}`}>
        <p className="text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    // Jika item yang sama diklik lagi, tutup. Jika tidak, buka item baru.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark">Frequently Asked Questions</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleItemClick(index)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
