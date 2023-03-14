import "./service.css";
import "./do/do.scss";
import { gsap, Power0 } from "gsap";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Mousewheel } from "swiper";
import Explore from "./Explore/Explore";
import Do from "./do/Do";
import { Element } from "react-scroll";
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
  return (
    <>
      <Navbar />
      <main className="services" ref={(el) => (fade = el)}>
        <Servicehero />
        <section className="wedo">
          <div className="wedo-container">
            <h1 className="wedo-h1">We Do It All!</h1>
            <p className="wedo-para">
              Our comprehensive services encompass UX design, product
              development, digital marketing, and everything within and beyond.
              Starting with the development of the products and continuing
              through the launch strategies, we help businesses launch their
              success and bring the luxury of transformational technology and
              dynamic UI/UX right to their threshold.
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
                We thrive on challenges and comlex problems. Our team ranges
                from industry experts ,providing years of industry insights, to
                young enthusiasts, providing a creative and innovative
                perspective. Equipped with this wide arena of experience, we
                devise solution that enable you to leverage the adversities,
                converting challenges into opportunities.
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
                only thearetical. Therefore, we may be based in Bengaluru, but
                the impact we weild is global.
              </p>
            </div>
          </div>
        </section>
        <div className="slide-container">
          <Explore />
        </div>
        <Model />
      </main>
      <Element id="example" name="example">
        <Footer />
      </Element>
    </>
  );
}
