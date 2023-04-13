import image1 from "./Images/Frame 43.svg";
import image2 from "./Images/Frame 44.svg";
import image3 from "./Images/Frame 46.svg";
import image4 from "./Images/Frame 472.svg";
import image5 from "./Images/Frame 45.svg";
import image6 from "./Images/Frame 47.svg";
import discovery from "./Images/Frame 48.png";
import story from "./Images/Frame 49.png";
import brand from "./Images/Frame 50.png";
import SEO from "./Images/Frame 51.png";
import UX from "./Images/Frame 52 (1).png";
import gestalt from "./Images/Frame 53.png";
import BVG from "./Images/Frame 54.png";
import listen from "./Images/Frame 56.png";
import reactimg from "./Images/Frame 4.png";
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
  let all = useRef(null);

  const onClickSort = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(MVP1, 0, { display: "none" });
    gsap.to(MVP2, 0, { display: "none" });
    gsap.to(NCR1, 0, { display: "none" });
    gsap.to(NCR2, 0, { display: "none" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(col2, 0, { display: "flex" });
    gsap.to(col3, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(col1, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
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
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(NCR2, 0, { display: "flex" });
    gsap.to(col3, 0, { display: "flex" });
  };
  const onClickSort3 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(NCR1, 0, { display: "none" });
    gsap.to(NCR2, 0, { display: "none" });
    gsap.to(empathy1, 0, { display: "none" });
    gsap.to(empathy2, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(col1, 0, { display: "none" });
    gsap.to(col3, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(MVP1, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(MVP2, 0, { display: "flex" });
    gsap.to(col2, 0, { display: "flex" });
  };
  const onClickSort4 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(NCR1, 0, { display: "none" });
    gsap.to(NCR2, 0, { display: "none" });
    gsap.to(empathy1, 0, { display: "none" });
    gsap.to(empathy2, 0, { display: "none" });
    gsap.to(MVP1, 0, { display: "none" });
    gsap.to(MVP2, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(col2, 0, { display: "none" });
    gsap.to(col3, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(design, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(col1, 0, { display: "flex" });
  };
  const onClickSort5 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(NCR1, 0, { display: "none" });
    gsap.to(NCR2, 0, { display: "none" });
    gsap.to(empathy1, 0, { display: "none" });
    gsap.to(empathy2, 0, { display: "none" });
    gsap.to(MVP1, 0, { display: "none" });
    gsap.to(MVP2, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(col1, 0, { display: "none" });
    gsap.to(col2, 0, { display: "none" });
    gsap.to(arrow, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(col3, 0, { display: "flex" });
  };
  const onClickSort1 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(NCR1, 0, { display: "flex" });
    gsap.to(NCR2, 0, { display: "flex" });
    gsap.to(empathy1, 0, { display: "flex" });
    gsap.to(empathy2, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(col1, 0, { display: "flex" });
    gsap.to(col3, 0, { display: "flex" });
    gsap.to(arrow, 0, { display: "flex" });

    gsap.to(MVP1, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "hidden" });
    gsap.to(MVP2, 0, { display: "flex" });
    gsap.to(col2, 0, { display: "flex" });
  };
  return (
    <>
      <section className="blog-content-section">
        <div className="blog-btns">
          <p className="blog-btn-content" onClick={onClickSort4}>
            Digital Marketing
          </p>
          <p className="blog-btn-content" onClick={onClickSort5}>
            eCommerce
          </p>
          <p className="blog-btn-content" onClick={onClickSort3}>
            MVP
          </p>
          <p className="blog-btn-content" onClick={onClickSort2}>
            No Code
          </p>
          <p className="blog-btn-content" onClick={onClickSort}>
            UI/UX Design
          </p>
          <p
            className="blog-btn-content"
            ref={(el) => (all = el)}
            style={{
              visibility: "hidden",
            }}
            onClick={onClickSort1}
          >
            All
          </p>
        </div>
      </section>
      <section>
        <aside className="blogcol" ref={(el) => (col2 = el)}>
          <div className="blog-container">
            <Link to={"/empathy"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (MVP1 = el)}>
                <img src={image3} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">Minimum Viable Product</h1>
                </div>
              </div>
            </Link>
            <Link to={"/Story"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (design = el)}>
                <img src={story} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">Storytelling</h1>
                </div>
              </div>
            </Link>
            <Link to={"/react-vs-flutter"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (MVP2 = el)}>
                <img src={reactimg} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">React Native Vs Flutter</h1>
                </div>
              </div>
            </Link>
          </div>
        </aside>
        <aside className="blogcol" ref={(el) => (col3 = el)}>
          <div className="blog-container">
          <Link to={"/Design"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (design = el)}>
                <img src={image4} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">Design System</h1>
                </div>
              </div>
            </Link>
            <Link to={"/shopify-vs-magento"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (SVM = el)}>
                <img src={image6} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">Shopify Vs Magento</h1>
                </div>
              </div>
            </Link>
            <Link to={"/no-code-revolution"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (NCR2 = el)}>
                <img src={image5} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">No Code Revolution</h1>
                </div>
              </div>
            </Link>
          </div>
        </aside>
        <aside className="blogcol" ref={(el) => (col1 = el)}>
          <div className="blog-container">
            <Link to={"/empathy"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (MVP1 = el)}>
                <img src={image3} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">Minimum Viable Product</h1>
                </div>
              </div>
            </Link>
            <Link to={"/digital-marketing-trends-2023"} className="link-imgs">
              <div
                className="blog-containers"
                ref={(el) => (digitalmarketing = el)}
              >
                <img src={image2} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">
                    Digital Marketing Trends 2023
                  </h1>
                </div>
              </div>
            </Link>
            <Link to={"/empathy-in-UX"} className="link-imgs">
              <div className="blog-containers" ref={(el) => (empathy2 = el)}>
                <img src={image1} alt="" className="blog-imgs" />
                <div className="blog-container-content">
                  <h1 className="blog-heading">Empathy In UX</h1>
                </div>
              </div>
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
