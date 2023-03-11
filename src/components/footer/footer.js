import "./footer.css";
import { Link } from "react-router-dom";
import { gsap, Bounce } from "gsap";
import { useRef, useEffect } from "react";

import arrow from "./images/Group 1000002377.svg";
import twitter from "../navigationBar/images/mdi_twitter.svg";
import facebook from "../navigationBar/images/ic_baseline-facebook.svg";
import instagram from "../navigationBar/images/mdi_instagram.svg";
import linkedin from "../navigationBar/images/mdi_linkedin.svg";
import Codelinear from "../codelinear/codelinear";

export default function Footer() {
  let footeranimation = useRef(null);
  let footeranimationwidth = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: Bounce,
    });
    tl.fromTo(footeranimation, 1, { x: 0 }, { x: 0 });
    tl.fromTo(footeranimation, 0.1, { x: 0 }, { x: -78 });
    tl.fromTo(footeranimation, 1, { x: -78 }, { x: -78 });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: Bounce,
    });
    tl.fromTo(footeranimationwidth, 1, { width: 133 }, { width: 133 });
    tl.fromTo(footeranimationwidth, 0.1, { width: 133 }, { width: "auto" });
    tl.fromTo(footeranimationwidth, 1, { width: 250 }, { width: 250 });
  }, []);

  return (
    <footer id="footer">
      <section className="main-footer">
        <p id="ftrcnt">
          Wanna Know A Secret?
          <div className="arrow">
            <img src={arrow} alt="" srcset="" className="arrow" />
          </div>
        </p>
        <Link to="/let's_talk" className="link">
          <h1 id="ftrh1">Let's Talk</h1>
        </Link>
        <section className="lower-footer">
          <div className="lower-footer-container">
            <div
              className="aligncenter"
              ref={(el) => (footeranimationwidth = el)}
            >
              <div
                className="footer-bounce"
                ref={(el) => (footeranimation = el)}
              >
                <Codelinear />
              </div>
            </div>
            <p className="copyright">© Codelinear 2023. All Rights Reserved.</p>
          </div>
          <div id="lower-footer">
            <div className="footer-column">
              <div className="column">
                <Link to={"/about"} className="footerlink">
                  about
                </Link>
                <Link to={"/services"} className="footerlink">
                  services
                </Link>
              </div>
              <div className="column">
                <Link to={"/work"} className="footerlink">
                  work
                </Link>
                <Link to={"/career"} className="footerlink">
                  careers
                </Link>
              </div>
              <div className="column">
                <Link to={"/blog"} className="footerlink">
                  Ideas
                </Link>
                <Link to={"/let's_talk"} className="footerlink">
                  Let's Talk
                </Link>
              </div>
            </div>
            <div id="contact">
              <p>info@codelinear.com</p>
              <p>+1 415 523 5957</p>
            </div>
            <div id="socials">
              <img src={linkedin} alt="" srcset="" className="icon" />
              <img src={facebook} alt="" srcset="" className="icon" />
              <img src={instagram} alt="" srcset="" className="icon" />
              <img src={twitter} alt="" srcset="" className="icon" />
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
