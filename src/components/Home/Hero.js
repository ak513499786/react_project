import bgvideo from "./images/revised.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Hero() {
  const [array, setarray] = useState();
  const [content, setContent] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:5000/code/").then((response) => {
  //     setarray(response.data.homeHero);
  //     // console.log(response.data);
  //   });
  // }, []);
  return (
    <>
      <section id="hero">
        <div className="bgi">
          <video
            className="bgv"
            src={bgvideo}
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
          ></video>
        </div>
        <section id="content">
          <h1 id="header">Propeling The World By Design</h1>
          <Link to={"/about"} id="aboutbtn">
            <p className="aboutbtn_content">about us</p>
          </Link>
        </section>
      </section>
    </>
  );
}
