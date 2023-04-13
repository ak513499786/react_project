import empathy from "../../Blog/Images/Frame 47.svg";
import cheese from "./images/Ellipse 19.png";

export default function Trendhero() {
  return (
    <section className="empathy-hero">
      <div className="empathy-container">
        <div className="empathy-inner-content">
          <p className="date">23rd Feb 2023</p>
          <h1 className="empathy-hero-h1">Digital Marketing</h1>
        </div>
        {/* <div className="cheese">
          <img src={cheese} alt="" className="cheese-img" loading="lazy"/>
          <p className="cheese-para">cheese</p>
        </div> */}
      </div>
      <img src={empathy} alt="" className="empathy" />
    </section>
  );
}
