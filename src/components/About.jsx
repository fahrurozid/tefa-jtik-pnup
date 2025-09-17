import React from "react";
import aboutUs from "../assets/about-us.svg";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center" data-aos="fade-right">
            <img src={aboutUs} alt="about us" className="w-full max-w-md rounded-2xl" />{" "}
          </div>
          <div className="text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-3xl font-bold text-dark">Who Are We?</h3>
            <hr className="w-16 h-1 bg-primary border-0 rounded-full mt-4 mb-6 mx-auto lg:mx-0" />
            <p className="text-gray leading-relaxed mb-4">
              Jurusan Teknik Informatika dan Komputer (JTIK) PNUP resmi berdiri pada Desember 2023 sebagai unit mandiri yang dimekarkan dari Jurusan Teknik Elektro. Kami berfokus pada pengembangan teknologi informasi dan komunikasi melalui
              dua program studi unggulan:
            </p>
            <ul className="list-disc list-inside text-gray space-y-2">
              <li>
                <b>Teknik Komputer dan Jaringan (TKJ)</b>
              </li>
              <li>
                <b>Teknik Multimedia dan Jaringan (TMJ)</b>
              </li>
            </ul>
            <p className="text-gray leading-relaxed mt-4">Pembentukan jurusan ini bertujuan untuk pengelolaan prodi yang lebih terarah dan meningkatkan daya saing lulusan di dunia industri.</p>
            <a href="https://tik.poliupg.ac.id/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-dark text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
