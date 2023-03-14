import { gsap } from "gsap";
import { useRef } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "../navigationBar/Nav";
import Animation from "../consultingAndStrategy/animation";

export default function Digitalmarketing() {
  return (
    <>
      <Navbar />
      <main>
        {/* <AnimatedCursor color="255, 255, 255"/> */}
        <section className="otherservices">
          <h1 className="inner-service-h1">Digital Marketing</h1>
        </section>
        <Animation />
        <div className="slidecontainer">
          <Servicesslide />
        </div>
      </main>
      <Footer />
    </>
  );
}
