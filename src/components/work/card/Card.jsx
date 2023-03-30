import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import HorizontalScroll from "react-horizontal-scrolling";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
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
        <>
          {Widht > 768 ? (
            <div className="worksection">
              <div className="test">
                <div className="card111 hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10 ">
                  <h1
                    className="text-5xl mt-24 wcw"
                    style={{
                      fontFamily: "graphikthin",
                      color: "#d8d6d6",
                      fontWeight: "600",
                    }}
                  >
                    COWBOY
                  </h1>
                  <p
                    className="colo my-10 mt-20"
                    style={{
                      fontFamily: "graphik",
                      color: "#848484",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero iusto deleniti, rem atque laborum tempore,
                    reprehenderit minima enim mollitia quae pariatur ipsum ipsa
                    esse nostrum fugit. Modi minima error tempore.
                  </p>
                  <div className=" mt-5 max-lg:ml-0 ">
                    <button className="btn max-sm:text-sm about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                      View case study
                    </button>
                  </div>
                </div>

                <div className="MANGO hidee max-md:mx-0 mx-10 flex flex-col justify-cnter   p-10">
                  <h1
                    className="text-5xl mt-24 wcw"
                    style={{
                      fontFamily: "graphikthin",
                      color: "#d8d6d6",
                      fontWeight: "600",
                    }}
                  >
                    MANGO
                  </h1>
                  <p
                    className="colo my-10 mt-20"
                    style={{
                      fontFamily: "graphik",
                      color: "#848484",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero iusto deleniti, rem atque laborum tempore,
                    reprehenderit minima enim mollitia quae pariatur ipsum ipsa
                    esse nostrum fugit. Modi minima error tempore.
                  </p>
                  <div className=" mt-5 max-lg:ml-0 ">
                    <button className="btn max-sm:text-sm about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                      View case study
                    </button>
                  </div>
                </div>

                <div className="Willium hidee max-md:mx-0 mx-10 flex flex-col justify-center   p-10">
                  <h1
                    className="text-5xl mt-24 wcw"
                    style={{
                      fontFamily: "graphikthin",
                      color: "#d8d6d6",
                      fontWeight: "600",
                    }}
                  >
                    William Abraham
                  </h1>
                  <p
                    className="colo my-10 mt-20"
                    style={{
                      fontFamily: "graphik",
                      color: "#848484",
                    }}
                  >
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

                <div className="Lyra hidee max-md:mx-0 mx-10 mr-12 flex flex-col justify-center   p-10">
                  <h1
                    className="text-5xl mt-24 wcw"
                    style={{
                      fontFamily: "graphikthin",
                      color: "#d8d6d6",
                      fontWeight: "600",
                    }}
                  >
                    Lyra Health
                  </h1>
                  <p
                    className="colo my-10 mt-20"
                    style={{
                      fontFamily: "graphik",
                      color: "#848484",
                    }}
                  >
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

                <div className="klub hidee max-md:mx-0 mx-10 flex flex-col justify-center   p-10">
                  <h1
                    className="text-5xl mt-24 wcw"
                    style={{
                      fontFamily: "graphikthin",
                      color: "#d8d6d6",
                      fontWeight: "600",
                    }}
                  >
                    Klub
                  </h1>
                  <p
                    className="colo my-10 mt-20"
                    style={{
                      fontFamily: "graphik",
                      color: "#848484",
                    }}
                  >
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
                  className="my-36 hover:text-black -20 "
                  onClick={toggleCase}
                >
                  <div className="exploree card111 hidee max-md:mx-0 mx-10 ml-10 flex flex-col justify-cnter   p-10">
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
            <div className="worksection">
              <div className="tst">
                <Swiper
                  slidesPerView={3}
                  slidesPerGroupSkip={1}
                  spaceBetween={10}
                  // loop={true}
                  freeMode={true}
                  // breakpoints
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      containerClass: "half-image-container",
                    },
                    435: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    90: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1060: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper h  mt-0 max-md:mt-0  w-[100%] -ml-20 max-lg:ml-0 max-xl:w-[100%]"
                >
                  <SwiperSlide className="mr-0 flex justify-center items-center">
                    <div className="card111 hiee max-md:mx-4 mx-10 flex flex-col justify-cnter px-5 py-10">
                      <h1
                        className="text-5xl mt-24 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        COWBOY
                      </h1>
                      <p
                        className="colo my-10 mt-20"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero iusto deleniti, rem atque laborum tempore,
                        reprehenderit minima enim mollitia quae pariatur ipsum
                        ipsa esse nostrum fugit. Modi minima error tempore.
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn  max-sm:text-[0.7rem] about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="MANGO hiee max-md:mx-4 mx-10 flex flex-col justify-cnter px-5 py-10">
                      <h1
                        className="text-5xl mt-24 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        MANGO
                      </h1>
                      <p
                        className="colo my-10 mt-20"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero iusto deleniti, rem atque laborum tempore,
                        reprehenderit minima enim mollitia quae pariatur ipsum
                        ipsa esse nostrum fugit. Modi minima error tempore.
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem] about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="Willium hiee max-md:mx-4 mx-10 flex flex-col justify-center px-5 py-10">
                      <h1
                        className="text-5xl mt-24 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        William Abraham
                      </h1>
                      <p
                        className="colo my-10 mt-20"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero iusto deleniti, rem atque laborum tempore,
                        reprehenderit minima enim mollitia quae pariatur ipsum
                        ipsa esse nostrum fugit. Modi minima error tempore.
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="Lyra hiee max-md:mx-4 mx-10 mr-12 flex flex-col justify-center px-5 py-10">
                      <h1
                        className="text-5xl mt-24 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Lyra Health
                      </h1>
                      <p
                        className="colo my-10 mt-20"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero iusto deleniti, rem atque laborum tempore,
                        reprehenderit minima enim mollitia quae pariatur ipsum
                        ipsa esse nostrum fugit. Modi minima error tempore.
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="klub hiee max-md:mx-4 mx-10 flex flex-col justify-center   px-5 py-10">
                      <h1
                        className="text-5xl mt-24 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Klub
                      </h1>
                      <p
                        className="colo my-10 mt-20"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                        }}
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero iusto deleniti, rem atque laborum tempore,
                        reprehenderit minima enim mollitia quae pariatur ipsum
                        ipsa esse nostrum fugit. Modi minima error tempore.
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <button
                      className=" hover:text-black h-full"
                      onClick={toggleCase}
                    >
                      <div className="exploree hidee h-full max-lg:h-[600px] max-lg:w-[300px] hover:text-black max-md:mx-0 flex items-center justify-center">
                        <div className="flex w-full justify-center hover:text-black items-center h-full">
                          <h1 className="text-4xl extra  hover:text-black font-extrabold ">
                            Explore More
                          </h1>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="workunfolds mb-20">
          <div className="lead flex flex-wrap justify-center h-full relative  items-center">
            <div className="widthhh flex-wrap w-full max-lg:-mt-72 flex min-h-screen h-full itemter ml20 max-xlml-48 max-md:p-10 max-sm:p-1  justify-start items-start max-xl:items-center max-xl:justify-center relative">
              <div className="card111 hidee max-xl:mx-5  my-10 mx-10 flex flex-col justify-center max-xl:my-10   px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  COWBOY
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="MANGO hidee max-xl:mx-5  my-10 mx-10 flex flex-col justify-center max-xl:my-10   px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  MANGO
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="Willium hidee max-xl:mx-5 my-10   mx-10 flex flex-col justify-center max-xl:my-10  px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  William Abraham
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="Kernel hidee max-xl:mx-5  my-10 mx-10 flex flex-col justify-center max-xl:my-10  px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  Kernel Wealth
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="klub hidee max-xl:mx-5 my-10  mx-10 flex flex-col justify-center max-md:my-10  px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  Klub
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="Lyra hidee max-xl:mx-5 my-10  mx-10 flex flex-col justify-center max-md:my-10  px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  Lyra Health
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="studio hidee max-xl:mx-5 my-10  mx-10 flex flex-col justify-center max-md:my-10   px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  Studio Neat
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
                    View case study
                  </button>
                </div>
              </div>

              <div className="deel hidee max-xl:mx-5 my-10  mx-10 flex flex-col justify-center max-md:my-10  px-5 py-20">
                <h1
                  className="text-5xl -mt24 wcw"
                  style={{
                    fontFamily: "graphikthin",
                    color: "#d8d6d6",
                    fontWeight: "600",
                  }}
                >
                  Deel
                </h1>
                <p
                  className="colo my-10 mt-20"
                  style={{
                    fontFamily: "graphik",
                    color: "#848484",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  iusto deleniti, rem atque laborum tempore, reprehenderit
                  minima enim mollitia quae pariatur ipsum ipsa esse nostrum
                  fugit. Modi minima error tempore.
                </p>
                <div className=" mt-5 max-lg:ml-0 ">
                  <button className="btn about max-sm:text-[0.7rem]  px-7 py-1 flex justify-center  text-1xl text-cyan-50">
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
