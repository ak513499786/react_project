import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Circles from "./circlesanimation";
import Abouthero from "./abouthero";
import Crew from "./crew";
import AnimatedCursor from "react-animated-cursor";


import "./about.css";
import Vision from "./vision/Vision";
import Casestudy from './CaseStudy/Case'

export default function about() {
  return (
    <>
      {/* <AnimatedCursor color="255, 255, 255"/> */}

      <Navbar />
      <iframe
        src="https://my.spline.design/untitled-7e4e7fbe3d7aaedc118f34cadd85536b/"
        frameborder="0"
        width="100%"
        title="j"
        height="100%"
        style={{
          position: "absolute",
        }}
      ></iframe>
      <Abouthero />
      <Circles />
      <Vision />
      <Crew />
      <Casestudy/>
      <Footer />
    </>
  );
}
