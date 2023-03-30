import { Swiper, SwiperSlide } from "swiper/react";
// import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect, useRef } from "react";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
import "./case.scss";

const Case = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const swiperRef = useRef(null);

  return (
    <>
      <div className="circle flex mt-60 justify-center h-full relative  items-center">
        <div className="width max-w-[1340px] w-full flex-col h-full items-center flex justify-center relative">
          <div className="tal items-center flex justify-center flex-col h-full pb-20">
            <h1 className="text-7xl text-center font-bold max-md:text-5xl max-md:p-10">
              Take A Peek At Our <br /> Case Study
            </h1>
            <p
              className="down text-center mt-8 max-md:p-10"
              style={{
                color: "#848484",
              }}
            >
              We handle all our projects with the utmost discretion. Through our
              case studies take a look at how we drive growth for our clients.
            </p>
          </div>
          <div
            onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            className="w-full  h-[50%]"
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              slidesPerGroupSkip={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="ySwiper relative -ml24  w-[100%] max-lg:w-[100%] max-2xl:ml-0"
            >
              {/* <div className="testhome"> */}
              <SwiperSlide
                className=" flex justify-center items-center"
                onMouseMove={handleMouseMove}
                //
              >
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome  ">
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="img121  "
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide
                onMouseMove={handleMouseMove}
                //
                className="w-[600px] flex justify-center items-center"
              >
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="img211 "
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide
                onMouseMove={handleMouseMove}
                //
                className=" flex justify-center items-center"
              >
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="img311 "
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide
                onMouseMove={handleMouseMove}
                //
                className=" flex justify-center items-center"
              >
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="img411 "
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide
                onMouseMove={handleMouseMove}
                //
                className=" flex justify-center items-center"
              >
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="img412 "
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide
                onMouseMove={handleMouseMove}
                //
                className=" flex justify-center items-center"
              >
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="img413 "
                    ></div>
                  </div>
                </Link>
              </SwiperSlide>
              {hovered && (
                <div
                  className="custom-cursor"
                  style={{
                    left: cursorPos.x - 150 + "px",
                    top: cursorPos.y - 350 + "px",
                  }}
                >
                  <div className="custom-cursor-circle">
                    <span
                      className="custom-cursor-text"
                      style={{
                        color: "black",
                      }}
                    >
                      Click
                    </span>
                  </div>
                </div>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
