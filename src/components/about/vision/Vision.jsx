import React from "react";
import "./vision.scss";
import svg1 from "../images/svgs/Vector-1.svg";
import svg2 from "../images/svgs/Vector-2.svg";
import svg3 from "../images/svgs/Vector.svg";
import { useRef, useEffect } from "react";
import { gsap, Power0 } from "gsap";

import arrowdown from "../../services/images/Vector.svg";
import whitedownarrow from "../../services/images/downarrow.svg";

const Vision = () => {
  let arrows = useRef(null);
  let skip = useRef(null);

  const arrowRotate = () => {
    gsap.to(arrows, 0.2, { y: 30 });
    gsap.to(skip, 0.2, { css: { color: "white" } });
  };
  const arrowRotateBack = () => {
    gsap.to(arrows, 0.2, { y: 0 });
    gsap.to(skip, 0.2, { css: { color: "#848484" } });
  };
  return (
    <>
      <section className="core-container">
        <p className="core-para">
          We are a digital product development and UX design firm determined to
          make an impact through our clients. With the finest end-user
          experience as our primary objective we intergrate our tech expertise
          with a social conscience to build digital products.
        </p>
        <div className="vision-container">
          <h2 className="visionh1">Our Vision</h2>
          <p className="vision-para">
            To propel huminity forword by building digital products for business
            that unrich peoples lives
          </p>
        </div>
        <div className="core-guiding-container">
          <div className="guiding-container">
            <h2 className="guiding-container-h1">Guiding Principle</h2>
            <p className="guiding-cotainer-para">
              To propel huminity forword by building digital products for
              business that unrich peoples lives Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Maxime Lorem, ipsum
              dolor sit amet.
            </p>
            <div className="guiding-skip">
              <div className="skip-container">
                <div
                  className="skip"
                  onMouseOut={arrowRotateBack}
                  onMouseOver={arrowRotate}
                  ref={(el) => (skip = el)}
                >
                  skip ahead
                  <div className="downarrows" ref={(el) => (arrows = el)}>
                    <img src={whitedownarrow} alt="" className="arrowdown" />
                    <img src={arrowdown} alt="" className="arrowdown" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guiding-subcontainer">
            <div className="subcontainer">
              <img className="subcontainer-img" src={svg1} alt="svg" />
              <h1 className="subcontainer-h1">Ideal</h1>
              <p className="subcontainer-para">
                To propel huminitz forword by building digital products for
                business that unrich peoples lives Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Optio enim minima
                quam repudiandae labore fugit mollitia maiores consequatur
                molestiae! libero ex asperiores fugiat. Voluptatem minus error
                porro molestiae ipsam.
              </p>
            </div>
            <div className="subcontainer">
              <img className="subcontainer-img" src={svg2} alt="svg" />
              <h1 className="subcontainer-h1">Impact</h1>
              <p className="subcontainer-para">
                To propel huminity forword by building digital products for
                business that unrich peoples lives Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Optio enim minima
                quam repudiandae labore fugit mollitia maiores consequatur
                molestiae! libero ex asperiores fugiat. Voluptatem minus error
                porro molestiae ipsam.
              </p>
            </div>
            <div className="subcontainer">
              <img className="subcontainer-img" src={svg3} alt="svg" />
              <h1 className="subcontainer-h1">Innovation</h1>
              <p className="subcontainer-para">
                To propel huminity forword by building digital products for
                business that unrich peoples lives Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Est, natus veniam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Optio enim minima
                quam repudiandae labore fugit mollitia maiores consequatur
                molestiae! libero ex asperiores fugiat. Voluptatem minus error
                porro molestiae ipsam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
