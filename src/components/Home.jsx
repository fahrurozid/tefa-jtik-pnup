import React from "react";
import styles from "./Home.module.css";

import heroMockup from "../assets/icon-network.svg";
// import shape1 from "../assets/icon-network.svg";
import shape2 from "../assets/icon-network.svg";
// import shape3 from "../assets/icon-network.svg";

const Home = () => {
  return (
    <section id="home" className="relative bg-light pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className={styles.heroTitle}>
              Launch your <br />
              <span className={styles.highlight}>Tech</span> Career <br />
              at JTIK
            </h1>
            <p className="mt-6 text-gray-600 max-w-lg mx-auto lg:mx-0">Solusi terbaik untuk mengasah skill teknologimu, bekerja pada proyek nyata, dan berkolaborasi dengan para ahli di industri.</p>
            <div className="mt-8 flex justify-center lg:justify-start items-center gap-6">
              <a href="#products" className={styles.primaryBtn}>
                Explore Projects
              </a>
            </div>
          </div>

          <div className={styles.visualsContainer} data-aos="fade-left" data-aos-delay="200">
            <img src={heroMockup} alt="TEFA JTIK Project Mockup" className="w-full h-auto" />

            {/* <img src={shape1} alt="Decorative Shape" className="hidden lg:block absolute -top-12 -right-12 w-48 h-auto -z-10" data-aos="zoom-in" data-aos-delay="400" /> */}
            <img src={shape2} alt="Decorative Shape" className="hidden lg:block absolute top-1/2 -left-12 w-24 h-auto -z-10" data-aos="zoom-in" data-aos-delay="500" />
            {/* <img src={shape3} alt="Decorative Shape" className="hidden lg:block absolute bottom-0 right-0 w-12 h-auto" data-aos="zoom-in" data-aos-delay="600" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
