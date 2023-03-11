import "./home.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Ideas from "./ideas";

import Hero from "./Hero";
import HomeAbout from "./homeAbout";
import HomeServices from "./Homeservices";
import Testimonials from "./Testmonials";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Home() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <main ref={(el) => (fade = el)} className="home">
        <Navbar />
        <Hero />
        <HomeAbout />
        <HomeServices />
        <Testimonials />
        <Ideas />
      </main>
      <Footer />
    </>
  );
}
