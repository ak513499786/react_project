import "./service.css";
import { gsap, Power0 } from "gsap";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Mousewheel } from "swiper";
// import Explore from '../Explore/Explore'

import Servicehero from "./Servicehero";
import Wedo from "./wedo";
import Model from "./Model";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";

export default function Services() {
  let background = useRef(null);
  let title = useRef(null);
  let background1 = useRef(null);
  let title1 = useRef(null);
  let background2 = useRef(null);
  let title2 = useRef(null);
  let background3 = useRef(null);
  let title3 = useRef(null);
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  const mouseOver = () => {
    gsap.to(background, 0.3, {
      css: { backgroundSize: "120%", backgroundPosition: "50% 0" },
    });
    gsap.to(title, 0.3, {
      css: { color: "white", textShadow: "0px 0px 20px white" },
    });
  };
  const mouseOut = () => {
    gsap.to(background, 0.5, { css: { backgroundSize: "100%" } });
    gsap.to(title, 0.3, {
      css: { color: "grey", textShadow: "0px 0px 0px white" },
    });
  };
  const mouseOver1 = () => {
    gsap.to(background1, 0.3, {
      css: { backgroundSize: "120%", backgroundPosition: "50% 0" },
    });
    gsap.to(title1, 0.3, {
      css: { color: "white", textShadow: "0px 0px 20px white" },
    });
  };
  const mouseOut1 = () => {
    gsap.to(background1, 0.5, { css: { backgroundSize: "100%" } });
    gsap.to(title1, 0.3, {
      css: { color: "grey", textShadow: "0px 0px 0px white" },
    });
  };
  const mouseOver2 = () => {
    gsap.to(background2, 0.3, {
      css: { backgroundSize: "120%", backgroundPosition: "50% 0" },
    });
    gsap.to(title2, 0.3, {
      css: { color: "white", textShadow: "0px 0px 20px white" },
    });
  };
  const mouseOut2 = () => {
    gsap.to(background2, 0.5, { css: { backgroundSize: "100%" } });
    gsap.to(title2, 0.3, {
      css: { color: "grey", textShadow: "0px 0px 0px white" },
    });
  };
  const mouseOver3 = () => {
    gsap.to(background3, 0.3, {
      css: { backgroundSize: "120%", backgroundPosition: "50% 0" },
    });
    gsap.to(title3, 0.3, {
      css: { color: "white", textShadow: "0px 0px 20px white" },
    });
  };
  const mouseOut3 = () => {
    gsap.to(background3, 0.5, { css: { backgroundSize: "100%" } });
    gsap.to(title3, 0.3, {
      css: { color: "grey", textShadow: "0px 0px 0px white" },
    });
  };
  return (
    <>
    <Navbar/>
      <main className="services" ref={(el) => (fade = el)}>
        <Servicehero />
        <Wedo />
        {/* <section className="services-container">
        <h1 className="ser-h1">Explore Our Services</h1>
        <div className="ser-mini">
          <Swiper
            spaceBetween={90}
            className="ser-imgs"
            direction={"horizontal"}
            mousewheel={true}
            releaseOnEdge={true}
            slidesPerView={3}
            modules={[Mousewheel]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <div className="ser-imgs">
              <SwiperSlide className="cns"
              ref={(el) => (background = el)}
                  onMouseOver={mouseOver}
                  onMouseOut={mouseOut}>
                <Link
                  to={"/consultingandstrategy"}
                  className="slide"
                >
                  <p className="ser-txt" ref={(el) => (title = el)}>
                    Consulting And Strategy
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="ue">
                <Link
                  to={"/userexperience"}
                  className="ue"
                  ref={(el) => (background1 = el)}
                  onMouseOver={mouseOver1}
                  onMouseOut={mouseOut1}
                >
                  <p className="ser-txt" ref={(el) => (title1 = el)}>
                    User Experience
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="pd">
                <Link
                  to={"/productdevelopment"}
                  className="pd"
                  ref={(el) => (background2 = el)}
                  onMouseOver={mouseOver2}
                  onMouseOut={mouseOut2}
                >
                  <p className="ser-txt" ref={(el) => (title2 = el)}>
                    Product Development
                  </p>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="dm">
                <Link
                  to={"/digitalmarketing"}
                  className="dm"
                  ref={(el) => (background3 = el)}
                  onMouseOver={mouseOver3}
                  onMouseOut={mouseOut3}
                >
                  <p className="ser-txt" ref={(el) => (title3 = el)}>
                    Digital Marketing
                  </p>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section> */}
        {/* <Explore/> */}
        <Model />
      </main>
      <Footer/>
    </>
  );
}
