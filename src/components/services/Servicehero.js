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
      {/* {Widht > 1300 ? ( */}
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
      {/* // ) : (
      //   <div className="vision w-full mb-52 mt-52 flex justify-center h-full relative  items-center">
      //     <div className="widthh max-md:flex-col max-md:p-8  w-full flex relative">
      //       <div className=" mt-24 -ml-9 max-xl:ml-0 flex w-full">
      //         <h1 className="text-6xl w-1/2 max-sm:w-full mt-16 ml-5 max-xl:ml-5 max-lg:text-4xl font-extrabold text-white">
      //           Leading The Way From Design To Execution
      //         </h1>
      //       </div>
      //     </div>
      //   </div>
      // )} */}
    </>
  );
}
