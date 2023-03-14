import gsap from "gsap";
import { useRef } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "../navigationBar/Nav";
import Animation from "../consultingAndStrategy/animation";

export default function Productdevelopment() {
  return (
    <main>
      <Navbar />

      <section className="otherservices">
        {/* <AnimatedCursor color="255, 255, 255" /> */}

        <h1 className="inner-service-h1">
          Providing Ideas The Platform To Be Transformed Into Reality.
        </h1>
      </section>
      <Animation />
      <div className="slide-container">
        <Servicesslide />
      </div>
      <Footer />
    </main>
  );
}
