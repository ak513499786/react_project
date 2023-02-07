import "./work.css";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import left_arrow from '../Home/images/Frame 7.png';
import right_arrow from '../Home/images/Frame 8.png';

export default function Work() {
  return (
    <>
      <main className="work_hero">
        <div className="container-1">
          <h1 id="work_heading">We're Proud To Show You Our Accomplishments</h1>
          <p className="work_lorem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            soluta voluptatem quae iure dicta la boriosam quod. Ab dolore quidem
            optio doloribus maiores hic, ipsam laudantium! Laudantium vero
            libero fuga
          </p>
        </div>
      </main>
      <section className="work-section">
        <div className="work-container">
          <img src={img1} alt="" className="work-img" />
          <div className="work-div">
          <h1 className="work-section-h1">Aussie Spinach Onions</h1>
          <p className="work-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="work-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <div className="work-btns">Digital Marketing</div>
          </div>
        </div>
        <div className="work-container">
          <div className="work-div">
          <h1 className="work-section-h1">Style Mushrooms Buffalo</h1>
          <p className="work-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="work-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <div className="work-btns">Product Development</div>
          </div>
          <img src={img2} alt="" className="work-img" />
        </div>
        <div className="work-container">
          <img src={img3} alt="" className="work-img" />
          <div className="work-div">
          <h1 className="work-section-h1">Ricotta Bianca Ranch</h1>
          <p className="work-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="work-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <div className="work-btns">Product Development</div>
          </div>
        </div>
        <div id="work-container">
            <h2 id="container_h2">Cj Jenkins</h2>
            <p id="pm">product manager, moveworks</p>
            <p id="nums">1/8</p>
            <div id="arrow">
              <img src={left_arrow} alt="" id="left" />
              <img src={right_arrow} alt="" srcset="" id="right" />
            </div>
            <h3 id="container-h3">
              Codelinear allows businesses to make the best of all things
              digital. Our team of designers, developers, content strategies,
              and creative thinkers work together to enrich your digital
              existence
            </h3>
          </div>
      </section>
    </>
  );
}
