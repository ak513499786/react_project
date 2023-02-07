import "./craft.css";

import atl from "./images/arrowtoleft.png";
import atr from "./images/atr.svg";
import img1 from "./images/Frame 77.png";
import img2 from "./images/Frame 75.png";

export default function Craft() {
  return (
    <>
      <main className="craft-hero">
        <h1 className="craft-hero-h1">
          Crafting Digital Experiences That Propel The People, The Brands And
          The World!!
        </h1>
      </main>
      <section className="UI ta-center">
        <div className="side-content UI-content">
          <div className="sc">
            <div className="side-content-containers UI-cont">
              <h1 className="side-content-h1">User Interface Design</h1>
              <p className="side-content-para color-grey">
                Crust beef mozzarella ham red ranch tomatoes spinach. Mouth
                burnt Chicago steak ricotta sauce burnt pepperoni mouth.
              </p>
            </div>
            <div className="side-content-containers UI-cont">
              <h1 className="side-content-h1">User Experience Design</h1>
              <p className="side-content-para color-grey">
                Crust beef mozzarella ham red ranch tomatoes spinach. Mouth
                burnt Chicago steak ricotta sauce burnt pepperoni mouth.
              </p>
            </div>
          </div>
          <div className="sc">
            <div className="side-content-containers UI-cont">
              <h1 className="side-content-h1">Ux Research</h1>
              <p className="side-content-para color-grey">
                Crust beef mozzarella ham red ranch tomatoes spinach. Mouth
                burnt Chicago steak ricotta sauce burnt pepperoni mouth.
              </p>
            </div>
            <div className="side-content-containers UI-cont">
              <h1 className="side-content-h1">Ux Audit</h1>
              <p className="side-content-para color-grey">
                Crust beef mozzarella ham red ranch tomatoes spinach. Mouth
                burnt Chicago steak ricotta sauce burnt pepperoni mouth.
              </p>
            </div>
          </div>
          <div className="sc">
            <div className="side-content-containers UI-cont">
              <h1 className="side-content-h1">Design Consulting & Strategy</h1>
              <p className="side-content-para color-grey">
                Crust beef mozzarella ham red ranch tomatoes spinach. Mouth
                burnt Chicago steak ricotta sauce burnt pepperoni mouth.
              </p>
            </div>
            <div className="side-content-containers UI-cont">
              <h1 className="side-content-h1">Digital Branding</h1>
              <p className="side-content-para color-grey">
                Crust beef mozzarella ham red ranch tomatoes spinach. Mouth
                burnt Chicago steak ricotta sauce burnt pepperoni mouth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="process">
        <h1 className="process-h1">Our Process</h1>
        <div className="phase1">
          <h1 className="phase-h1">
            <span className="phase-span">01</span> UX Consulting Phase
          </h1>
          <p className="flow">
            Research <img src={atr} className="atr" alt="" />
            Customer Journey Mapping <img src={atr} className="atr" alt="" /> UX
            Workshop
            <img src={atr} className="atr" alt="" /> Tech Stack Definition
            <img src={atr} className="atr" alt="" /> Prototype & Sketching
          </p>
        </div>
        <hr className="insight-hr" />
        <div className="phase2">
          <h1 className="phase-h1">
            <span className="phase-span">02</span> UI Design Phase
          </h1>
          <p className="flow">
            Usability Study
            <img src={atl} className="atr" alt="" />
            Intelligent User Interaction Design
            <img src={atl} className="atr" alt="" /> UI Design
            <img src={atl} className="atr" alt="" /> Content Editing &
            Restructuring
          </p>
        </div>
      </section>
      <section className="insight">
        <h1 className="insight-h1">Insights From Our Ideas</h1>
        <div className="insight-container">
          <div className="insight-mini">
            <img src={img1} alt="" className="insight-img" />
            <h1 className="ins-mini-h1">Design System</h1>
            <p className="ins-mini-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <span className="mini-links">Read More</span>
          </div>
          <div className="insight-mini">
            <img src={img2} alt="" className="insight-img" />
            <h1 className="ins-mini-h1">Empathy In UX</h1>
            <p className="ins-mini-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <span className="mini-links">Read More</span>
          </div>
        </div>
      </section>
      <section className="explore">
        <h1 className="explore-h1">Explore Our Other Services</h1>
        <p className="explore-para">
          Chicago string peppers onions deep pork dolor. Lasagna bacon party
          style spinach bbq steak ham olives pork. Sausage string sautéed white
          meatball crust. Sautéed meatball burnt stuffed roll. Ipsum meatball
          meatball bell garlic lovers.
        </p>
        <div className="ex-link">
          <p className="explore-lnks">Consulting And Strategy</p>
          <p className="explore-lnks color-link">User Experience</p>
          <p className="explore-lnks">Product Development</p>
          <p className="explore-lnks">Digital Marketing</p>
        </div>
      </section>
    </>
  );
}
