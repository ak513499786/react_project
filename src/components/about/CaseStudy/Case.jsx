import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import React, { useState, useEffect, useRef } from "react";
import { gsap, TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
import "./case.scss";
import BlogHome from "../../home/BlogHome";

const Case = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [Widht, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const swiperRef = useRef(null);

  return (
    <>
      <div className="circle flex mt-60 justify-center h-full relative  items-center">
        <div className="width max-w-[1340px] w-full flex-col h-full items-center flex justify-center relative">
          <div className="tal items-center flex justify-center flex-col h-full pb-20">
            <h1 className="text-7xl text-center font-bold max-md:text-5xl max-md:p-10">
              Take A Peek At Our <br /> Case Study
            </h1>
            <p
              className="down text-center mt-8 max-md:p-10"
              style={{
                color: "#848484",
              }}
            >
              We handle all our projects with the utmost discretion. Through our
              case studies take a look at how we drive growth for our clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Case;