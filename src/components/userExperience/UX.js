import gsap from "gsap";
import { useRef } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";

export default function UX() {
  let horizontalelement = useRef(null);

  const scrollanimation = () => {
    gsap.to(horizontalelement, 1, { x: "-13%" });
  };
  const scrollanimation1 = () => {
    gsap.to(horizontalelement, 1, { x: "-30%" });
  };
  const scrollanimation2 = () => {
    gsap.to(horizontalelement, 1, { x: "-45%" });
  };
  const scrollanimation3 = () => {
    gsap.to(horizontalelement, 1, { x: "-70%" });
  };
  const scrollanimation4 = () => {
    gsap.to(horizontalelement, 1, { x: "-90%" });
  };
  const scrollanimation5 = () => {
    gsap.to(horizontalelement, 1, { x: "0%" });
  };
  return (
    <main>
      <Navbar/>
      <section className="otherservices">
        <h1 className="inner-service-h1">
        User Experience</h1></section>
      <section className="animations">
        <div className="vertical-effect">
          <div className="vertical-animation">
            <div className="vertical-animation-container"
              onLoad={scrollanimation}
              onMouseEnter={scrollanimation}
              >
              <h1 className="vertical-animation-h1">UX Audit</h1>
              <p className="vertical-animation-para">
                "Evaluation is Creation." A UX audit is a critical evaluation of
                the website's or application's interface, which enables us to
                gain valuable insights into user behaviour and formulate a
                data-driven action plan for you to hit the ground running.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation1}
              >
              <h1 className="vertical-animation-h1">UX Research</h1>
              <p className="vertical-animation-para">
                A holistic understanding of the target audience is the key
                driver of growth. Our UX research team strives to provide
                qualitative as well as quantitative insights into end-user
                behaviour, allowing you to take strategic actions to address the
                strengths and weaknesses.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation2}
              >
              <h1 className="vertical-animation-h1">UI UX Consulting</h1>
              <p className="vertical-animation-para">
                "Evaluation is Creation." A UX audit is a critical evaluation of
                the website's or application's interface, which enables us to
                gain valuable insights into user behaviour and formulate a
                data-driven action plan for you to hit the ground running.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation3}
              >
              <h1 className="vertical-animation-h1">User Experience Design</h1>
              <p className="vertical-animation-para">
                User Experience is at the core of everything we build at
                Codelinear. Our UX team deligently researches user behaviour and
                strategically builds prototypes and wireframes that provide the
                finest experiences to the end users. We craft designs that are
                the conglomeration of intuition, empathy, and clarity.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation4}
              >
              <h1 className="vertical-animation-h1">User Interface Design</h1>
              <p className="vertical-animation-para">
                In the era of plummeting user attention span, an engaging user
                interface ensures better customer retention and conversion
                rates. Our UI Team creates high-fidelity interfaces that
                perfectly balance visual aesthetics and usability, enabling
                users to seamlessly interact with them.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation5}
              >
              <h1 className="vertical-animation-h1">Digital Branding</h1>
              <p className="vertical-animation-para">
                Our Go-To-Market Strategy entails extensive research into the
                market condition. We devise comprehensive launch and marketing
                strategies for you to position yourself in the market by
                mitigating the risks and capitalising on data-driven insights.
              </p>
            </div>
          </div>
        </div>
        <div className="horizontal-animation">
          <div className="horizontal-animation-container"
              ref={(el) => (horizontalelement = el)}
              >
            <p className="horizontal-animation-para">UX Audit</p>
            <p className="horizontal-animation-para">UX Research</p>
            <p className="horizontal-animation-para">UI UX Consulting</p>
            <p className="horizontal-animation-para">User Experience Design</p>
            <p className="horizontal-animation-para">User Interface Design</p>
            <p className="horizontal-animation-para">Digital Branding</p>
          </div>
        </div>
      </section>
      <Servicesslide />
      <Footer/>
    </main>
  );
}
