import { Swiper, SwiperSlide } from "swiper/react";
// import HorizontalScroll from "react-horizontal-scrolling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import React, { useState, useEffect } from "react";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
import "./case.scss";

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
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffcd05",
      scale: 0.9,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0D0D0D", scale: 1 });
  };
  return (
    <>
      {Widht > 1300 ? (
        <div className="circle flex mt-20 justify-center h-full relative  items-center">
          <div className="width w-full flex-col h-full items-center flex justify-center relative">
            <div className="tal items-center flex justify-center flex-col h-full">
              <h1 className="text-7xl text-center font-bold max-md:text-5xl max-md:p-10">
                Take A Peek At Our <br /> Case Study
              </h1>
              <p className="down text-center mt-8 max-md:p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                accusantium in optio dolore sed molestiae maiores odit facere
                asperiores dolor, dolorum voluptate, vel, harum ab mollitia
                repellat assumenda quasi incidunt.
              </p>
            </div>
            <Swiper
              slidesPerView={3}
              slidesPerGroupSkip={1}
              spaceBetween={60}
              loop={true}
              breakpoints={{
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
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper mt-0 w-[100%]"
            >
              {/* <div className="testhome"> */}
              <SwiperSlide className="">
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome  ">
                    <div className="img121 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img211 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img311 "></div>
                  </div>
                </Link>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img411 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img412 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img413 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img414 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img415 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/case_study" className="cursor">
                  <div className="imghome1 hideehome   ">
                    <div className="img416 "></div>
                  </div>
                </Link>
              </SwiperSlide>
              {/* </div> */}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="testhome">
          <div className="imghome1 hideehome">
            <div className="bghome"></div>
          </div>

          <div className="imghome1 hideehome">
            <div className="bghome2"></div>
            <div id="i" className="p-5">
              <h1>COWBOY</h1>
              <p id="imgsp" className="coloo">
                shopify platform design + development
              </p>
            </div>
          </div>

          <div className="imghome1 hideehome">
            <div className="bghome3"></div>
            <div id="i" className="p-5">
              <h1>COWBOY</h1>
              <p id="imgsp" className="coloo">
                shopify platform design + development
              </p>
            </div>
          </div>

          <div className="imghome1 hideehome">
            <div className="bghome4"></div>
            <div id="i" className="p-5">
              <h1>COWBOY</h1>
              <p id="imgsp" className="coloo">
                shopify platform design + development
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Case;
