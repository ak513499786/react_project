import image1 from "./images/slide-1.svg";
import image2 from "./images/slide-2.svg";
import image3 from "./images/slide-3.svg";
import gsap from "gsap";

import { useRef, useEffect } from "react";

export default function Horizontalanimation1() {
  let slideImg4 = useRef(null);
  let slideImg5 = useRef(null);
  let slideImg6 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg4, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg5, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg6, { x: "0%" }, { x: "-100%" });
  }, []);
  return (
    <>
      <div className="horizontal-slide">
        <img
          src={image1}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg4 = el)}
          loading="lazy"
        />
        <img
          src={image2}
          alt=""
          className="HS-img"
          loading="lazy"
          ref={(el) => (slideImg5 = el)}
        />
        <img
          src={image3}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg6 = el)}
          loading="lazy"
        />
      </div>
    </>
  );
}
