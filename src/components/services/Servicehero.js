import { gsap, Power0 } from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Serviceshero() {
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  let wordanimation = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      ease: Power0,
    });
    tl.fromTo(wordanimation, 1, { y: 0 }, { y: 0 });
    tl.fromTo(wordanimation, 2, { y: 0 }, { y: -97 });
    tl.fromTo(wordanimation, 2, { y: -97 }, { y: -197 });
    tl.fromTo(wordanimation, 2, { y: -197 }, { y: -292 });
  }, []);
  return (
    <>
      <section id="hero_services">
        <div className="services_hero-text">
          <p className="leading">Leading The Way From</p>
          <div className="overflowcontrol">
            <div className="rolling-words" ref={(el) => (wordanimation = el)}>
              <p className="words">Design To Execution</p>
              <p className="words">Strategy To Execution</p>
              <p className="words">Development To Execution</p>
              <p className="words">Marketing To Success</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
