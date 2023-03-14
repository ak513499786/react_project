import "./consulting.css";
import Servicesslide from "../services/Explore/Explore";
import { useRef } from "react";
import { gsap } from "gsap";
import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Animation from "./animation";

export default function Consultingandstrategy() {
  return (
    <main className="service-inner-page">
      <Navbar />
      <section className="otherservices">
        <h1 className="inner-service-h1">
          Define And Shape Tomorrow With Us By Capitalising On Today's
          Disruptions.
        </h1>
      </section>
      <div className="mt-52">
        <Animation />
      </div>
      <div className="slide-container">
        <Servicesslide />
      </div>
      <Footer />
    </main>
  );
}
