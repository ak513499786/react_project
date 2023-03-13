import { Swiper, SwiperSlide } from "swiper/react";
// import HorizontalScroll from "react-horizontal-scrolling";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper"; // import "./all.css";
import "./styles/agency.scss";
import React, { useState, useEffect } from "react";
import { gsap, TweenMax, Power3 } from "gsap";

const HomeAbout = () => {
  const breakpoints = {
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
      slidesPerView: 1,
      spaceBetween: 0,
    },
  };
  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <>
      <section id="about" className=" agency mt-8">
        <div id="rectangle" className="max-xl:none"></div>
        <div id="abtcnt">
          <div className="header1">
            <h1 id="abth1">We Help Our Clients Define And Shape The Future.</h1>
            <p id="abtdmycnt">
              We are a design-led development firm operating at the intersection
              of human touch, data-driven analytics and cutting-edge technology.
            </p>
          </div>
          <Link to={"/work"} className="allwork">
            <p className="workbt_content">all works</p>
          </Link>
        </div>
        {Widht > 768 ? (
          <>
            <div className="bg-container">
              <div className="bg-mini-1">
                <div id="img2"></div>
                <div id="imgs2">
                  <h1>MANGO</h1>
                  <p id="imgs2p">shopify platform design + development</p>
                </div>
              </div>
              <div className="bg-mini-4">
                <div id="imgs4">
                  <h1>Lyra Health</h1>
                  <p id="imgs4p">bigcommerce platform design + development</p>
                </div>
                <div id="img4"></div>
              </div>
              <div className="bg-mini-2">
                <div id="imgs"></div>
                <div id="imgs1">
                  <h1>COWBOY</h1>
                  <p id="imgs1p">shopify platform design + development</p>
                </div>
              </div>
              <div className="bg-mini-3">
                <div id="imgs3">
                  <h1>WILLAIM ABRAHAM</h1>
                  <p id="imgs3p">shopify platform design + development</p>
                </div>
                <div id="img3"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="horizontalAbout">
            <div className="testhome">
              <div className="imghome1 hideehome">
                <div className="bghome"></div>
                <div id="i" className="p-5">
                  <h1>COWBOY</h1>
                  <p id="imgsp" className="coloo">
                    shopify platform design + development
                  </p>
                </div>
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
          </div>
        )}
      </section>
    </>
  );
};

export default HomeAbout;
