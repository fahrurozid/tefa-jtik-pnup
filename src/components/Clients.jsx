import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/41/vVisa_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Coinbase_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/John_Deere_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/zZoom_Communications_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Grand_Hyatt_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fender_logo.svg",
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-dark">Our Clients</h3>
        <hr className="w-16 h-1 bg-primary border-0 rounded-full mt-4 mb-6 mx-auto" />
        <p className="max-w-2xl mx-auto text-gray">Client wleowleo</p>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="client-slider mt-16"
        >
          {clientLogos.map((logoSrc, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img src={logoSrc} alt={`Client Logo ${index + 1}`} className="h-8 filter grayscale hover:grayscale-0 transition-all duration-300" />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination mt-12 relative"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
