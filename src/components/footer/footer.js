import "./footer.css";
import { Link } from "react-router-dom";

import arrow from "./images/Group 1000002377.svg";
import LowerFooter  from "./lowerFooter";

export default function Footer() {
  return (
    <footer id="footer">
      <section className="main-footer">
        <p id="ftrcnt">
          Wanna Know A Secret?
          <div className="arrow">
            <img src={arrow} alt="" srcset="" className="arrow" />
          </div>
        </p>
        <Link to="/let's_talk" className="link">
          <h1 id="ftrh1">Let's Talk</h1>
        </Link>
        <LowerFooter/>
      </section>
    </footer>
  );
}
