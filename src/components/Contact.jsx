import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contact Us</h4>
            <h3 className="text-3xl font-bold mt-2">
              Get In <span className="text-primary">Touch</span>
            </h3>
            <p className="mt-4 text-gray"> Punya tantangan digital? — Mari Diskusikan</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-primary text-xl mt-1"></i>
                <div>
                  <h5 className="font-bold">Address</h5>
                  <p className="text-gray">Jurusan Teknik Informatika & Komputer, Politeknik Negeri Ujung Pandang, Makassar, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-primary text-xl mt-1"></i>
                <div>
                  <h5 className="font-bold">Email Address</h5>
                  <a href="mailto:tefa.jtik@gmail.com" className="text-gray hover:text-primary">
                    email_tefa@pnup.ac.id
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <i className="fas fa-phone-alt text-primary text-xl mt-1"></i>
                <div>
                  <h5 className="font-bold">Phone Number</h5>
                  <a href="tel:62xxxxxxx" className="text-gray hover:text-primary">
                    +62‑xxx‑xxxx‑xxxx
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-primary text-xl mt-1"></i>
                <div>
                  <h5 className="font-bold">Jam Layanan</h5>
                  <p className="text-gray">Senin–Jumat 08.00–16.00 WITA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light p-8 rounded-2xl shadow-lg">
            <form action="#" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition" required />
                <input type="text" placeholder="Last Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition" required />
                <input type="text" placeholder="Contact Details" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition" />
              </div>
              <div>
                <textarea placeholder="Message" rows="5" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition" required></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg">
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
