import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./explore.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Explore = () => {
  const url = useLocation();

  if (url.pathname === "/consultingandstrategy") {
    return (
      // background-image: url("../images/unsplash_QRWAdBCqysc.svg");

      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1 className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5">
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p20">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper w-[115%] -ml-28 max-lg:w-[100%] max-lg:ml-0"
              >
                <SwiperSlide>
                  <Link to="/userexperience" className="px20">
                    <div className="card1 mx-4 max-md:mx-0 hideee relative">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/productdevelopment" className="px20">
                    <div className="card1 mx48 max-md:mx-0 hideee relative">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/digitalmarketing" className="px20">
                    <div className="card1 ml48 max-md:mx-0 hideee relative">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/userexperience") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1 className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5">
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p20">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper w-[110%] -ml-28 max-lg:w-[100%] max-lg:ml-0"
              >
                <SwiperSlide>
                  <Link to="/consultingandstrategy" className="px20">
                    <div className="card1 mx-4 max-md:mx-0 hideee relative">
                      <div className="img1 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to="/productdevelopment" className="px20">
                    <div className="card1 mx48 max-md:mx-0 hideee relative">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/digitalmarketing" className="px20">
                    <div className="card1 ml48 max-md:mx-0 hideee relative">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/productdevelopment") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1 className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5">
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p20">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper w-[110%] -ml-28 max-lg:w-[100%] max-lg:ml-0"
              >
                <SwiperSlide>
                  <Link to="/consultingandstrategy" className="px20">
                    <div className="card1 mx-4 max-md:mx-0 hideee relative">
                      <div className="img1 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/userexperience" className="px20">
                    <div className="card1 m48 max-md:mx-0 hideee relative">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to="/digitalmarketing" className="px20">
                    <div className="card1 ml48 max-md:mx-0 hideee relative">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else if (url.pathname === "/digitalmarketing") {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1 className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5">
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p20">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper w-[110%] -ml-28 max-lg:w-[100%] max-lg:ml-0"
              >
                <SwiperSlide>
                  <Link to="/consultingandstrategy" className="px20">
                    <div className="card1 mx-4 max-md:mx-0 hideee relative">
                      <div className="img1 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/userexperience" className="px20">
                    <div className="card1 m48 max-md:mx-0 hideee relative">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/productdevelopment" className="px20">
                    <div className="card1 mx48 max-md:mx-0 hideee relative">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="lead flex mt-40 justify-center h-full relative  items-center">
          <div className="width w-full flex-col min n h-full  relative">
            <div className="headifn flex justify-start items-start w-full">
              <h1 className="text-7xl w-2/3  max-lg:text-5xl max-lg:w-full font-extrabold max-xl:p-5">
                Explore Our Services
              </h1>
            </div>
            <div className="cards tett p-10  w-[100%] max-lg:p20">
              <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                slidesPerGroupSkip={1}
                spaceBetween={10}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  435: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1060: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper w-[115%] -ml-28 max-lg:w-[100%] max-lg:ml-0"
              >
                <SwiperSlide>
                  <Link to="/consultingandstrategy" className="px20">
                    <div className="card1 mx-4 max-md:mx-0 hideee relative">
                      <div className="img1 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Consulting And Strategy
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/userexperience" className="px20">
                    <div className="card1 m48 max-md:mx-0 hideee relative">
                      <div className="img22 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          User Experience
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/productdevelopment" className="px20">
                    <div className="card1 mx48 max-md:mx-0 hideee relative">
                      <div className="img3 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Product Development
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/digitalmarketing" className="px20">
                    <div className="card1 ml48 max-md:mx-0 hideee relative">
                      <div className="img4 ml-10  ma\  -top-0"></div>
                      <div className="opacity-60 name absolute max-xl:-mt-60 top-56 bottom-10 w-full flex justify-center items-end colo">
                        <p className="name text-2xl max-md:-ml28 max-xl:-mt-60">
                          Digital Marketing
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Explore;
