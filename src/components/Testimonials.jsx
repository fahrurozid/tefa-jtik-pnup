import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Testimonials.module.css";
import "swiper/css";

import avatar1 from "../assets/person1.jpg";
import avatar2 from "../assets/person2.jpg";
import avatar3 from "../assets/person3.jpg";

const testimonialsData = [
  {
    quote: "Mahasiswa dari TEFA JTIK menunjukkan kompetensi teknis luar biasa. Mereka cepat beradaptasi, solutif, dan menyelesaikan proyek tepat waktu.",
    avatar: avatar1,
    name: "Edgar Galon1",
    title: "Project Manager, Tech Solutions Inc.",
    stars: 5,
  },
  { quote: "Kami sangat terkesan dengan kualitas aplikasi mobile yang dikembangkan. Desainnya modern, mudah digunakan, dan membantu bisnis kami lebih efisien.", avatar: avatar2, name: "Edgar Galon2", title: "CEO, Startup Maju", stars: 5 },
  { quote: "Kolaborasi dengan TEFA JTIK adalah investasi berharga. Mereka menghadirkan solusi inovatif yang mendukung perkembangan bisnis kami.", avatar: avatar3, name: "Siti Kurma", title: "CTO, Digital Kreasi", stars: 4 },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="testimonials" className="bg-light py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:w-1/3 text-left" data-aos="fade-right">
            <i className="fas fa-quote-left text-5xl text-primary/20 mb-4"></i>
            <p className="text-sm font-bold text-dark uppercase tracking-wider mb-2">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-4xl font-bold text-primary leading-tight">
              What Our Partners Are <span className="text-accent">Saying</span>
            </h2>
            <div className="hidden lg:flex items-center justify-start gap-4 mt-8">
              <button ref={prevRef} className={`${styles.navButton} testimonial-prev-button`}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button ref={nextRef} className={`${styles.navButton} testimonial-next-button`}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3" data-aos="fade-left">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 } }}
              navigation={{
                prevEl: ".testimonial-prev-button",
                nextEl: ".testimonial-next-button",
              }}
              className="w-full"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className={`${styles.testimonialCard} flex flex-col h-full`}>
                    <div className="flex-grow">
                      <p className="text-gray-600">{testimonial.quote}</p>
                    </div>

                    <div className="mt-6">
                      <div className="flex text-yellow-500 mb-6">
                        {Array(testimonial.stars)
                          .fill(0)
                          .map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-dark">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-center gap-4 mt-8">
          <button className={`${styles.navButton} testimonial-prev-button`}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className={`${styles.navButton} testimonial-next-button`}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
