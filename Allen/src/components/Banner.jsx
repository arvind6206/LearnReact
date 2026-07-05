import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner-container">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/1.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/2.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/3.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/4.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/5.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/6.webp" alt="" />
        </SwiperSlide>

      </Swiper>

    </div>
  );
}

export default Banner;