import React from "react";

// Data untuk kartu statistik, kita sesuaikan agar memiliki ikon
const statsData = [
  {
    icon: "fas fa-users",
    value: "50+",
    label: "Industry Partners",
  },
  {
    icon: "fas fa-check-circle",
    value: "100+",
    label: "Completed Projects",
  },
  {
    icon: "fas fa-star",
    value: "4.9/5.0",
    label: "Client Review",
  },
];

const TrustBar = () => {
  return (
    <section id="stats" className="bg-light py-20 lg:py-90">
      <div className="container mx-auto px-10">
        <div className="mb-14" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
            Unlock the Potential of <br />
            Our <span className="text-primary">Teaching Factory</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200/80 rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex-shrink-0 bg-primary text-accent2 w-14 h-14 rounded-full flex items-center justify-center">
                <i className={`${stat.icon} text-xl`}></i>
              </div>

              <div>
                <p className="text-2xl font-bold text-dark">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
