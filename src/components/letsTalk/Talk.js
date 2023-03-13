import "./talk.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Contacthero from "./contactHero";
import Navbar from '../navigationBar/Nav';
import LowerFooter from '../footer/lowerFooter'
import Form from "./form";
import Address from "./Address";
import AnimatedCursor from "react-animated-cursor";
export default function Talk() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
    <main className="contact-page" ref={(el) => (fade = el)}>
      <Navbar/>
      {/* <AnimatedCursor color="255, 255, 255"/> */}
      <Contacthero/>
      <Form/>
      <Address/>
    </main>
    <div className="centerclass">
    <LowerFooter/>
    </div>
    </>
  );
}
