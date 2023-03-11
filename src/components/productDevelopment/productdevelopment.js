import gsap from "gsap";
import { useRef } from "react";
import Servicesslide from "../serviceHorizontalSlide/SHS";

export default function Productdevelopment() {
  let horizontalelement = useRef(null);

  const scrollanimation = () => {
    gsap.to(horizontalelement, 1, { x: "-2%" });
  };
  const scrollanimation1 = () => {
    gsap.to(horizontalelement, 1, { x: "-16%" });
  };
  const scrollanimation2 = () => {
    gsap.to(horizontalelement, 1, { x: "-40%" });
  };
  const scrollanimation3 = () => {
    gsap.to(horizontalelement, 1, { x: "-60%" });
  };
  const scrollanimation4 = () => {
    gsap.to(horizontalelement, 1, { x: "-80%" });
  };
  const scrollanimation5 = () => {
    gsap.to(horizontalelement, 1, { x: "-100%" });
  };
  const scrollanimation6 = () => {
    gsap.to(horizontalelement, 1, { x: "0%" });
  };
  return (
    <main>
      <section className="otherservices">
        <h1 className="inner-service-h1">
          Providing Ideas The Platform To Be Transformed Into Reality.
        </h1>
      </section>
      <section className="animations">
        <div className="vertical-effect">
          <div className="vertical-animation">
            <div className="vertical-animation-container"
              onLoad={scrollanimation}
              onMouseEnter={scrollanimation}
              >
              <h1 className="vertical-animation-h1">Website Development</h1>
              <p className="vertical-animation-para">
                A user's first interaction with your company is through your
                website. We develop and maintain websites to enhance your
                business image and credibility by providing your users with a
                seamless experience across each point of contact.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation1}
              >
              <h1 className="vertical-animation-h1">Web App Development</h1>
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
              <h1 className="vertical-animation-h1">E-Commerce Development </h1>
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
              <h1 className="vertical-animation-h1">MVP Development </h1>
              <p className="vertical-animation-para">
                Minimum Viable Product enables you to launch your product in the
                market and gain valuable feedback for further development. We
                empower ideas by building MVPs that strategically capture the
                essence of the original product with minimal investment.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation4}
              >
              <h1 className="vertical-animation-h1">Native App Development</h1>
              <p className="vertical-animation-para">
                Technology is altering the way the world is perceived. We build
                applications that distinguish your app from more than a million
                in the market. Our team of developers utilise their expertise to
                build apps that ensure the epitome of digital experience for
                users, cater to their needs, and Transform your vision into
                reality.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation5}
              >
              <h1 className="vertical-animation-h1">Hybrid App Development</h1>
              <p className="vertical-animation-para">
                Our Go-To-Market Strategy entails extensive research into the
                market condition. We devise comprehensive launch and marketing
                strategies for you to position yourself in the market by
                mitigating the risks and capitalising on data-driven insights.
              </p>
            </div>
            <div className="vertical-animation-container"
              onMouseEnter={scrollanimation6}
              >
              <h1 className="vertical-animation-h1">
                Enterprise App Development
              </h1>
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
            <p className="horizontal-animation-para">Website Development</p>
            <p className="horizontal-animation-para">Web App Developments</p>
            <p className="horizontal-animation-para">E-Commerce Development</p>
            <p className="horizontal-animation-para">MVP Development </p>
            <p className="horizontal-animation-para">Native App Development</p>
            <p className="horizontal-animation-para">Hybrid App Development</p>
            <p className="horizontal-animation-para">
              Enterprise App Development
            </p>
          </div>
        </div>
      </section>
      <Servicesslide />
    </main>
  );
}
