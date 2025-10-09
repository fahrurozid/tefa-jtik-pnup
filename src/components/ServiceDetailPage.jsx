import React from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../data";
import Header from "./Header";
import Footer from "./Footer";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = productsData.find((p) => p.slug === slug);

  if (!service) {
    return (
      <>
        <Header />
        <div className="text-center py-40">
          <h1 className="text-3xl font-bold">Layanan Tidak Ditemukan</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Kembali ke Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="bg-light">
      <Header />
      <main>
        <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <div className="bg-primary/10 text-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className={`${service.icon} text-3xl`}></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-dark">{service.title}</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
              <div className="lg:col-span-2" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-dark mb-4">Deskripsi Layanan</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-dark mb-4">Spesifikasi Proyek</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Output</p>
                      <p className="font-medium text-dark">{service.output}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Estimasi Durasi</p>
                      <p className="font-medium text-dark">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Catatan Biaya*</p>
                      <p className="font-medium text-dark">{service.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
