import image2 from "./images/Frame 43.svg";
import image3 from "./images/Frame 44.svg";
import image4 from "./images/Frame 472.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { gsap} from "gsap";
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
    <section id="blog">
      <div className="blog-home-container">
        <h1 id="blog_heading">We Pen Down Our Brightest Ideas</h1>
        <div id="blog-icons">
          <Swiper
            slidesPerView={3}
            slidesPerGroupSkip={1}
            spaceBetween={60}
            loop={true}
            // breakpoints
            autoplay={{
              delay: 2500,
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
              <div className="blog-icons_div">
                <img src={image2} alt="" className="blog-icons_img" />
                <h2 className="blog-icon_div-h2">Empathy in Ux</h2>
                <p className="blog_para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-icons_div">
                <img src={image4} alt="" className="blog-icons_img" />
                <h2 className="blog-icon_div-h2">Design System</h2>
                <p className="blog_para">
                  Union flatten auto flatten duplicate. Line slice inspect
                  horizontal image strikethrough share follower.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Link to={"/blog"} className="explore_btn">
          <p className="exp_btn-content">explore more</p>
        </Link>
      </div>
    </section>
  );
}
