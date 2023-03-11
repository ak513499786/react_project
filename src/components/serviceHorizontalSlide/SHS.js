import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { FreeMode, Mousewheel, Pagination } from "swiper";

export default function Shs() {
  let background = useRef(null);
  let title = useRef(null);
  let background1 = useRef(null);
  let title1 = useRef(null);
  let background2 = useRef(null);
  let title2 = useRef(null);
  let background3 = useRef(null);
  let title3 = useRef(null);

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
    <section className="services-container">
      <h1 className="other-ser-h1">Explore Our Other Services</h1>
      <div className="ser-mini">
        <Swiper
          direction={"horizontal"}
          invert={true}
          spaceBetween={96}
          slidesPerView={3}
          mousewheel={true}
          modules={[Mousewheel]}
          className="ser-imgs"
        >
          <div className="ser-imgs">
            <SwiperSlide
              className="cns"
              ref={(el) => (background = el)}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <Link to={"/consultingandstrategy"} className="slide">
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
    </section>
  );
}
