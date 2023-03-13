import "./home.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Ideas from "./ideas";
import BlogHome from "./BlogHome";

import Hero from "./Hero";
import HomeAbout from "./homeAbout";
import HomeServices from "./Homeservices";
import Testimonials from "./Testmonials";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
// import Blog from "../blog/Blog";

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
      <Navbar />
      <main ref={(el) => (fade = el)} className="home">
        <Hero />
        <HomeAbout />
        <HomeServices />
        <Testimonials />
        <BlogHome />
        {/* <Ideas /> */}
      </main>
      <Footer />
    </>
  );
}
