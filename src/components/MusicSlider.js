import React from "react";
import { FiYoutube } from "react-icons/fi";
// testimonials data
import { music } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const MusicSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {music.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-22">
                <div className="w-40 h-40 lg:w-[428px] lg:h-[428px]">
                  <img className="rounded-2xl" src={item.musicImg} alt="" />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <a
                    className="text-xl mb-8 italic font-normal text-white  hover:text-red-700"
                    href={item.href}
                    target="blank"
                  >
                    {item.musicName} ({item.musicDesc}) <FiYoutube />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MusicSlider;
