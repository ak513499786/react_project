import './home.css'

import { Link } from "react-router-dom";

import left_arrow from "./images/Frame 7.png";
import right_arrow from "./images/Frame 8.png";
import image1 from "./images/clients.png";
import image2 from "./images/Frame 75.png";
import image3 from "./images/Frame 76.png";
import image4 from "./images/Frame 77.png";


export default function Home() {
  return (
    <>
      <section id="hero">
        <div id="bgi">
          <video autoplay loop muted></video>
        </div>
        <section id="content">
          <h1 id="header">
            We Are Codelinear-
            <br />
            Propelling The World, By Design.
          </h1>
          <div id="aboutbtn">
            <p className="aboutbtn_content">about us</p>
          </div>
        </section>
      </section>
      <section id="about">
        <div id="rectangle"></div>
        <div id="abtcnt">
          <h1 id="abth1">
            Innovation Is Where We Thrive & Impact is What We Strive For
          </h1>
          <p id="abtdmycnt">
            We are a unique product development firm operating at the
            intersection of human touch, (data-driven analytics)/ design &
            development, and cutting-edge technology.
          </p>
          <div className="allworks">
            <p className="workbtn_content">all works</p>
          </div>
        </div>
        <div id="imgs"></div>
        <div id="imgs1">
          <h1>COWBOY</h1>
          <p id="imgs1p">shopify platform design + development</p>
        </div>
        <div id="img2"></div>
        <div id="imgs2">
          <h1>Studio Proper</h1>
          <p id="imgs2p">shopify platform design + development</p>
        </div>
        <div id="img3"></div>
        <div id="imgs3">
          <h1>WILLAIM ABRAHAM</h1>
          <p id="imgs3p">shopify platform design + development</p>
        </div>
        <div id="img4"></div>
        <div id="imgs4">
          <h1>Headphones SG</h1>
          <p id="imgs4p">bigcommerce platform design + development</p>
        </div>
      </section>
      <section id="service">
        <div className="service_main">
          <div className="service_main-content">
            <h1 id="srvcnt">Our Services</h1>
            <p id="srvp">
              We help our clients define and shape the future. Lead the new
              technology era with our extinsive services
            </p>
            <div id="svcbtn">
              <p className="svcbtn_content">Services</p>
            </div>
          </div>
          <div id="buttons">
            <Link to={"/Services"} className="btnlinks">
              Consulting And Strategy
            </Link>
            <Link to={"/Services"} className="btnlinks">
              User Expirience
            </Link>
            <Link to={"/Services"} className="btnlinks">
              Product Development
            </Link>
            <Link to={"/Services"} className="btnlinks">
              Digital Marketing
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div id="container-2">
          <h1 id="container-2_header">
            We Are Defined By How Our Clients Perceive Us.
          </h1>
          <div id="container">
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
        </div>
        <img src={image1} alt="" id="clients" />
      </section>
      <section id="blog">
        <h1 id="blog_heading">We Pen Down Our Brightest Ideas</h1>
        <div id="blog-icons">
          <div className="blog-icons_div">
            <img src={image2} alt="" className="blog-icons_img" />
            <h2 className="blog-icon_div-h2">Empathy in Ux</h2>
            <p className="blog_para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
          </div>
          <div className="blog-icons_div">
            <img src={image3} alt="" className="blog-icons_img" />
            <h2 className="blog-icon_div-h2">
              Digital Marketing Trends In 2023
            </h2>
            <p className="blog_para">
              Union flatten auto flatten duplicate. Line slice flatten
              duplicate. Line slice
            </p>
          </div>
          <div className="blog-icons_div">
            <img src={image4} alt="" className="blog-icons_img" />
            <h2 className="blog-icon_div-h2">Design System</h2>
            <p className="blog_para">
              Union flatten auto flatten duplicate. Line slice inspect
              horizontal image strikethrough share follower.
            </p>
          </div>
        </div>
        <div className="explore_btn">
          <p className="exp_btn-content">explore more</p>
        </div>
      </section>
    </>
  );
}
