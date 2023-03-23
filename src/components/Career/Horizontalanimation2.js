import image3 from "./images/slide-3.svg";
import image4 from "./images/slide-4.svg";
import image5 from "./images/slide-5.svg";
import gsap from "gsap";

import { useRef, useEffect } from "react";

export default function Horizontalanimation2() {
  let slideImg1 = useRef(null);
  let slideImg2 = useRef(null);
  let slideImg3 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg1, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg2, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 30 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg3, { x: "0%" }, { x: "-100%" });
  }, []);

  return (
    <>
      <div className="horizontal-slide">
        <img
          src={image4}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg1 = el)}
        />
        <img
          src={image5}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg2 = el)}
        />
        <img
          src={image3}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg3 = el)}
        />
      </div>
    </>
  );
}
