import left_arrow from "./images/Frame 7.png";
import right_arrow from "./images/Frame 8.png";
import Client from "./client";

export default function Hero() {
  return (
    <section id="testimonials">
      <div className="test-main-container">
        <div id="container-2">
          <h1 id="container-2_header">
            We Are Defined By How Our Clients Perceive Us.
          </h1>
          <div id="container">
            <p id="container-h3">
              Codelinear allows businesses to make the best of all things
              digital. Our team of designers, developers, content strategies,
              and creative thinkers work together to enrich your digital
              existence
              <h2 id="container_h2">Cj Jenkins</h2>
              <p id="pm">product manager, moveworks</p>
            </p>
            <div id="arrow">
              <p id="nums">1/8</p>
              <img src={left_arrow} alt="" id="left"  loading="lazy"/>
              <img src={right_arrow} alt="" srcset="" id="right"  loading="lazy"/>
            </div>
          </div>
        </div>
        <Client />
      </div>
    </section>
  );
}
