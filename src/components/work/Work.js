import "./work.css";
// <<<<<<< HEAD
import Clients from "../home/client";
import Workhero from "./Workhero";
import Workhorizontalscroll from "./Workhorizontalscroll";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
// =======
import { useRef } from "react";
import gsap from "gsap";
import Card from "./card/Card";
// import Clients from '../home/client'
// >>>>>>> cf43176c7766f4b31cb4810966493754162b7074

export default function Work() {
  return (
    <>
{/* <<<<<<< HEAD
      <Navbar />
      <Workhero />
      <Workhorizontalscroll />
      <div className="client-container">
        <Clients />
======= */}
      <main className="work_hero">
        <div className="container-1">
          <h1 id="work_heading">We're Proud To Show You Our Accomplishments</h1>
        </div>
      </main>

      <Card/>
      {/* <section className="work-section" ref={(el) => (overflowcontrol = el)}>
          <div className="work-maincontainer" ref={(el) => (cardcenter = el)}>
            <div className="work-containers">
              <div className="bg1">
                <div
                  className="work-div"
                  ref={(el) => (cardHover = el)}
                  onMouseOver={cardOver}
                  onMouseOut={cardOut}
                >
                  <h1 className="work-section-h1" ref={(el) => (text = el)}>
                    COWBOY
                  </h1>
                  <p className="work-section-para" ref={(el) => (para = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div className="work-containers">
              <div className="bg2">
                <div
                  className="work-div"
                  ref={(el) => (cardHover1 = el)}
                  onMouseOver={cardOver1}
                  onMouseOut={cardOut1}
                >
                  <h1 className="work-section-h1" ref={(el) => (text1 = el)}>
                    MANGO
                  </h1>
                  <p className="work-section-para" ref={(el) => (para1 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn1 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div className="work-containers">
              <div className="bg3">
                <div
                  className="work-div"
                  ref={(el) => (cardHover2 = el)}
                  onMouseOver={cardOver2}
                  onMouseOut={cardOut2}
                >
                  <h1 className="work-section-h1" ref={(el) => (text2 = el)}>
                    William Abraham
                  </h1>
                  <p className="work-section-para" ref={(el) => (para2 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn2 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div className="work-containers">
              <div className="bg4">
                <div
                  className="work-div"
                  ref={(el) => (cardHover3 = el)}
                  onMouseOver={cardOver3}
                  onMouseOut={cardOut3}
                >
                  <h1 className="work-section-h1" ref={(el) => (text3 = el)}>
                    Klub
                  </h1>
                  <p className="work-section-para" ref={(el) => (para3 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn3 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div className="work-containers">
              <div className="bg5">
                <div
                  className="work-div"
                  ref={(el) => (cardHover4 = el)}
                  onMouseOver={cardOver4}
                  onMouseOut={cardOut4}
                >
                  <h1 className="work-section-h1" ref={(el) => (text4 = el)}>
                    Lyra Health
                  </h1>
                  <p className="work-section-para" ref={(el) => (para4 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn4 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div
              className="work-containers invisible"
              ref={(el) => (visiblecard1 = el)}
            >
              <div className="bg6">
                <div
                  className="work-div"
                  ref={(el) => (cardHover5 = el)}
                  onMouseOver={cardOver5}
                  onMouseOut={cardOut5}
                >
                  <h1 className="work-section-h1" ref={(el) => (text5 = el)}>
                    Kernel Wealth
                  </h1>
                  <p className="work-section-para" ref={(el) => (para5 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn5 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div
              className="work-containers invisible"
              ref={(el) => (visiblecard2 = el)}
            >
              <div className="bg7">
                <div
                  className="work-div"
                  ref={(el) => (cardHover6 = el)}
                  onMouseOver={cardOver6}
                  onMouseOut={cardOut6}
                >
                  <h1 className="work-section-h1" ref={(el) => (text6 = el)}>
                    Studio Neat
                  </h1>
                  <p className="work-section-para" ref={(el) => (para6 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn6 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div
              className="work-containers invisible"
              ref={(el) => (visiblecard3 = el)}
            >
              <div className="bg8">
                <div
                  className="work-div"
                  ref={(el) => (cardHover7 = el)}
                  onMouseOver={cardOver7}
                  onMouseOut={cardOut7}
                >
                  <h1 className="work-section-h1" ref={(el) => (text7 = el)}>
                    Deel
                  </h1>
                  <p className="work-section-para" ref={(el) => (para7 = el)}>
                    Lorem porta amet at tempus malesuada hac massa at. Lacus a
                    bibendum turpis enim nibh sed ornare porta convallis.
                    Dignissim faucibus integer non aliquam sit. Tellus
                    ullamcorper id morbi donec volutpat enim vitae et ipsum.
                  </p>
                  <div className="work-btn" ref={(el) => (btn7 = el)}>
                    view case study
                  </div>
                </div>
              </div>
            </div>
            <div className="work-containers">
              <div
                className="work-div explorediv"
                onClick={cardclick}
                ref={(el) => (cardremove = el)}
              >
                <div className="expmore">Explore More</div>
              </div>
            </div>
          </div>
      </section> */}
{/* 

      <div className="showmore-btn" ref={(el) => (showmore = el)}>
        <div className="showmore">show more</div> */}
{/* >>>>>>> cf43176c7766f4b31cb4810966493754162b7074 */}
      {/* </div> */}
      <Footer />
    </>
  );
}
