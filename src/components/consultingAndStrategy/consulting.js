import "./consulting.css";
import Servicesslide from "../services/Explore/Explore";
import { useRef } from "react";
import { gsap } from "gsap";
import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";

export default function Consultingandstrategy() {
  let horizontalelement = useRef(null);

  const scrollanimation = () => {
    gsap.to(horizontalelement, 0.5, { x: "-13%" });
  };
  const scrollanimation1 = () => {
    gsap.to(horizontalelement, 0.5, { x: "-35%" });
  };
  const scrollanimation2 = () => {
    gsap.to(horizontalelement, 0.5, { x: "-60%" });
  };
  const scrollanimation3 = () => {
    gsap.to(horizontalelement, 0.5, { x: "-85%" });
  };
  const scrollanimation4 = () => {
    gsap.to(horizontalelement, 0.5, { x: "0%" });
  };
  return (
    <main className="service-inner-page">
      <section className="otherservices">
        <h1 className="inner-service-h1">
          Define And Shape Tomorrow With Us By Capitalising On Today's
          Disruptions.
        </h1>
      </section>
      <section className="animations">
        <div className="animation-container">
          <div className="vertical-effect">
            <div className="vertical-animation">
              <div className="vertical-animation-container"
              onLoad={scrollanimation}
              onMouseEnter={scrollanimation}
              >
                <h1 className="vertical-animation-h1">Market Research</h1>
                <p className="vertical-animation-para">
                  As technology is propelling the world into a new realm of
                  disruptions, our strategic market research enables you to
                  identify the viability of the product by directly taking
                  insights from targeted consumers and market trends, enabling
                  you to make decisions driven by consumer behaviour and data.
                </p>
              </div>
              <div className="vertical-animation-container"
              onMouseEnter={scrollanimation1}
              >
                <h1 className="vertical-animation-h1">Stakeholder Workshops</h1>
                <p className="vertical-animation-para">
                  In order to create a sense of shared purpose and build
                  momentum, we take a step ahead and organise stakeholder
                  workshops to gain an edge over current scenarios and
                  strategically develop an action plan.
                </p>
              </div>
              <div className="vertical-animation-container"
              onMouseEnter={scrollanimation2}
              >
                <h1 className="vertical-animation-h1">
                  Product Strategy and Roadmapping
                </h1>
                <p className="vertical-animation-para">
                  We align your product vision with strategy to differentiate
                  you in a market and drive your business goals.We envision the
                  future state of the product and develop a conscious roadmap to
                  transform theoretical conjectures into working models.
                </p>
              </div>
              <div className="vertical-animation-container"
              onMouseEnter={scrollanimation3}
              >
                <h1 className="vertical-animation-h1">
                  Technology Consulting and Platform Planning
                </h1>
                <p className="vertical-animation-para">
                  Technology is becoming ubiquitous, and so is its impact. We
                  assess your entire tech infrastructure, identify gaps,
                  mitigate associated threats, and devise strategies that enable
                  you to adapt and lead the digital transformation.
                </p>
              </div>
              <div className="vertical-animation-container"
              onMouseEnter={scrollanimation4}
              >
                <h1 className="vertical-animation-h1">GTM Strategy</h1>
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
            <div
              className="horizontal-animation-container"
              ref={(el) => (horizontalelement = el)}
            >
              <p className="horizontal-animation-para">Market Research</p>
              <p className="horizontal-animation-para">Stakeholder Workshops</p>
              <p className="horizontal-animation-para">
                Product Strategy and Roadmapping
              </p>
              <p className="horizontal-animation-para">
                Technology Consulting and Platform Planning
              </p>
              <p className="horizontal-animation-para">GTM Strategy</p>
            </div>
          </div>
        </div>
      </section>
      <Servicesslide />
    </main>
  );
}
