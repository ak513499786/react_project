import './footer.css';
import { Link } from 'react-router-dom';

import arrow from './images/Group 1000002377.svg';
import twitter from '../navigation_bar/images/mdi_twitter.svg';
import facebook from '../navigation_bar/images/ic_baseline-facebook.svg';
import instagram from '../navigation_bar/images/mdi_instagram.svg';
import linkedin from '../navigation_bar/images/mdi_linkedin.svg'

export default function Footer() {
    return (
      <footer id="footer">
        <p id="ftrcnt">
          Wanna Know A Secret?
          <div className="arrow">
            <img src={arrow} alt="" srcset="" className="arrow" />
          </div>
        </p>
        <Link to="/let's_talk" className='link'><h1 id="ftrh1">Let's Talk</h1></Link>
        <section id="lower-footer">
          <div className="column">
            <p>about</p>
            <p>Services</p>
            <p>work</p>
          </div>
          <div className="column">
            <p>career</p>
            <p>blog</p>
            <p>Let's Talk</p>
          </div>
          <div id="contact">
            <p>info@codelinear.com</p>
            <p>+1 415 523 5957</p>
          </div>
          <div id="socials">
            <img src={linkedin} alt="" srcset="" className="icon" />
            <img src={facebook} alt="" srcset="" className="icon" />
            <img src={instagram} alt="" srcset="" className="icon" />
            <img src={twitter} alt="" srcset="" className="icon" />
          </div>
        </section>
      </footer>
    );
}