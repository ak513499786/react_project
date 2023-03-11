import { useLocation } from "react-router-dom";
import codelinear from "../footer/images/Vector.svg";

export default function Codelinear() {
  const url = useLocation();

  if (url.pathname === "/") {
    return (
      <div className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to impact</span>
      </div>
    );
  } else if (url.pathname === "/about") {
    return (
      <div className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to innovation</span>
      </div>
    );
  } else if (url.pathname === "/case_study" || url.pathname === "/work") {
    return (
      <div className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to perfection</span>
      </div>
    );
  } else if (
    url.pathname === "/services" ||
    url.pathname === "/consultingandstrategy" ||
    url.pathname === "/userexperience" ||
    url.pathname === "/productdevelopment" ||
    url.pathname === "/digitalmarketing" ||
    url.pathname === "/career"
  ) {
    return (
      <div className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to pioneers</span>
      </div>
    );
  } else if (url.pathname === "/blog" || url.pathname === "/empathy") {
    return (
      <div className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to ideas</span>
      </div>
    );
  } else if (url.pathname === "/let's_talk") {
    return (
      <div className="footer-animation">
        <img src={codelinear} alt="" className="codelinear" />
        <span className="footer-animationtxt"> to passion</span>
      </div>
    );
  }
}
