import image1 from "./Images/Frame 43.svg";
import image2 from "./Images/Frame 44.svg";
import image3 from "./Images/Frame 46.svg";
import image4 from "./Images/Frame 472.svg";
import image5 from "./Images/Frame 45.svg";
import image6 from "./Images/Frame 47.svg";
import left_arrow from "./Images/Frame 7.png";
import right_arrow from "./Images/Frame 8.png";
import { useRef } from "react";
import gsap from "gsap";

import { Link } from "react-router-dom";

export default function Blogsection() {
  let empathy1 = useRef(null);
  let empathy2 = useRef(null);
  let digitalmarketing = useRef(null);
  let MVP1 = useRef(null);
  let MVP2 = useRef(null);
  let design = useRef(null);
  let NCR1 = useRef(null);
  let NCR2 = useRef(null);
  let SVM = useRef(null);
  let col1 = useRef(null);
  let col2 = useRef(null);
  let col3 = useRef(null);
  let arrow = useRef(null);

  const onClickSort = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(MVP1, 0, { display: "none" });
    gsap.to(MVP2, 0, { display: "none" });
    gsap.to(NCR1, 0, { display: "none" });
    gsap.to(NCR2, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(col2, 0, { display: "none" });
    gsap.to(col3, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(col1, 0, { display: "flex" });
    gsap.to(empathy1, 0, { display: "flex" });
    gsap.to(empathy2, 0, { display: "flex" });
  };
  const onClickSort2 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(MVP1, 0, { display: "none" });
    gsap.to(MVP2, 0, { display: "none" });
    gsap.to(empathy1, 0, { display: "none" });
    gsap.to(empathy2, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(col1, 0, { display: "none" });
    gsap.to(col2, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(NCR1, 0, { display: "flex" });
    gsap.to(NCR2, 0, { display: "flex" });
    gsap.to(col3, 0, { display: "flex" });
  };
  const onClickSort3 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(MVP1, 0, { display: "none" });
    gsap.to(MVP2, 0, { display: "none" });
    gsap.to(empathy1, 0, { display: "none" });
    gsap.to(empathy2, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(col1, 0, { display: "none" });
    gsap.to(col3, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(MVP1, 0, { display: "flex" });
    gsap.to(MVP2, 0, { display: "flex" });
    gsap.to(col2, 0, { display: "flex" });
  };
  return (
    <>
      <section className="blog-content-section">
        <div className="blog-btns">
          <p className="blog-btn-content" onClick={onClickSort}>
            UX
          </p>
          <p className="blog-btn-content" onClick={onClickSort2}>
            No Code
          </p>
          <p className="blog-btn-content" onClick={onClickSort3}>MVP</p>
          <p className="blog-btn-content">Rice Ricotta</p>
        </div>
      </section>
      <section>
        <aside className="blogcol" ref={(el) => (col1 = el)}>
          <div className="blog-container">
            <div className="blog-containers" ref={(el) => (empathy1 = el)}>
              <Link to={"/empathy"} className="link-imgs">
                <img src={image1} alt="" className="blog-imgs" />
              </Link>
              <div className="blog-container-content">
                <h1 className="blog-heading">Empathy In UX</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
            <div
              className="blog-containers"
              ref={(el) => (digitalmarketing = el)}
            >
              <img src={image2} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">Digital Marketing Trends 2023</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
            <div className="blog-containers" ref={(el) => (empathy2 = el)}>
              <Link to={"/empathy"} className="link-imgs">
                <img src={image1} alt="" className="blog-imgs" />
              </Link>
              <div className="blog-container-content">
                <h1 className="blog-heading">Empathy In UX</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
          </div>
        </aside>
        <aside className="blogcol" ref={(el) => (col2 = el)}>
          <div className="blog-container">
            <div className="blog-containers" ref={(el) => (MVP1 = el)}>
              <img src={image3} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">Minimum Viable Product</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
            <div className="blog-containers" ref={(el) => (design = el)}>
              <img src={image4} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">Design System</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
            <div className="blog-containers" ref={(el) => (MVP2 = el)}>
              <img src={image3} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">Minimum Viable Product</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
          </div>
        </aside>
        <aside className="blogcol" ref={(el) => (col3 = el)}>
          <div className="blog-container">
            <div className="blog-containers" ref={(el) => (NCR1 = el)}>
              <img src={image5} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">No Code Revolution</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
            <div className="blog-containers" ref={(el) => (SVM = el)}>
              <img src={image6} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">Spotify Vs Magento</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
            <div className="blog-containers" ref={(el) => (NCR2 = el)}>
              <img src={image5} alt="" className="blog-imgs" />
              <div className="blog-container-content">
                <h1 className="blog-heading">No Code Revolution</h1>
                <p className="blog-para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
              <p className="blog-btns">Read More</p>
            </div>
          </div>
        </aside>
        <div className="arrow-left-right" ref={(el) => (arrow = el)}>
          <img src={left_arrow} alt="" id="left-arr" />
          <p id="no1by5">1/5</p>
          <img src={right_arrow} alt="" srcset="" id="right-arr" />
        </div>
      </section>
    </>
  );
}
