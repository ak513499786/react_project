import "./work.css";
// <<<<<<< HEAD
// import Clients from "../home/client";
import Workhero from "./Workhero";
import Workhorizontalscroll from "./Workhorizontalscroll";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
// =======
import { useRef } from "react";
import gsap from "gsap";
import Card from "./card/Card";
import AnimatedCursor from "react-animated-cursor";

export default function Work() {
  return (
    <>
      <Navbar />
      <AnimatedCursor color="255, 255, 255" />

      <main className="work_hero">
        <div className="container-1">
          <h1 id="work_heading">We're Proud To Show You Our Accomplishments</h1>
        </div>
      </main>
      <div className="slide-work-container">
        <Card />
      </div>
      <Footer />
    </>
  );
}
