import "./styles/clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect, useRef } from "react";

import image2 from "./images/Frame 43.svg";
// import image5 from "./images/Frame 3.svg";
import image3 from "./images/Frame 44.svg";
import image4 from "./images/Frame 472.svg";
import image5 from "../blog/Images/Frame 45.svg";
import image6 from "../blog/Images/Frame 47.svg";
import image7 from "../blog/Images/Frame 46.svg";

// import imgqq from "../blog/blogimages/Frame 44.png";
// import imgq1 from "../blog/blogimages/Frame 472.png";
import AnimatedCursor from "react-animated-cursor";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  const swiperRef = useRef(null);

  return (
    <>
      {/* {Widht >= 920 ? ( */}
      <>
        <div id="blog">
          <div id="blog_heading" className="-ml-20">
            We Pen Down Our Brightest Ideas
          </div>
          <div
            onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            className="max-w-[100%] w-[100%] homeidea -ml-9 max-lg:ml-0"
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={4}
              slidesPerGroupSkip={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
              }}
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
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className=" swiper-container mySwiper h-[35rem] mt-20 max-md:mt-0  w-[105%] -ml-20 max-lg:ml-0 max-xl:w-[100%]"
            >
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image7} alt="" loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image3} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img src={image2} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img src={image6} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img src={image5} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image3} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image3} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image5} alt=""  loading="lazy"/>
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#f6f6f6",
                        fontWeight: "600",
                      }}
                    >
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#cecece",
                      }}
                    >
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className=" flex justify-center items-center -mt-2 -ml-0">
              <button className="exp_btn ">
                <Link to="/blog" className="exp_btn-content">
                  explore more
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
      {/* ) : ( */}
      {/* \ */}
      {/* )} */}
    </>
  );
};

export default BlogHome;
