// import empathy from "../blog/Images/Frame 43.svg";
import cheese from "./images/Ellipse 19.png";

export default function Empathyhero(){
    return(
        <section className="empathy-hero">
        <div className="empathy-container">
          <div className="empathy-inner-content">
            <p className="date">31st May 2023</p>
            <h1 className="empathy-hero-h1">Empathy In UX</h1>
          </div>
          <div className="cheese">
            <img src={cheese} alt="" className="cheese-img" />
            <p className="cheese-para">cheese</p>
          </div>
        </div>
        {/* <img src={empathy} alt="" className="empathy" /> */}
      </section>
    );
}