import React from "react";
import styles from "./Home.module.css";
import innovationIllustration from "../assets/isometric-oren.svg";

const Home = () => {
  return (
    <section id="home" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Diubah menjadi flex, dengan flex-col di mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* 1. Tambahkan "order-2 lg:order-1" */}
          {/* Artinya: di mobile jadi urutan ke-2, di desktop jadi urutan ke-1 */}
          <div className="text-center lg:text-left order-2 lg:order-1" data-aos="fade-right">
            <h1 className={`${styles.glowOnHover} text-4xl md:text-5xl font-bold text-primary cursor-pointer`}>Where Innovation Meets</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 cursor-pointer">Real-World Practice</h2>
            <p className="mt-6 text-gray text-lg">Enabling academic excellence and industrial relevance through real production collaboration and innovation.</p>
            <a href="#products" className="mt-8 inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl">
              Discover More ›
            </a>
          </div>

          {/* 2. Tambahkan "order-1 lg:order-2" */}
          {/* Artinya: di mobile jadi urutan ke-1 (paling atas), di desktop jadi urutan ke-2 */}
          <div className="flex justify-center order-1 lg:order-2" data-aos="fade-left">
            <img src={innovationIllustration} alt="Innovation Illustration" className="w-full max-w-md rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
