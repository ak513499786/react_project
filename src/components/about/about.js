import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Circles from "./circlesanimation";
import Abouthero from "./abouthero";
import Crew from "./crew";

import "./about.css";
import Vision from "./vision/Vision";
import Casestudy from './CaseStudy/Case'

export default function about() {
  return (
    <>
      <Navbar />
      <iframe
        src="https://my.spline.design/untitled-7e4e7fbe3d7aaedc118f34cadd85536b/"
        frameborder="0"
        width="100%"
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
