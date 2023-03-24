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
  let all = useRef(null);

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
          <p className="blog-btn-content" onClick={onClickSort}>
            UX
          </p>
          <p className="blog-btn-content" onClick={onClickSort2}>
            No Code
          </p>
          <p className="blog-btn-content" onClick={onClickSort3}>
            MVP
          </p>
        </div>
      </section>
      <section>
        <aside className="blogcol" ref={(el) => (col1 = el)}>
          <div className="blog-container">
            <div className="blog-containers" ref={(el) => (empathy1 = el)}>
              <Link to={"/empathy"} className="link-imgs">
                <img src={image1} alt="" className="blog-imgs"  loading="lazy"/>
              </Link>
              <div className="blog-container-content">
                <h1 className="blog-heading">Empathy In UX</h1>
                {/* <p className="blog-para">
                  Empathy is a foundational principle in the concept of design
                  thinking – a user-based approach to problem-solving that
                  combines hands-on testing of a product or service with the
                  actual users.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
            <div
              className="blog-containers"
              ref={(el) => (digitalmarketing = el)}
            >
              <img src={image2} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">Digital Marketing Trends 2023</h1>
                {/* <p className="blog-para">
                  We have compiled a list of digital marketing trends that may
                  assist you in staying on top of your marketing game.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
            <div className="blog-containers" ref={(el) => (empathy2 = el)} >
              <Link to={"/empathy"} className="link-imgs">
                <img src={image1} alt="" className="blog-imgs"  loading="lazy"/>
              </Link>
              <div className="blog-container-content">
                <h1 className="blog-heading">Empathy In UX</h1>
                {/* <p className="blog-para">
                  Empathy is a foundational principle in the concept of design
                  thinking – a user-based approach to problem-solving that
                  combines hands-on testing of a product or service with the
                  actual users.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
          </div>
        </aside>
        <aside className="blogcol" ref={(el) => (col2 = el)}>
          <div className="blog-container">
            <div className="blog-containers" ref={(el) => (MVP1 = el)}>
              <img src={image3} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">Minimum Viable Product</h1>
                {/* <p className="blog-para">
                  Building an MVP that attracts investors enough to fund it is
                  indeed a magic potion that is not complete without the right
                  spells.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
            <div className="blog-containers" ref={(el) => (design = el)}>
              <img src={image4} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">Design System</h1>
                {/* <p className="blog-para">
                  A design system is a guide or a standard structure with
                  parameters for design and code along with design components
                  that will unify both.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
            <div className="blog-containers" ref={(el) => (MVP2 = el)}>
              <img src={image3} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">Minimum Viable Product</h1>
                {/* <p className="blog-para">
                  Building an MVP that attracts investors enough to fund it is
                  indeed a magic potion that is not complete without the right
                  spells.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
          </div>
        </aside>
        <aside className="blogcol" ref={(el) => (col3 = el)}>
          <div className="blog-container">
            <div className="blog-containers" ref={(el) => (NCR1 = el)}>
              <img src={image5} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">No Code Revolution</h1>
                {/* <p className="blog-para">
                  The No-code revolution is indicative that modern businessmen
                  and women want to keep creative control in their own hands
                  when it comes to developing websites or mobile applications.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
            <div className="blog-containers" ref={(el) => (SVM = el)}>
              <img src={image6} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">Spotify Vs Magento</h1>
                {/* <p className="blog-para">
                  While Shopify offers a no-coding and user-friendly platform
                  that can help you run an online shop in no time, Magento’s
                  flexibility may help you scale faster.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
            <div className="blog-containers" ref={(el) => (NCR2 = el)}>
              <img src={image5} alt="" className="blog-imgs"  loading="lazy"/>
              <div className="blog-container-content">
                <h1 className="blog-heading">No Code Revolution</h1>
                {/* <p className="blog-para">
                  The No-code revolution is indicative that modern businessmen
                  and women want to keep creative control in their own hands
                  when it comes to developing websites or mobile applications.
                </p> */}
              </div>
              {/* <p className="blog-btns">Read More</p> */}
            </div>
          </div>
        </aside>
        <div className="arrow-left-right" ref={(el) => (arrow = el)}>
          <img src={left_arrow} alt="" id="left-arr"  loading="lazy"/>
          <p id="no1by5">1/5</p>
          <img src={right_arrow} alt="" srcset="" id="right-arr"  loading="lazy"/>
        </div>
      </section>
    </>
  );
}
