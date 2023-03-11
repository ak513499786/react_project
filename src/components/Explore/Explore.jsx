import React from "react";
import { Link } from "react-router-dom";
import "./explore.scss";
const Explore = () => {
  return (
    <>
      <div className="lead flex mt-40 justify-center h-full relative  items-center">
        <div className="width w-full flex-col min n h-full  relative">
          <div className="headifn flex justify-start items-start w-full">
            <h1 className="text-7xl w-1/2  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5">
              Explore Our Other Services
            </h1>
          </div>
          {/* <div className=""> */}
          <div className="cards testt mt-44">
            <Link to="/consulting">
              <div className="card1 mx-0 hideee relative">
                <div className="img1 ml-1  ma\  -top-0"></div>
                <div className="opacity-60 absolute max-xl:-mt-60  bottom-10 w-full flex justify-center items-end colo">
                  <p className="name text-2xl max-md:-ml-28 max-xl:-mt-60">
                    Consulting And Stretegy
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/userexperience">
              <div className="card1 mx-0 hideee max-md:w-full max-md:mx-0 relative">
                <div className="img2 max-md:ml- ml-0 top-0"></div>
                <div className="opacity-60 absolute max-xl:-mt-60  bottom-10 w-full flex justify-center items-end colo">
                  <p className="name text-2xl max-md:-ml-28 max-xl:-mt-60">
                  User Experience
                  </p>
                </div>
                {/* <div className="opacity-60 absolute  bottom-10 w-full flex justify-center items-end colo">
                  <p className="name text-2xl">User Experience</p>
                </div> */}
              </div>
            </Link>
            <Link to="/productdev">
              <div className="card1 mx-10 hideee relative">
                <div className="img3 ml-3 max-md:ml-44 -top-0"></div>
                <div className="opacity-60 absolute  bottom-10 w-full flex justify-center items-end colo">
                  <p className="name text-2xl max-md:ml-72 max-md:mt-16">
                    Produt Development
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/productdev">
              <div className="card1 mx-10 hideee relative">
                <div className="img4 ml-3 max-md:ml-72 -top-0"></div>
                <div className="opacity-60 absolute  bottom-10 w-full flex justify-center items-end colo">
                  <p className="name text-2xl max-md:ml-80 max-md:mt-16">
                    Digital Marketing
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* </div>   */}
      </div>
    </>
  );
};

export default Explore;
