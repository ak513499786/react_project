import "./styles/clients.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect, useRef } from "react";

import image2 from "./images/Frame 43.svg";
import image3 from "./images/Frame 44.svg";
import image4 from "./images/Frame 472.svg";
import image5 from "../blog/Images/Frame 45.svg";
import image6 from "../blog/Images/Frame 47.svg";
import image7 from "../blog/Images/Frame 46.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const url = useLocation();

  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  const swiperRef = useRef(null);
  if (url.pathname === "/") {
    return (
      <>
        <div id="blog">
          <div id="blog_heading" className="-ml20">
            We Pen Down Our Brightest Ideas
          </div>
          <div
            onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            className="max-w[100%] w-[100%] homeidea -ml-[6%] max-2xl:ml-8 max-sm:ml-0 mt-0"
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
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
                900: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1300: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className=" swiper-container mySwiper h-[35rem] mt-20 max-md:mt-0 px-8 w-[100%] -ml20 max-2xl:ml-0 maxxl:w-[100%]"
            >
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img
                      src={image7}
                      alt=""
                      style={{
                        borderRadius: "11.4px",
                      }}
                    />
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Minimum Viable Product
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#848484",
                      }}
                    >
                      Building an MVP that attracts investors enough to fund it
                      is indeed a magic potion...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img
                      src={image3}
                      alt=""
                      style={{
                        borderRadius: "11.4px",
                      }}
                    />
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Digital Marketing
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#848484",
                      }}
                    >
                      We have compiled a list of digital marketing trends that
                      may assist...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img
                      src={image2}
                      alt=""
                      style={{
                        borderRadius: "11.4px",
                      }}
                    />
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#d8d6d6",
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
                        color: "#848484",
                      }}
                    >
                      Empathy is a foundational principle in the concept of
                      design thinking - a user-based approach to...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img
                      src={image6}
                      alt=""
                      style={{
                        borderRadius: "11.4px",
                      }}
                    />
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Shopify Vs Meganto
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#848484",
                      }}
                    >
                      While Shopify offers a no-coding and user-friendly
                      platform that can help you run an online shop...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img
                      src={image5}
                      alt=""
                      style={{
                        borderRadius: "11.4px",
                      }}
                    />
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      No Code Revolution
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#848484",
                      }}
                    >
                      Building an MVP that attracts investors enough to fund it
                      is indeed a magic potion...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass flex justify-center items-center">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img
                      src={image4}
                      alt=""
                      style={{
                        borderRadius: "11.4px",
                      }}
                    />
                  </div>
                  <div className="head mt-5">
                    <h2
                      className="text-3xl text-center text-stone-100"
                      style={{
                        fontFamily: "graphikthin",
                        color: "#d8d6d6",
                        fontWeight: "600",
                      }}
                    >
                      Design System
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p
                      className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                      style={{
                        fontFamily: "graphik",
                        color: "#848484",
                      }}
                    >
                      A design system is a guide or a standard structure with
                      parameters for design and code...
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
    );
  } else if (url.pathname === "/about") {
    return (
      <>
        <>
          <div id="blg">
            <div className="flex justify-center flex-col items-center">
              <h1 className="text-7xl mt-20 text-center font-bold max-md:text-5xl max-md:p-10 max-sm:text-3xl max-sm:p-5">
                Take A Peek At Our <br /> Case Study
              </h1>
              <p
                className="down text-center mt-8 max-md:px-5"
                style={{
                  color: "#848484",
                  fontFamily:'graphik'
                }}
              >
                We handle all our projects with the utmost discretion. Through
                our case studies take a look at how we drive growth for our
                clients.
              </p>
            </div>
            <div
              onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              className="max-w[100%] w-[100%] homeidea -ml-[6%] max-2xl:ml-8 max-sm:ml-0 mt-5"
            >
              <Swiper
                ref={swiperRef}
                slidesPerView={3}
                slidesPerGroupSkip={1}
                spaceBetween={30}
                loop={true}
                // autoplay={{
                //   delay: 2500,
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
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className=" swiper-container mySwiper h-[35rem] mt-20 max-md:mt-0 px-8 w-[100%] -ml20 max-2xl:ml-0 maxxl:w-[100%]"
              >
                <SwiperSlide className="cass flex justify-center items-center">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img
                        src={image7}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="text-3xl text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Minimum Viable Product
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Building an MVP that attracts investors enough to fund
                        it is indeed a magic potion...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img
                        src={image3}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="text-3xl text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Digital Marketing
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        We have compiled a list of digital marketing trends that
                        may assist...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      {/* <img src="/blog/Frame 43.png" alt="" /> */}
                      <img
                        src={image2}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="text-3xl text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
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
                          color: "#848484",
                        }}
                      >
                        Empathy is a foundational principle in the concept of
                        design thinking – a user-based approach to...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      {/* <img src="/blog/Frame 43.png" alt="" /> */}
                      <img
                        src={image6}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="text-3xl text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Shopify Vs Meganto
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        While Shopify offers a no-coding and user-friendly
                        platform that can help you run an online shop...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      {/* <img src="/blog/Frame 43.png" alt="" /> */}
                      <img
                        src={image5}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="text-3xl text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        No Code Revolution
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Building an MVP that attracts investors enough to fund
                        it is indeed a magic potion...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cass flex justify-center items-center">
                  <div className="cardh    mx-4 items-center">
                    <div className="img max-md:flex  max-md:justify-center">
                      <img
                        src={image4}
                        alt=""
                        style={{
                          borderRadius: "11.4px",
                        }}
                      />
                    </div>
                    <div className="head mt-5">
                      <h2
                        className="text-3xl text-center text-stone-100"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Design System
                      </h2>
                    </div>
                    <div className="descrip flex flex-col justify-center items-center mt-5">
                      <p
                        className="flex coloo w-full box-pera text-stone-100 items-center justify-center text-center"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        A design system is a guide or a standard structure with
                        parameters for design and code...
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      </>
    );
  }
};

export default BlogHome;
