import React from "react";
import styles from "./Home.module.css";

import abstractBgImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <section id="home" className="bg-light pt-24 pb-12 lg:pt-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div data-aos="fade-up">
          {/* <i className="fas fa-star-of-life text-accent text-3xl absolute bottom-14 right-1/4 opacity-60 z-0" data-aos="zoom-in" data-aos-delay="700"></i> */}

          <div className="flex justify-between items-start">
            {/* <p className="text-dark font-semibold">©{new Date().getFullYear()}</p> */}
            {/* <i className="fas fa-star-of-life text-primary text-4xl" data-aos="zoom-in" data-aos-delay="900"></i> */}
          </div>

          <h1 className={`${styles.heroTitle} mt-4`}>
            More Than Just <br />A <span className={styles.highlightText}>Teaching</span> Factory
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12" data-aos="fade-up" data-aos-delay="200">
          <div className={styles.statContainer}>
            <div className={styles.statCircle}></div>
            <div>
              <p className="text-xl font-bold text-dark">100+ Completed Projects</p>
              <p className="text-gray-500">From real industry partners</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">We don't just teach theories. We build real-world solutions by integrating specialist knowledge into our project-based learning.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 relative">
        <div className="relative rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
          <img src={abstractBgImage} alt="Abstract background" className="w-full h-[400px] object-cover" />

          <div className={`${styles.definitionCard} absolute bottom-8 left-8`}>
            <p className="font-bold text-dark">Teach·ing Fac·to·ry</p>
            <p className="text-sm text-gray-700 mt-1">An innovative learning model that combines academic education with real-world industry project production.</p>
          </div>

          <a href="#services" className={styles.rotatingBadge}>
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="circle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text className={styles.rotatingText}>
                <textPath xlinkHref="#circle">GET STARTED • GET STARTED • GET STARTED •</textPath>
              </text>
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={styles.badgeArrow}>
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
