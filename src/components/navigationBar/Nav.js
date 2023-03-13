import "./nav.css";

import logo from "./images/logo.svg";
import twitter from "./images/mdi_twitter.svg";
import facebook from "./images/ic_baseline-facebook.svg";
import instagram from "./images/mdi_instagram.svg";
import linkedin from "./images/mdi_linkedin.svg";
import AnimatedCursor from "react-animated-cursor";

import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap/gsap-core";
import { useRef, useState, useEffect } from "react";
export default function Navigation_bar() {
  let slide = useRef(null);

  const navSlide = () => {
    gsap.to(slide, 0.8, { css: { bottom: "0vh" } });
  };

  const navSlidesBack = () => {
    gsap.to(slide, 0.8, { css: { bottom: "150vh" }, ease: Power3.easeIn });
  };
  const fade = () => {
    gsap.to(slide, 0, { css: { bottom: "150vh" } });
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <header>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "0px 0px",
            visibility: visible ? "visible" : "hidden",
            transform: visible ? "none" : "translateY(-110%)",
            transition: "transform 0.3s ease-in-out",
          }}
          className="navigation_bar"
        >
          <ul className="nav_list">
            <li className="nav_list-item">
              <Link to={"/"} className="nav_logo">
                <AnimatedCursor
                  innerSize={8}
                  outerSize={8}
                  color="225, 225, 225"
                  outerAlpha={0.2}
                  innerScale={0.7}
                  outerScale={0.2}
                />
                <img src={logo} alt="" className="logo" />
                <span className="hyphen"></span>
              </Link>
            </li>
            <li className="nav_list-item">
              <div className="menu" onClick={navSlide}></div>
            </li>
          </ul>
        </nav>
      </header>
      <section id="navigation-slide" ref={(el) => (slide = el)}>
        <div className="nav-menu" onClick={navSlidesBack}>
          <div className="line-nav"></div>
        </div>
        <ul className="slide_nav_list">
          <li className="slide_nav_list-item">
            <Link to="/about" className="slide_nav_links" onClick={fade}>
              About
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/services" className="slide_nav_links" onClick={fade}>
              Services
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/work" className="slide_nav_links" onClick={fade}>
              Work
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/career" className="slide_nav_links" onClick={fade}>
              Careers
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/blog" className="slide_nav_links" onClick={fade}>
              Ideas
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/let's_talk" className="slide_nav_links" onClick={fade}>
              Let's Talk
            </Link>
          </li>
        </ul>
        <div className="details">
          <div className="socials">
            <img src={linkedin} alt="" className="icons" />
            <img src={facebook} alt="" className="icons" />
            <img src={instagram} alt="" className="icons" />
            <img src={twitter} alt="" className="icons" />
          </div>
          <p className="contact-loc">
            12<sup>o</sup> 56' 27.06" N, 77<sup>o</sup> 32' 39.228" E
          </p>
          <div className="contact">
            <p className="contact-mail">info@codelinear.com</p>
            <p className="contact-no">+1 415 523 5957</p>
          </div>
        </div>
      </section>
    </>
  );
}
