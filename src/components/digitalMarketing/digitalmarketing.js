import { gsap } from "gsap";
import { useRef } from "react";
import Servicesslide from "../serviceHorizontalSlide/SHS";

export default function Digitalmarketing() {
  let horizontalelement = useRef(null);

  const scrollanimation = () => {
    gsap.to(horizontalelement, 1, { x: "-28%" });
  };
  const scrollanimation1 = () => {
    gsap.to(horizontalelement, 1, { x: "-50%" });
  };
  const scrollanimation2 = () => {
    gsap.to(horizontalelement, 1, { x: "-70%" });
  };
  const scrollanimation3 = () => {
    gsap.to(horizontalelement, 1, { x: "0" });
  };
  return (
    <main>
      <section className="otherservices">
        <h1 className="inner-service-h1">Digital Marketing</h1>
      </section>
      <section className="animations">
        <div className="vertical-effect">
          <div className="vertical-animation">
            <div
              className="vertical-animation-container"
              onLoad={scrollanimation}
              onMouseEnter={scrollanimation}
            >
              <h1 className="vertical-animation-h1">SEO</h1>
              <p className="vertical-animation-para">
                A user's first interaction with your company is through your
                website. We develop and maintain websites to enhance your
                business image and credibility by providing your users with a
                seamless experience across each point of contact.
              </p>
            </div>
            <div
              className="vertical-animation-container"
              onMouseEnter={scrollanimation1}
            >
              <h1 className="vertical-animation-h1">Social Media</h1>
              <p className="vertical-animation-para">
                A holistic understanding of the target audience is the key
                driver of growth. Our UX research team strives to provide
                qualitative as well as quantitative insights into end-user
                behaviour, allowing you to take strategic actions to address the
                strengths and weaknesses.
              </p>
            </div>
            <div
              className="vertical-animation-container"
              onMouseEnter={scrollanimation2}
            >
              <h1 className="vertical-animation-h1">Paid Search</h1>
              <p className="vertical-animation-para">
                "Evaluation is Creation." A UX audit is a critical evaluation of
                the website's or application's interface, which enables us to
                gain valuable insights into user behaviour and formulate a
                data-driven action plan for you to hit the ground running.
              </p>
            </div>
            <div
              className="vertical-animation-container"
              onMouseEnter={scrollanimation3}
            >
              <h1 className="vertical-animation-h1">Paid Social</h1>
              <p className="vertical-animation-para">
                TMinimum Viable Product enables you to launch your product in
                the market and gain valuable feedback for further development.
                We empower ideas by building MVPs that strategically capture the
                essence of the original product with minimal investment.
              </p>
            </div>
          </div>
        </div>
        <div className="horizontal-animation">
          <div
            className="horizontal-animation-container"
            ref={(el) => (horizontalelement = el)}
          >
            <p className="horizontal-animation-para">SEO</p>
            <p className="horizontal-animation-para">Social Media</p>
            <p className="horizontal-animation-para">Paid Search </p>
            <p className="horizontal-animation-para">Paid Social </p>
          </div>
        </div>
      </section>
      <Servicesslide />
    </main>
  );
}
