import { Swiper, SwiperSlide } from "swiper/react";
// import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect } from "react";

import "./styles/clients.css";
import image2 from "./images/Frame 43.svg";
import image3 from "./images/Frame 44.svg";
import image4 from "./images/Frame 472.svg";
// import imgqq from "../blog/blogimages/Frame 44.png";
// import imgq1 from "../blog/blogimages/Frame 472.png";
import AnimatedCursor from "react-animated-cursor";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffcd05",
      scale: 0.9,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0D0D0D", scale: 1 });
  };
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
  };
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return (
    <>
      {/* {Widht >= 920 ? ( */}
      <>
        {/* <AnimatedCursor color="255, 255, 255" /> */}
        <div id="blog">
          <div id="blog_heading" className="-ml-20">
            We Pen Down Our Brightest Ideas
          </div>
          <div className="max-w-[100%] homeidea -ml-16 max-lg:ml-0">
            <Swiper
              slidesPerView={3}
              slidesPerGroupSkip={1}
              spaceBetween={10}
              loop={true}
              // breakpoints
              autoplay={{
                delay: 2500,
                // disableOnInteraction: false,
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
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper h-[35rem] mt-20 max-md:mt-0  w-[115%] -ml-20 max-lg:ml-0 max-xl:w-[100%]"
            >
              <SwiperSlide className="cass">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image2} alt="" />
                  </div>
                  <div className="head mt-5">
                    <h2 className="text-3xl text-center text-stone-400">
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image4} alt="" />
                  </div>
                  <div className="head mt-5">
                    <h2 className="text-3xl text-center text-stone-400">
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="cass">
                <div className="cardh    mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    <img src={image3} alt="" />
                  </div>
                  <div className="head mt-5">
                    <h2 className="text-3xl text-center text-stone-400">
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cardh  cass  mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img src={image2} alt="" />
                  </div>
                  <div className="head mt-5">
                    <h2 className="text-3xl text-center text-stone-400">
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cardh  cass  mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img src={image4} alt="" />
                  </div>
                  <div className="head mt-5">
                    <h2 className="text-3xl text-center text-stone-400">
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cardh  cass  mx-4 items-center">
                  <div className="img max-md:flex  max-md:justify-center">
                    {/* <img src="/blog/Frame 43.png" alt="" /> */}
                    <img src={image3} alt="" />
                  </div>
                  <div className="head mt-5">
                    <h2 className="text-3xl text-center text-stone-400">
                      Empathy in UX
                    </h2>
                  </div>
                  <div className="descrip flex flex-col justify-center items-center mt-5">
                    <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                      Union flatten auto flatten duplicate. Line slice inspect
                      horizontal image strikethrough share follower.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className=" flex justify-center items-center -mt-2 -ml-2">
              <button className="exp_btn ">
                <Link to="/blog" className="exp_btn-content -mt4">
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
