import React from "react";

const TrustBar = () => {
  return (
    <section className="bg-light relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-accent">10+</p>
              <p className="text-sm text-gray-300">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-accent">100+</p>
              <p className="text-sm text-gray-300">Proyek Selesai</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-accent">50+</p>
              <p className="text-sm text-gray-300">Mitra Industri</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-accent">95%</p>
              <p className="text-sm text-gray-300">Lulusan Siap Kerja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
