import { gsap, Power0 } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Serviceshero() {
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  let wordanimation = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: true,
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
        {/* <div className="services_hero-text">
          <p className="leading">Leading The Way From</p>
          <div className="overflowcontrol">
            <div className="rolling-words" ref={(el) => (wordanimation = el)}>
              <p className="words">Design To Execution</p>
              <p className="words">Strategy To Execution</p>
              <p className="words">Development To Execution</p>
              <p className="words">Marketing To Success</p>
            </div>
          </div>
        </div> */}

        <div className="vision w-full mb-52  flex justify-center h-full relative  items-center">
          <div className="widthh max-md:flex-col max-md:p-8  w-full flex relative">
            <div className=" mt -ml-9 max-xl:ml-0 flex w-full">
              <h1 className="text-6xl w-full mt6 ml-5 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                Leading The Way From
              </h1>
              <Swiper
                spaceBetween={30}
                // centeredSlides={true}
                slidesPerView={1}
                direction={"vertical"}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, FreeMode, Pagination, Navigation]}
                className="mySwi -ml-10 max-xl:ml-0   w-full h-40 "
              >
                <SwiperSlide className="-ml">
                  <h1 className="text-6xl  mt16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Design To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1 className="text-6xl  mt16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Stretegy To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1 className="text-[3rem]  mt16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Development To Execution
                  </h1>
                </SwiperSlide>
                <SwiperSlide className="">
                  <h1 className="text-6xl  mt16 ml-9 max-xl:ml-5 max-md:text-4xl font-extrabold text-white">
                    Marketing to Success
                  </h1>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
