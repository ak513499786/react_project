import "./home.css";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import BlogHome from "./BlogHome";

import Hero from "./Hero";
import HomeAbout from "./homeAbout";
import HomeServices from "./Homeservices";
import Testimonials from "./Testmonials";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Home({ isDarkMode, toggleDarkMode }) {
  let fade = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.75 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "0" });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <header className="App-header" style={{ top: scrollY }}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main ref={(el) => (fade = el)} className="home">
        <Hero />
        {/* <div className="mt-10"> */}
        <HomeAbout />
        {/* </div> */}
        <HomeServices />
        <Testimonials />
        <BlogHome />
      </main>
      <footer className="App-footer" style={{ bottom: -scrollY }}>
        <Footer />
      </footer>
    </>
  );
}
