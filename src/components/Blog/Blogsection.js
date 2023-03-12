import image1 from "./Images/Frame 43.svg";
import image2 from "./Images/Frame 44.svg";
import image3 from "./Images/Frame 46.svg";
import image4 from "./Images/Frame 472.svg";
import image5 from "./Images/Frame 45.svg";
import image6 from "./Images/Frame 47.svg";
import left_arrow from "./Images/Frame 7.png";
import right_arrow from "./Images/Frame 8.png";

import { Link } from "react-router-dom";

export default function Blogsection() {
  return (
    <section>
      <aside className="blogcol">
        <div className="blog-container">
          <div className="blog-containers">
            <Link to={"/empathy"} className="link-imgs">
              <img src={image1} alt="" className="blog-imgs" />
            </Link>
            <div className="blog-container-content">
              <h1 className="blog-heading">Empathy In UX</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image2} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">Digital Marketing Trends 2023</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <Link to={"/empathy"} className="link-imgs">
              <img src={image1} alt="" className="blog-imgs" />
            </Link>
            <div className="blog-container-content">
              <h1 className="blog-heading">Empathy In UX</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
        </div>
      </aside>
      <aside className="blogcol">
        <div className="blog-container">
          <div className="blog-containers">
            <img src={image3} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">Minimum Viable Product</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image4} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">Design System</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image3} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">Minimum Viable Product</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
        </div>
      </aside>
      <aside className="blogcol">
        <div className="blog-container">
          <div className="blog-containers">
            <img src={image5} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">No Code Revolution</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image6} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">Spotify Vs Magento</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
          <div className="blog-containers">
            <img src={image5} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1 className="blog-heading">No Code Revolution</h1>
              <p className="blog-para">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
            <p className="blog-btns">Read More</p>
          </div>
        </div>
      </aside>
      <div className="arrow-left-right">
        <img src={left_arrow} alt="" id="left-arr" />
        <p id="no1by5">1/5</p>
        <img src={right_arrow} alt="" srcset="" id="right-arr" />
      </div>
    </section>
  );
}
