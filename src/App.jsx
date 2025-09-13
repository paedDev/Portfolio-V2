import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/Showcase";
import Navbar from "./sections/Navbar";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Footer from "./sections/Footer";
gsap.registerPlugin(SplitText);
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
