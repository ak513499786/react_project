import "./work.css";
import { useRef } from "react";
import gsap from "gsap";
import Card from "./card/Card";
// import Clients from '../home/client'

export default function Work() {
  let cardHover = useRef(null);
  let btn = useRef(null);
  let text = useRef(null);
  let para = useRef(null);
  let cardHover1 = useRef(null);
  let btn1 = useRef(null);
  let text1 = useRef(null);
  let para1 = useRef(null);
  let cardHover2 = useRef(null);
  let btn2 = useRef(null);
  let text2 = useRef(null);
  let para2 = useRef(null);
  let cardHover3 = useRef(null);
  let btn3 = useRef(null);
  let text3 = useRef(null);
  let para3 = useRef(null);
  let cardHover4 = useRef(null);
  let btn4 = useRef(null);
  let text4 = useRef(null);
  let para4 = useRef(null);
  let cardHover5 = useRef(null);
  let btn5 = useRef(null);
  let text5 = useRef(null);
  let para5 = useRef(null);
  let cardHover6 = useRef(null);
  let btn6 = useRef(null);
  let text6 = useRef(null);
  let para6 = useRef(null);
  let cardHover7 = useRef(null);
  let btn7 = useRef(null);
  let text7 = useRef(null);
  let para7 = useRef(null);
  let visiblecard1 = useRef(null);
  let visiblecard2 = useRef(null);
  let visiblecard3 = useRef(null);
  let cardcenter = useRef(null);
  let cardremove = useRef(null);
  let showmore = useRef(null);
  let overflowcontrol = useRef(null);

  const cardclick = () => {
    gsap.to(visiblecard1, 0, { css: { display: "block" } });
    gsap.to(visiblecard2, 0, { css: { display: "block" } });
    gsap.to(visiblecard3, 0, { css: { display: "block" } });
    gsap.to(showmore, 0, { css: { display: "flex" } });
    gsap.to(cardcenter, 0, {
      css: {
        flexWrap: "wrap",
        height: "auto",
        width: "auto",
      },
    });
    gsap.to(overflowcontrol, 0, { css: { overflow: "hidden" } });
    gsap.to(cardremove, 0, { css: { display: "none" } });
  };

  const cardOver = () => {
    gsap.to(cardHover, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text, 0.4, { opacity: "0" });
    gsap.to(para, 0.4, { opacity: "0" });
    gsap.to(btn, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut = () => {
    gsap.to(text, 0.4, { opacity: "1" });
    gsap.to(para, 0.4, { opacity: "1" });
    gsap.to(cardHover, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver1 = () => {
    gsap.to(cardHover1, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text1, 0.4, { opacity: "0" });
    gsap.to(para1, 0.4, { opacity: "0" });
    gsap.to(btn1, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut1 = () => {
    gsap.to(text1, 0.4, { opacity: "1" });
    gsap.to(para1, 0.4, { opacity: "1" });
    gsap.to(cardHover1, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn1, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver2 = () => {
    gsap.to(cardHover2, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text2, 0.4, { opacity: "0" });
    gsap.to(para2, 0.4, { opacity: "0" });
    gsap.to(btn2, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut2 = () => {
    gsap.to(text2, 0.4, { opacity: "1" });
    gsap.to(para2, 0.4, { opacity: "1" });
    gsap.to(cardHover2, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn2, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver3 = () => {
    gsap.to(cardHover3, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text3, 0.4, { opacity: "0" });
    gsap.to(para3, 0.4, { opacity: "0" });
    gsap.to(btn3, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut3 = () => {
    gsap.to(text3, 0.4, { opacity: "1" });
    gsap.to(para3, 0.4, { opacity: "1" });
    gsap.to(cardHover3, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn3, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver4 = () => {
    gsap.to(cardHover4, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text4, 0.4, { opacity: "0" });
    gsap.to(para4, 0.4, { opacity: "0" });
    gsap.to(btn4, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut4 = () => {
    gsap.to(text4, 0.4, { opacity: "1" });
    gsap.to(para4, 0.4, { opacity: "1" });
    gsap.to(cardHover4, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn4, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver5 = () => {
    gsap.to(cardHover5, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text5, 0.4, { opacity: "0" });
    gsap.to(para5, 0.4, { opacity: "0" });
    gsap.to(btn5, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut5 = () => {
    gsap.to(text5, 0.4, { opacity: "1" });
    gsap.to(para5, 0.4, { opacity: "1" });
    gsap.to(cardHover5, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn5, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver6 = () => {
    gsap.to(cardHover6, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text6, 0.4, { opacity: "0" });
    gsap.to(para6, 0.4, { opacity: "0" });
    gsap.to(btn6, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut6 = () => {
    gsap.to(text6, 0.4, { opacity: "1" });
    gsap.to(para6, 0.4, { opacity: "1" });
    gsap.to(cardHover6, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn6, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  const cardOver7 = () => {
    gsap.to(cardHover7, 0.4, { css: { backgroundColor: "transparent" } });
    gsap.to(text7, 0.4, { opacity: "0" });
    gsap.to(para7, 0.4, { opacity: "0" });
    gsap.to(btn7, 0.3, {
      width: "80%",
      backgroundColor: "#FFCD05",
      border: "1px solid #FFCD05",
      color: "black",
    });
  };
  const cardOut7 = () => {
    gsap.to(text7, 0.4, { opacity: "1" });
    gsap.to(para7, 0.4, { opacity: "1" });
    gsap.to(cardHover7, 0.4, { css: { backgroundColor: "#111111" } });
    gsap.to(btn7, 0.3, {
      width: "219px",
      backgroundColor: "transparent",
      border: "1px solid",
      color: "white",
    });
  };
  return (
    <>
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


      <div className="showmore-btn" ref={(el) => (showmore = el)}>
        <div className="showmore">show more</div>
      </div>
      {/* <Clients/> */}
    </>
  );
}
