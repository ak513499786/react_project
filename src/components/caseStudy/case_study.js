import "./case.css";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.png";
import web from "./Images/web.svg";
import graph from "./Images/graph.png";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import AnimatedCursor from "react-animated-cursor";

export default function Case() {
  return (
    <>
    <Navbar/>
      <main className="case-hero">
    {/* <AnimatedCursor color="255, 255, 255"/> */}
        <section className="case-hero-container">
        <h1 className="case-hero-h1">
          Roll Ranch Steak Ipsum Onions Personal Sauteed.
        </h1>
        <p className="case-hero-para">
          Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
          turpis enim nibh sed ornare porta convallis. Dignissim faucibus
          integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
          enim vitae et ipsum.
        </p>
        </section>
      </main>
      <section className="aussie">
        <img src={img1} alt="" className="case-img" />
        <div className="case-div">
          <h1 className="case-section-h1">Aussie Spinach Onions</h1>
          <p className="case-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a
            bibendum turpis enim nibh sed ornare porta convallis. Dignissim
            faucibus integer non aliquam sit. Tellus ullamcorper id morbi donec
            volutpat enim vitae et ipsum.
          </p>
          <p className="case-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <p className="case-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="case-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <div className="case-btns">Digital Marketing</div>
        </div>
      </section>
      <section className="synopsis">
        <div className="syn-content">
          <h1 className="syn-h1">Project Synopsis</h1>
          <p className="syn-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="syn-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
        </div>
        <img src={web} alt="" className="web" />
      </section>
      <section className="sp">
        <h1 className="sp-h1">Services Provided</h1>
        <div className="sp-btns">
          <div className="sp-btn">Consulting And Strategy</div>
          <div className="sp-btn">User Experience</div>
          <div className="sp-btn">Product Development</div>
        </div>
      </section>
      <section className="timeline">
        <h1 className="timeline-h1">Timeline</h1>
        <p className="timeline-para">
          Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
          turpis enim nibh sed ornare porta convallis. Dignissim faucibus
          integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
          enim vitae et ipsum.
        </p>
        <img src={graph} alt="" className="graph" />
      </section>
      <section className="browse">
        <h1 className="browse-h1">
          Browse Through Other Business That We Have Impacted
        </h1>
        <div className="browse-container">
          <div className="browse-mini">
            <img src={img1} alt="" className="browse-img" />
            <h1 className="img-detail-h1">COWBOY</h1>
            <p className="img-details">shopify platform design + development</p>
          </div>
          <div className="browse-mini">
            <img src={img2} alt="" className="browse-img" />
            <h1 className="img-detail-h1">WILLAIM ABRAHAM</h1>
            <p className="img-details">shopify platform design + development</p>
          </div>
          <div className="browse-mini">
            <img src={img3} alt="" className="browse-img" />
            <h1 className="img-detail-h1">Studio Proper</h1>
            <p className="img-details">shopify platform design + development</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
