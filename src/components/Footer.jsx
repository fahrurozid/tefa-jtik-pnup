import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold">
              Teaching Factory<span className="text-accent"> JTIK</span>
            </a>
            <p className="mt-4 text-sm text-gray-400">Jurusan Teknik Informatik dan Komputer, Politeknik Negeri Ujung Pandang</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#clients" className="text-gray-400 hover:text-accent">
                  Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Reach</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:+6282101245487" className="text-gray-400 hover:text-accent">
                  023456789237
                </a>
              </li>
              <li>
                <a href="mailto:tefa.jtik@gmail.com" className="text-gray-400 hover:text-accent">
                  tefa.jtik@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TEFA JTIK PNUP | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
