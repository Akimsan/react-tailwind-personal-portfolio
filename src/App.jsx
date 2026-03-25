import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import { Footer } from "./layout/Footer";

function App() {
  const [count, setCount] = useState(0); // Now it's correct

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;