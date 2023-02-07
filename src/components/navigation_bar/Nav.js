import './nav.css';

import logo from "./images/logo.svg";
import twitter from "./images/mdi_twitter.svg";
import facebook from "./images/ic_baseline-facebook.svg";
import instagram from "./images/mdi_instagram.svg";
import linkedin from "./images/mdi_linkedin.svg";

import { Link } from "react-router-dom";

var id = null;
function navSlide() {
  var elem = document.getElementById("navigation-slide");   
  var pos = 100;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos === 0) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.bottom = pos + '%';
    }
  }
}

function navSlidesBack() {
  var elem = document.getElementById("navigation-slide");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos === 100) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + '%';
    }
  }
}

function fade() {
  document.getElementById("navigation-slide").style.bottom = "-100%";
}

export default function navigation_bar() {
  return (
    <>
      <header>
        <nav className="navigation_bar">
          <ul className="nav_list">
            <li className="nav_list-item">
              <Link to={"/"} className="nav_logo">
                <img src={logo} alt="" className="logo" />
              </Link>
            </li>
            <li className="nav_list-item" onClick={navSlide}>
              <div className="menu"></div>
            </li>
          </ul>
        </nav>
      </header>
      <section id="navigation-slide">
        <div className="nav-menu" onClick={navSlidesBack}></div>
        <ul className="slide_nav_list">
          <li className="slide_nav_list-item">
            <Link to="/about" className="slide_nav_links" onClick={fade}>
              About
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Services" className="slide_nav_links" onClick={fade}>
              Services
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Work" className="slide_nav_links" onClick={fade}>
              Work
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Career" className="slide_nav_links" onClick={fade}>
              Career
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/Blog" className="slide_nav_links" onClick={fade}>
              Blog
            </Link>
          </li>
          <li className="slide_nav_list-item">
            <Link to="/let's_talk" className="slide_nav_links" onClick={fade}>
              Let's Talk
            </Link>
          </li>
        </ul>
        <div className="details">
          <div className="socials">
            <img src={linkedin} alt="" className="icons" />
            <img src={facebook} alt="" className="icons" />
            <img src={instagram} alt="" className="icons" />
            <img src={twitter} alt="" className="icons" />
          </div>
          <p className="loc">
            12<sup>o</sup> 56' 27.06" N, 77<sup>o</sup> 32 ' 39.228"E
          </p>
          <div className="contact">
            <p className="mail">info@codelinear.com</p>
            <p className="phone">+1 415 523 5957</p>
          </div>
        </div>
      </section>
    </>
  );
}
