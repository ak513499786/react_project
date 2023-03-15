import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./card.scss";

const Card = () => {
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
      {!explore ? (
        <div className="worksection">
          <div className="test">
            <div className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 ">
              <h1 className="text-5xl mt-24 wcw">COWBOY</h1>
              <p className="colo my-10 mt-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                iusto deleniti, rem atque laborum tempore, reprehenderit minima
                enim mollitia quae pariatur ipsum ipsa esse nostrum fugit. Modi
                minima error tempore.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                iusto deleniti, rem atque laborum tempore, reprehenderit minima
                enim mollitia quae pariatur ipsum ipsa esse nostrum fugit. Modi
                minima error tempore.
              </p>
              <div className=" mt-5 max-lg:ml-0 ">
                <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                  View case study
                </button>
              </div>
            </div>
            <div className="Willium hidee max-md:mx-0 mx-10 flex flex-col justify-center   p-10">
              <h1 className="text-5xl mt-24 wcw">William Abraham</h1>
              <p className="colo my-10 mt-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                iusto deleniti, rem atque laborum tempore, reprehenderit minima
                enim mollitia quae pariatur ipsum ipsa esse nostrum fugit. Modi
                minima error tempore.
              </p>
              <div className=" mt-5 max-lg:ml-0 ">
                <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                  View case study
                </button>
              </div>
            </div>

            <div className="Lyra hidee max-md:mx-0 mx-10 mr-12 flex flex-col justify-center   p-10">
              <h1 className="text-5xl mt-24 wcw">Lyra Health</h1>
              <p className="colo my-10 mt-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                iusto deleniti, rem atque laborum tempore, reprehenderit minima
                enim mollitia quae pariatur ipsum ipsa esse nostrum fugit. Modi
                minima error tempore.
              </p>
              <div className=" mt-5 max-lg:ml-0 ">
                <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                  View case study
                </button>
              </div>
            </div>
            <div className="klub hidee max-md:mx-0 mx-10 flex flex-col justify-center   p-10">
              <h1 className="text-5xl mt-24 wcw">klub</h1>
              <p className="colo my-10 mt-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                iusto deleniti, rem atque laborum tempore, reprehenderit minima
                enim mollitia quae pariatur ipsum ipsa esse nostrum fugit. Modi
                minima error tempore.
              </p>
              <div className=" mt-5 max-lg:ml-0 ">
                <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                  View case study
                </button>
              </div>
            </div>

            <button className="my-24 -20" onClick={toggleCase}>
              <div className="exploree hidee max-md:mx-0 flex items-center justify-center">
                <div className="flex w-full justify-center items-center h-full">
                  <h1 className="text-4xl font-extrabold ">explore More</h1>
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="workunfolds mb-20">
          <div className="lead flex flex-wrap justify-center h-full relative  items-center">
            <div className="widthhh flex-wrap w-full max-lg:-mt-72 flex min-h-screen h-full itemter ml20 max-xlml-48 max-md:p-10  justify-center items-center relative">
              <div className="card111 hidee max-xl:mx-0  my-10 mx-10 flex flex-col justify-center max-xl:my-10   p-10">
                <h1 className="text-5xl -mt24 wcw">COWBOY</h1>
                <p className="colo my-10 mt-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>
              <div className="MANGO hidee max-xl:mx-0   mx-10 flex flex-col justify-center max-xl:my-10   p-10">
                <h1 className="text-5xl -mt24 wcw">MANGO</h1>
                <p className="colo my-10 mt-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>
              <div className="klub hidee max-xl:mx-0 my-12  mx-10 flex flex-col justify-center max-md:my-10   p-10">
                <h1 className="text-5xl -mt24 wcw">klub</h1>
                <p className="colo my-10 mt-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>
              <div className="Lyra hidee max-xl:mx-0 my-10  mx-10 flex flex-col justify-center max-md:my-10   p-10">
                <h1 className="text-5xl -mt24 wcw">Lyra Health</h1>
                <p className="colo my-10 mt-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>
              <div className="studio hidee max-xl:mx-0   mx-1 flex flex-col justify-center max-xl:my-10   p-10">
                <h1 className="text-5xl -mt24 wcw">Studio Neat</h1>
                <p className="colo my-10 mt-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>
              <div className="deel hidee max-xl:mx-0   ml40 flex flex-col justify-center max-xl:my-10   p-10">
                <h1 className="text-5xl -mt24 wcw">Deel</h1>
                <p className="colo my-10 mt-20">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
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
  );
};

export default Card;
