import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Home from "./components/Home";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    // <div className="bg-light text-dark relative overflow-x-hidden">
    <div className="bg-light text-dark relative">
      <div className="hidden lg:block absolute top-0 -left-64 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      {/* <div className="hidden lg:block absolute top-0 -right-64 w-96 h-96 bg-accent/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div> */}

      <Header />
      <main>
        <Home />
        <TrustBar />
        <About />
        <Services />
        <Products />
        <Clients />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
