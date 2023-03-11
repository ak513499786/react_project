import image2 from "./images/Frame 43.svg";
import image3 from "./images/Frame 44.svg";
import image4 from "./images/Frame 472.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Ideas() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#ffcd05",
      scale: 0.9,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0D0D0D", scale: 1 });
  };
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      containerClass: "half-image-container",
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };
  return (
    <div
      id="blog"
      className="loves mt-32 flex justify-center flex-col items-center"
    >
      <div className="max--9xl homeidea ">
        <Swiper
          slidesPerView={3}
          slidesPerGroupSkip={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[27rem] mt-20"
        >
          <SwiperSlide>
            <div className="cardh  cass  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                {/* <img src="/blog/Frame 43.png" alt="" /> */}
                <img src={image2} alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-3xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardh  cass  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                {/* <img src="/blog/Frame 43.png" alt="" /> */}
                <img src={image2} alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-3xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardh  cass  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                <img src={image2} alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-3xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardh  cass  mx-4 items-center">
              <div className="img max-md:flex  max-md:justify-center">
                {/* <img src="/blog/Frame 43.png" alt="" /> */}
                <img src={image2} alt="" />
              </div>
              <div className="head mt-5">
                <h2 className="text-3xl text-center text-stone-400">
                  Empathy in UX
                </h2>
              </div>
              <div className="descrip flex flex-col justify-center items-center mt-5">
                <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="flex">
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
        <div className="casee">
          <div className="cardh  cass  mx-4 items-center">
            <div className="img max-md:flex  max-md:justify-center">
              <img src="/blog/Frame 43.png" alt="" />
            </div>
            <div className="head mt-5">
              <h2 className="text-3xl text-center text-stone-400">
                Empathy in UX
              </h2>
            </div>
            <div className="descrip flex flex-col justify-center items-center mt-5">
              <p className="flex coloo w-full box-pera text-stone-400 items-center justify-center text-center">
                Union flatten auto flatten duplicate. Line slice inspect
                horizontal image strikethrough share follower.
              </p>
            </div>
          </div>
        </div>
      </div> */}
        <div className=" flex justify-center mt-16 max-lg:ml-0 ">
          <button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="btn about px-7 py-1 flex justify-center  text-1xl text-cyan-50"
          >
            <Link to="/blog">explore more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
