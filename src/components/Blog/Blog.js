import "./Blog.css";

import image1 from "../Home/images/Frame 75.png";
import image2 from "../Home/images/Frame 76.png";
import image3 from "./Images/Frame 34.png";
import image4 from "../Home/images/Frame 77.png";
import image5 from "./Images/Frame 73.png";
import image6 from "./Images/Frame 39.png";
import left_arrow from "./Images/Frame 7.png";
import right_arrow from "./Images/Frame 8.png";

import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <main className="blog-hero">
        <h1 className="blog-hero-h1">We Got Plenty Of Ideas</h1>
      </main>
      <section className="blog-content">
        <div className="blog-btns">
          <p className="blog-btn-content">UX</p>
          <p className="blog-btn-content">
            <Link to={'/craft'} className="blog-link">
              No Code
            </Link>
          </p>
          <p className="blog-btn-content">Tomato Chilli</p>
          <p className="blog-btn-content">Rice Ricotta</p>
        </div>
        <aside className="blogcol">
          <div className="blog-containers">
            <Link to={'/empathy'}>
            <img src={image1} alt="" className="blog-imgs" />
            </Link>
            <h1 className="blog-heading">Empathy In UX</h1>
            <p className="blog-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image2} alt="" className="blog-imgs" />
            <h1 className="blog-heading">Digital Marketing Trends 2023</h1>
            <p className="blog-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <p className="blog-btns">Read More</p>
          </div>
        </aside>
        <aside className="blogcol">
          <div className="blog-containers">
            <img src={image3} alt="" className="blog-imgs" />
            <h1 className="blog-heading">Minimum Viable Product</h1>
            <p className="blog-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image4} alt="" className="blog-imgs" />
            <h1 className="blog-heading">Design System</h1>
            <p className="blog-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <p className="blog-btns">Read More</p>
          </div>
        </aside>
        <aside className="blogcol">
          <div className="blog-containers">
            <img src={image5} alt="" className="blog-imgs" />
            <h1 className="blog-heading">No Code Revolution</h1>
            <p className="blog-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image6} alt="" className="blog-imgs" />
            <h1 className="blog-heading">Spotify Vs MAgento</h1>
            <p className="blog-para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
            <p className="blog-btns">Read More</p>
          </div>
        </aside>
        <div className="arrow">
          <img src={left_arrow} alt="" id="left-arrow" />
          <p id="num">1/5</p>
          <img src={right_arrow} alt="" srcset="" id="right-arrow" />
        </div>
      </section>
    </>
  );
}
