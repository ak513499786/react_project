import "./home.css";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import Ideas from "./ideas";
import BlogHome from "./BlogHome";

import Hero from "./Hero";
import HomeAbout from "./homeAbout";
import HomeServices from "./Homeservices";
import Testimonials from "./Testmonials";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
// import Blog from "../blog/Blog";
// import { SmoothProvider } from "react-smooth-scrolling";
// import LazyLoad from "react-lazyload";

// import LazyLoad from "react-lazy-load";

export default function Home() {
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
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { visibility: 'hidden' }, { visibility: "visible" });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <header className="App-header" style={{ top: scrollY }}>
        <Navbar />
      </header>
      {/* <SmoothProvider skew={false} className="h-full"> */}
      <main ref={(el) => (fade = el)} className="home">
        <Hero />
        <HomeAbout />
        <HomeServices />
        <Testimonials />
        <BlogHome />
        {/* <Ideas /> */}
      </main>
      <footer className="App-footer" style={{ bottom: -scrollY }}>
        <Footer />
      </footer>
      {/* </SmoothProvider> */}
    </>
  );
}
