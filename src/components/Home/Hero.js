import bgvideo from "./images/revised.mp4";
import { Link } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

export default function Hero() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="225, 225, 225"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={0.2}
      />

      <section id="hero">
        <div className="bgi">
          <video className="bgv" src={bgvideo} autoPlay loop muted></video>
        </div>
        <section id="content">
          <h1 id="header">Propelling The World, By Design.</h1>
          <Link to={"/about"} id="aboutbtn">
            <p className="aboutbtn_content">about us</p>
          </Link>
        </section>
      </section>
    </>
  );
}
