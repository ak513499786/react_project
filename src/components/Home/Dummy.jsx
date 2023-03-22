import React, { useRef } from "react";
import HorizontalScroll from "react-scroll-horizontal";

function Dummy() {
  const containerRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    const container = containerRef.current;
    container.scrollTo({
      left:
        container.scrollLeft +
        Math.abs(event.deltaY) * (event.deltaY > 0 ? 1 : -1),
      behavior: "smooth",
    });
  };
  const child = { width: `30em`, height: `50em` };
  const parent = { width: `100em`, height: `50em  ` };

  return (
    <>
      <div style={parent}>
        <HorizontalScroll reverseScroll={1}>
          <div
            // style={child}
            className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 "
          >
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
          <div
            // style={child}
            className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 "
          >
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
          <div
            // style={child}
            className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 "
          >
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
          <div
            // style={child}
            className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 "
          >
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
          <div
            // style={child}
            className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 "
          >
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
          <div
            // style={child}
            className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 "
          >
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
          {/* <div style={child} />
          <div style={child} /> */}
        </HorizontalScroll>
      </div>
      {/* <HorizontalScroll>
        <div className="flex">
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
        </div>
      </HorizontalScroll> */}
    </>
  );
}

export default Dummy;
