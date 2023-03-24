import "./case.css";
import React, { useRef, useState, useEffect } from "react";

import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.png";
import web from "./Images/web.svg";
import graph from "./Images/graph.png";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import { Link } from "react-router-dom";

export default function Case() {
  const [Widht, setWidth] = useState(window.innerWidth);
  const [explore, setExplore] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  const toggleCase = () => {
    if (!explore) {
      setExplore(true);
    } else {
      setExplore(false);
    }
  };
  return (
    <>
      <Navbar />
      <main className="case-hero">
        <section className="case-hero-container">
          <h1 className="case-hero-h1">
            Roll Ranch Steak Ipsum Onions Personal Sauteed.
          </h1>
          <p className="case-hero-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
        </section>
      </main>

      <section className="aussie">
        <img src={img1} alt="" className="case-img"  loading="lazy"/>
        <div className="case-div">
          <h1 className="case-section-h1">Aussie Spinach Onions</h1>
          <p className="case-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="case-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <p className="case-section-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="case-section-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
          <div className="case-btns">Digital Marketing</div>
        </div>
      </section>
      <section className="synopsis">
        <div className="syn-content">
          <h1 className="syn-h1">Project Synopsis</h1>
          <p className="syn-para">
            Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
            turpis enim nibh sed ornare porta convallis. Dignissim faucibus
            integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
            enim vitae et ipsum.
          </p>
          <p className="syn-para">
            Bianca lot pesto crust lasagna parmesan bell bell. Red fresh buffalo
            wing Hawaiian party.
          </p>
        </div>
        <img src={web} alt="" className="web"  loading="lazy"/>
      </section>
      <section className="sp">
        <h1 className="sp-h1">Services Provided</h1>
        <div className="sp-btns">
          <Link to={"/consultingandstrategy"} className="sp-btn">
            Consulting And Strategy
          </Link>
          <Link to={"/userexperience"} className="sp-btn">
            User Experience
          </Link>
          <Link to={"/productdevelopment"} className="sp-btn">
            Product Development
          </Link>
        </div>
      </section>
      <section className="timeline">
        <h1 className="timeline-h1">Timeline</h1>
        <p className="timeline-para">
          Lorem porta amet at tempus malesuada hac massa at. Lacus a bibendum
          turpis enim nibh sed ornare porta convallis. Dignissim faucibus
          integer non aliquam sit. Tellus ullamcorper id morbi donec volutpat
          enim vitae et ipsum.
        </p>
        <img src={graph} alt="" className="graph"  loading="lazy"/>
      </section>

      {Widht > 768 ? (
        <section className="browse">
          <h1 className="browse-h1">
            Browse Through Other Business That We Have Impacted
          </h1>
          <div className="browse-container">
            <div className="browse-mini">
              <img src={img1} alt="" className="browse-img"  loading="lazy"/>
              <h1 className="img-detail-h1">COWBOY</h1>
              <p className="img-details">
                shopify platform design + development
              </p>
            </div>
            <div className="browse-mini">
              <img src={img2} alt="" className="browse-img"  loading="lazy"/>
              <h1 className="img-detail-h1">WILLAIM ABRAHAM</h1>
              <p className="img-details">
                shopify platform design + development
              </p>
            </div>
            <div className="browse-mini">
              <img src={img3} alt="" className="browse-img"  loading="lazy"/>
              <h1 className="img-detail-h1">Studio Proper</h1>
              <p className="img-details">
                shopify platform design + development
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {!explore ? (
            <div className="worksection mt-72 max-sm:mt-80">
              <div className="test">
                <div className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 ">
                  <h1 className="text-5xl mt-24 wcw">COWBOY</h1>
                  <p className="colo my-10 mt-20">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero iusto deleniti, rem atque laborum tempore,
                    reprehenderit minima enim mollitia quae pariatur ipsum ipsa
                    esse nostrum fugit. Modi minima error tempore.
                  </p>
                  <div className=" mt-5 max-lg:ml-0 ">
                    <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                      View case study
                    </button>
                  </div>
                </div>
                <div className="MANGO hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10">
                  <h1 className="text-5xl mt-24 wcw">MANGO</h1>
                  <p className="colo my-10 mt-20">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero iusto deleniti, rem atque laborum tempore,
                    reprehenderit minima enim mollitia quae pariatur ipsum ipsa
                    esse nostrum fugit. Modi minima error tempore.
                  </p>
                  <div className=" mt-5 max-lg:ml-0 ">
                    <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                      View case study
                    </button>
                  </div>
                </div>

                <button
                  className="my-24 hover:text-black -20"
                  onClick={toggleCase}
                >
                  <div className="exploree hidee hover:text-black max-md:mx-0 flex items-center justify-center">
                    <div className="flex w-full justify-center hover:text-black items-center h-full">
                      <h1 className="text-4xl extra  hover:text-black font-extrabold ">
                        Explore More
                      </h1>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="workunfolds mt-72  mb-20">
              <div className="lead flex flex-wrap justify-center h-full relative  items-center">
                <div className="widthhh flex-wrap w-full max-lg:-mt-72 flex min-h-screen h-full itemter ml20 max-xlml-48 max-md:p-10  max-sm:p-1   justify-start items-start relative">
                  <div className="card111 hidee max-xl:mx-0  my-10 mx-10 flex flex-col justify-center max-xl:my-10   p-10">
                    <h1 className="text-5xl -mt24 wcw">COWBOY</h1>
                    <p className="colo my-10 mt-20">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vero iusto deleniti, rem atque laborum tempore,
                      reprehenderit minima enim mollitia quae pariatur ipsum
                      ipsa esse nostrum fugit. Modi minima error tempore.
                    </p>
                    <div className=" mt-5 max-lg:ml-0 ">
                      <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                        View case study
                      </button>
                    </div>
                  </div>
                  <div className="MANGO hidee max-xl:mx-0  my-10 mx-10 flex flex-col justify-center max-xl:my-10   p-10">
                    <h1 className="text-5xl -mt24 wcw">MANGO</h1>
                    <p className="colo my-10 mt-20">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vero iusto deleniti, rem atque laborum tempore,
                      reprehenderit minima enim mollitia quae pariatur ipsum
                      ipsa esse nostrum fugit. Modi minima error tempore.
                    </p>
                    <div className=" mt-5 max-lg:ml-0 ">
                      <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                        View case study
                      </button>
                    </div>
                  </div>
                  <div className="Willium hidee max-xl:mx-0 my-10   mx-10 flex flex-col justify-center max-xl:my-10   p-10">
                    <h1 className="text-5xl -mt24 wcw">Willium Abraham</h1>
                    <p className="colo my-10 mt-20">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vero iusto deleniti, rem atque laborum tempore,
                      reprehenderit minima enim mollitia quae pariatur ipsum
                      ipsa esse nostrum fugit. Modi minima error tempore.
                    </p>
                    <div className=" mt-5 max-lg:ml-0 ">
                      <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                        View case study
                      </button>
                    </div>
                  </div>
                  <div className="Kernel hidee max-xl:mx-0  my-10 mx-10 flex flex-col justify-center max-xl:my-10   p-10">
                    <h1 className="text-5xl -mt24 wcw">Kernel Wealth</h1>
                    <p className="colo my-10 mt-20">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Vero iusto deleniti, rem atque laborum tempore,
                      reprehenderit minima enim mollitia quae pariatur ipsum
                      ipsa esse nostrum fugit. Modi minima error tempore.
                    </p>
                    <div className=" mt-5 max-lg:ml-0 ">
                      <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                        View case study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <Footer />
    </>
  );
}
