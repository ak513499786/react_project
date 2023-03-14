import gsap from "gsap";
import { useRef } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Animation from "../consultingAndStrategy/animation";

export default function UX() {
  return (
    <main>
      <Navbar />

      <section className="otherservices">
        <h1 className="inner-service-h1">User Experience</h1>
      </section>
      <Animation/>
      <div className="slide-container">
      <Servicesslide />
      </div>
      <Footer />
    </main>
  );
}
