import { useRef, useEffect } from "react";
import "./career.css";
import gsap from "gsap";

import image1 from "./images/slide-1.svg";
import image2 from "./images/slide-2.svg";
import image3 from "./images/slide-3.svg";
import image4 from "./images/slide-4.svg";
import image5 from "./images/slide-5.svg";
import image6 from "./images/Vector.svg";
import image7 from "./images/Vector-1.svg";
import image8 from "./images/Vector-2.svg";
import image9 from "./images/Vector-3.svg";

export default function Career() {
  let slideImg1 = useRef(null);
  let slideImg2 = useRef(null);
  let slideImg3 = useRef(null);
  let slideImg4 = useRef(null);
  let slideImg5 = useRef(null);
  let slideImg6 = useRef(null);
  let positioncard = useRef(null);
  let applyingform = useRef(null);
  let jobdesc = useRef(null);
  let positioncard1 = useRef(null);
  let applyingform1 = useRef(null);
  let jobdesc1 = useRef(null);
  let positioncard2 = useRef(null);
  let applyingform2 = useRef(null);
  let jobdesc2 = useRef(null);
  let positioncard3 = useRef(null);
  let applyingform3 = useRef(null);
  let jobdesc3 = useRef(null);
  let positioncard4 = useRef(null);
  let applyingform4 = useRef(null);
  let jobdesc4 = useRef(null);
  let position = useRef(null);
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg1, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg2, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg3, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg4, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg5, { x: "0%" }, { x: "-100%" });
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 10 },
      repeat: -1,
      yoyo: true,
    });
    tl.fromTo(slideImg6, { x: "0%" }, { x: "-100%" });
  }, []);

  const application = () => {
    gsap.to(positioncard, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide = () => {
    gsap.to(positioncard, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow = () => {
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "block" } });
  };
  const application1 = () => {
    gsap.to(positioncard1, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc1, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide1 = () => {
    gsap.to(positioncard1, 0.1, { css: { display: "none" } });
    gsap.to(applyingform1, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc1, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow1 = () => {
    gsap.to(jobdesc1, 0.1, { css: { display: "none" } });
    gsap.to(applyingform1, 0.1, { css: { display: "block" } });
  };
  const application2 = () => {
    gsap.to(positioncard2, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc2, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide2 = () => {
    gsap.to(positioncard2, 0.1, { css: { display: "none" } });
    gsap.to(applyingform2, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc2, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow2 = () => {
    gsap.to(jobdesc2, 0.1, { css: { display: "none" } });
    gsap.to(applyingform2, 0.1, { css: { display: "block" } });
  };
  const application3 = () => {
    gsap.to(positioncard3, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc3, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide3 = () => {
    gsap.to(positioncard3, 0.1, { css: { display: "none" } });
    gsap.to(applyingform3, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc3, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow3 = () => {
    gsap.to(jobdesc3, 0.1, { css: { display: "none" } });
    gsap.to(applyingform3, 0.1, { css: { display: "block" } });
  };
  const application4 = () => {
    gsap.to(positioncard4, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc4, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide4 = () => {
    gsap.to(positioncard4, 0.1, { css: { display: "none" } });
    gsap.to(applyingform4, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc4, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow4 = () => {
    gsap.to(jobdesc4, 0.1, { css: { display: "none" } });
    gsap.to(applyingform4, 0.1, { css: { display: "block" } });
  };

  return (
    <main className="career-page" ref={(el) => (fade = el)}>
      <section className="career-hero">
        <h1 className="career-hero-h1">
          We Are An Impact-Driven Firm, Join Us And Be A Part Of The Impact
        </h1>
      </section>
      <div className="horizontal-slide">
        <img
          src={image1}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg4 = el)}
        />
        <img
          src={image2}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg5 = el)}
        />
        <img
          src={image3}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg6 = el)}
        />
      </div>
      <section className="whyus">
        <div className="why-us-container">
          <h1 className="whyus-h1">Why Us?</h1>
          <p className="whyus-para">
            We are a diverse blend of experts, young professionals, and even
            mentees. And though we may come from diverse backgrounds, our drive
            to make a difference in society unites us. Our cohort comprises
            designers, developers, strategists, and marketers, and collectively
            we blend each of our expertise to innovate, to impact.If this sounds
            like you, we have a role for you!
          </p>
        </div>
        <div className="main-container">
          <div className="whyus-container">
            <div className="whyus-content-container">
              <span className="no">Sauce Bell</span>
              <p className="wucontainer-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
            <img src={image6} alt="" className="card-imgs" />
          </div>
          <div className="whyus-container">
            <div className="whyus-content-container">
              <span className="no">Sauce Bell</span>
              <p className="wucontainer-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
            <img src={image8} alt="" className="card-imgs" />
          </div>
          <div className="whyus-container">
            <div className="whyus-content-container">
              <span className="no">Sauce Bell</span>
              <p className="wucontainer-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
            <img src={image7} alt="" className="card-imgs" />
          </div>
          <div className="whyus-container">
            <div className="whyus-content-container">
              <span className="no">Sauce Bell</span>
              <p className="wucontainer-para">
                Crust beef mozzarella ham red ranch tomatoes spinach.
              </p>
            </div>
            <img src={image9} alt="" className="card-imgs" />
          </div>
        </div>
        <div className="life-container">
          <h1 className="life-h1">Life At Codelinear</h1>
          <p className="life-para">
            We believe in actions over statements. When we say we are diverse,
            we are inclusive and we are here to give back to the community, we
            mean it! We have painstakingly built an environment of "Community"
            within us, in which we uplift and empower one another, and we take
            immense pride in it.
          </p>
        </div>
      </section>
      <div className="horizontal-slide">
        <img
          src={image4}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg1 = el)}
        />
        <img
          src={image5}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg2 = el)}
        />
        <img
          src={image3}
          alt=""
          className="HS-img"
          ref={(el) => (slideImg3 = el)}
        />
      </div>
      <section className="position-container">
        <div className="position-content-container">
          <h1 className="position-h1">Open Positions</h1>
          <div className="open-pos" ref={(el) => (position = el)}>
            <div className="positions" onClick={application}>
              <h1 className="position-content-h1">Product Designer (UX/UI)</h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application1}>
              <h1 className="position-content-h1">
                Software Development Engineer - Mobile Frontend
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application2}>
              <h1 className="position-content-h1">
                Software Development Engineer - Web Frontend
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application3}>
              <h1 className="position-content-h1">
                Software Development Engineer - Backend
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
            <div className="positions" onClick={application4}>
              <h1 className="position-content-h1">
                Software Development Engineer - CMS/E-Commerce
              </h1>
              <span className="office">Bangalore (Remote)</span>
            </div>
            <hr className="pos-hr" />
          </div>
        </div>
      </section>
      <div className="PD" ref={(el) => (positioncard = el)}>
        <h1 className="job-pd-title">
          Product Designer (UI/UX)
          <div className="jobline" onClick={formhide}></div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As an experienced UI/ UX
            designer, you will contribute by having a working knowledge of tools
            such as Figma and work as a part of a cross-functional team by
            collaborating with our Creative Director to design products that
            uplift brand values.
          </p>
          <div className="job-req">
            Figma | Wireframes & User Flows | Prototypes UX Research | Personas
            | Design System
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow}>
            <p className="about_btn_content">
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform = el)}>
          <form action="" className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="number"
                  placeholder="Phone*"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                required
              />
            </div>
            <button className="sub_btn-content submit_btn">submit</button>
          </form>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard1 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - Mobile Frontend{" "}
          <div className="jobline" onClick={formhide1}></div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc1 = el)}>
          <p className="job-pd-desc job-loc">
            AAt Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a mobile front-end
            developer, you will work with our front-end experts to build
            high-definition and responsive mobile applications that seamlessly
            interact with users. You will utilise your knowledge of various
            programming languages to build intuitive applications.
          </p>
          <div className="job-req">
            Android Java | Kotlin | Objective-C | Swift | React Native | Flutter
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow1}>
            <p className="about_btn_content">
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform1 = el)}>
          <form action="" className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="number"
                  placeholder="Phone*"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                required
              />
            </div>
            <button className="sub_btn-content submit_btn">submit</button>
          </form>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard2 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - Web Frontend{" "}
          <div className="jobline" onClick={formhide2}></div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc2 = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a web frontend
            developer, you will collaborate with designers to build
            detail-oriented, and responsive user interfaces. You will design the
            site's layouts and build consistent web platforms that flawlessly
            interact with users, and are highly navigable.
          </p>
          <div className="job-req">
            HTML5 | CSS3 | jQuery | JavaScript | BootStrap | React.js Veu.js |
            Angular
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow2}>
            <p className="about_btn_content">
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform2 = el)}>
          <form action="" className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="number"
                  placeholder="Phone*"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                required
              />
            </div>
            <button className="sub_btn-content submit_btn">submit</button>
          </form>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard3 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - Backend{" "}
          <div className="jobline" onClick={formhide3}></div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc3 = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a backend developer, you
            will oversee the server side of the projects, including databases,
            architectures and APIs, and write algorithms to build scalable
            applications. You will ensure that the applications perform in
            congruity with the front-end aspects of the products.
          </p>
          <div className="job-req">
            Php | Node.js | Python | Java | Ruby On Rails | Golang
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow3}>
            <p className="about_btn_content">
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform3 = el)}>
          <form action="" className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="number"
                  placeholder="Phone*"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                required
              />
            </div>
            <button className="sub_btn-content submit_btn">submit</button>
          </form>
        </div>
      </div>
      <div className="PD" ref={(el) => (positioncard4 = el)}>
        <h1 className="job-pd-title">
          Software Development Engineer - CMS/E-Commerce
          <div className="jobline" onClick={formhide4}></div>
        </h1>
        <p className="job-loc">Bangalore (Remote)</p>
        <p className="job-loc">Experience Band: 3+ Yrs</p>
        <div className="job-description" ref={(el) => (jobdesc4 = el)}>
          <p className="job-pd-desc job-loc">
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a CMS developer, you
            will be a part of a cross-functional team and build high-quality
            websites and e-commerce platforms. You will closely work with
            clients to address their concerns and design websites that resolve
            those.
          </p>
          <div className="job-req">
            WordPress | Shopify | Magento | HubSpot | WooCommerce BigCommerce |
            Drupal | Joomla | Wix | Squarespace Commerce
          </div>
          <p className="apply">Feel like you’re a match?</p>
          <div className="apply_btn" onClick={applyNow4}>
            <p className="about_btn_content">
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform4 = el)}>
          <form action="" className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select>
                <input
                  type="number"
                  placeholder="Phone*"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                required
              />
            </div>
            <button className="sub_btn-content submit_btn">submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
