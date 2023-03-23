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
import AnimatedCursor from "react-animated-cursor";

const Case = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      containerClass: "half-image-container",
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1020: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const swiperRef = useRef(null);

  return (
    <>
      {/* {Widht > 1300 ? ( */}
      <div className="circle flex mt-60 justify-center h-full relative  items-center">
        <div className="width max-w-[1340px] w-full flex-col h-full items-center flex justify-center relative">
          <div className="tal items-center flex justify-center flex-col h-full pb-60">
            <h1 className="text-7xl text-center font-bold max-md:text-5xl max-md:p-10">
              Take A Peek At Our <br /> Case Study
            </h1>
            <p className="down text-center mt-8 max-md:p-10">
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
              onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              ref={swiperRef}
              slidesPerView={3}
              slidesPerGroupSkip={1}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  containerClass: "half-image-container",
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
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="ySwiper -ml-24 w-[115%] max-xl:w-[100%] max-xl:ml-0"
            >
              {/* <div className="testhome"> */}
              <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome  ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28">
                      Click
                    </div>
                    <div className="img121 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="w-[600px] flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      Click
                    </div>
                    <div className="img211 "></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      Click
                    </div>
                    <div className="img311 "></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      {" "}
                      Click
                    </div>
                    <div className="img411 "></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      {" "}
                      Click
                    </div>
                    <div className="img412 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      {" "}
                      Click
                    </div>
                    <div className="img413 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              {/* <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      {" "}
                      Click
                    </div>
                    <div className="img414 "></div>
                  </div>
                </Link>
              </SwiperSlide> */}
              {/* <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      {" "}
                      Click
                    </div>
                    <div className="img415 "></div>
                  </div>
                </Link>
              </SwiperSlide> */}
              {/* <SwiperSlide className=" flex justify-center items-center">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="click absolute border-2 h-40 w-40 rounded-full text-xl text-black font-extrabold flex justify-center items-center border-black z-50  bottom-10 right-28  ">
                      {" "}
                      Click
                    </div>
                    <div className="img416 "></div>
                  </div>
                </Link>
              </SwiperSlide> */}
              {/* </div> */}
            </Swiper>
          </div>
        </div>
      </div>
      {/* ) : ( */}
      {/* <div className="horizontalAbout flex justify-center items-center">
            <div className="teshome w-[48rem] max-md:mt-20 max-sm:mt-48">
              <Swiper
                slidesPerView={3}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                // loop={true}
                freeMode = {true}
                // breakpoints
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    containerClass: "half-image-container",
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  90: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h  mt-20 max-md:mt-0  w-[100%] -ml-20 max-lg:ml-0 max-xl:w-[100%]"
              >
                <SwiperSlide className="cs mr-0 flex justify-center items-center ml-20">
                  <div className="imghome1 hiehome">
                    <div className="bghome"></div>
                    <div id="i" className="p-5">
                      <h1>COWBOY</h1>
                      <p id="imgsp" className="coloo">
                        shopify platform design + development
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cs flex justify-center items-center ">
                  <div className="imghome1 hiehome">
                    <div className="bghome2"></div>
                    <div id="i" className="p-5">
                      <h1>COWBOY</h1>
                      <p id="imgsp" className="coloo">
                        shopify platform design + development
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="c flex justify-center items-center ">
                  <div className="imghome1 hiehome">
                    <div className="bghome3"></div>
                    <div id="i" className="p-5">
                      <h1>COWBOY</h1>
                      <p id="imgsp" className="coloo">
                        shopify platform design + development
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="s flex justify-center items-center ">
                  <div className="imghome1 hiehome">
                    <div className="bghome4"></div>
                    <div id="i" className="p-5">
                      <h1>COWBOY</h1>
                      <p id="imgsp" className="coloo">
                        shopify platform design + development
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div> */}
      {/* )} */}
    </>
  );
};

export default Case;
