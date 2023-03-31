import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Circles from "./circlesanimation";
import Abouthero from "./abouthero";
import Crew from "./crew";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import "./about.css";
import Vision from "./vision/Vision";
import Casestudy from "./CaseStudy/Case";
import BlogHome from "../home/BlogHome";

export default function About() {
  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <main className="aboutpage" ref={(el) => (fade = el)}>
      <Navbar />
      <div className="iframe-container">
        <iframe
          className="iframe"
          src="https://my.spline.design/untitled-7e4e7fbe3d7aaedc118f34cadd85536b/"
          frameborder="0"
          width="100%"
          title="j"
          height="100%"
          style={{
            position: "absolute",
          }}
        ></iframe>
      </div>
      <Abouthero />
      <Circles />
      <Vision />
      <Crew />
      <div className="about-case">
        {/* <Casestudy /> */}
        <BlogHome/>
      </div>
      <Footer />
    </main>
  );
}
