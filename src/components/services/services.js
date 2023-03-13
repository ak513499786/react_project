import "./service.css";
import "./do/do.scss";
import { gsap, Power0 } from "gsap";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Mousewheel } from "swiper";
import Explore from './Explore/Explore'
import Do from "./do/Do";

// <<<<<<< HEAD
import Servicehero from "./Servicehero";
import Wedo from "./wedo";
import Model from "./Model";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
// =======
import arrowdown from "./images/Vector.svg";
import whitedownarrow from "./images/downarrow.svg";
import Navigation_bar from "../navigationBar/Nav";
// >>>>>>> cf43176c7766f4b31cb4810966493754162b7074
import AnimatedCursor from "react-animated-cursor";

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

// <<<<<<< HEAD
// =======
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     repeat: -1,
  //     ease: Power0,
  //   });
  //   tl.fromTo(wordanimation, 2, { y: 0 }, { y: 0 });
  //   tl.fromTo(wordanimation, 2, { y: 0 }, { y: -97 });
  //   tl.fromTo(wordanimation, 2, { y: -97 }, { y: -197 });
  //   tl.fromTo(wordanimation, 2, { y: -197 }, { y: -292 });
  // }, []);

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
// <<<<<<< HEAD
    <>
    <Navbar/>
      <main className="services" ref={(el) => (fade = el)}>
      {/* <AnimatedCursor color="255, 255, 255"/> */}

        <Servicehero />
        {/* <Wedo /> */}
        {/* <section className="services-container">
=======
    <main className="services">
      <Navigation_bar />
      <section id="hero_services" ref={(el) => (fade = el)}>
        <div className="services_hero-text">
          <p className="leading">Leading The Way From</p>
          <div className="overflowcontrol">
            <div className="rolling-words" ref={(el) => (wordanimation = el)}>
              <p className="words">Design To Execution</p>
              <p className="words">Strategy To Execution</p>
              <p className="words">Development To Execution</p>
              <p className="words">Marketing To Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Do /> */}
      <section className="wedo">
        <div className="wedo-container">
          <h1 className="wedo-h1">We Do It All!</h1>
          <p className="wedo-para">
            Our comprehensive services encompass UX design, product development,
            digital marketing, and everything within and beyond. Starting with
            the development of the products and continuing through the launch
            strategies, we help businesses launch their success and bring the
            luxury of transformational technology and dynamic UI/UX right to
            their threshold.
          </p>
        </div>
        <div className="circles max-xl:hidden absolute -mt-64">
          <div className="circle1 circlee">
            <div className="circle2 mt-20 circlee">
              <div className="circle3 circlee"></div>
            </div>
          </div>
        </div>
        <div className="accordian-container">
          <div className="accordian">
            <h1 className="accordian-h1">The Innate Problem Solvers</h1>
            <p className="accordian-para">
              We thrive on challenges and comlex problems. Our team ranges from
              industry experts ,providing years of industry insights, to young
              enthusiasts, providing a creative and innovative perspective.
              Equipped with this wide arena of experience, we devise solution
              that enable you to leverage the adversities, converting challenges
              into opportunities.
            </p>
          </div>
          <div className="accordian">
            <h1 className="accordian-h1">The Leaders Of Agility</h1>
            <p className="accordian-para">
              With the constantly evolves in tandem with it, our agile team of
              designers, developers, marketers, and strategists evolves in
              tandem with it. Our protective team is consistently hustling to
              provide you with the finest assistance, enabling you to maintain
              adaptability and resilence in the face of change.
            </p>
          </div>
          <div className="accordian">
            <h1 className="accordian-h1">The Patrons Of Globalization</h1>
            <p className="accordian-para">
              We are here to establish the new status quo- Design with Impact
              and we believe that in the era of globalisation, boundaries are
              only thearetical. Therefore, we may be based in Bengaluru, but the
              impact we weild is global.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="services-container">
>>>>>>> cf43176c7766f4b31cb4810966493754162b7074
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
        <Explore/>
        <Model />
      </main>
      <Footer/>
    </>
  );
}
