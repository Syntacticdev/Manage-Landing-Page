import React, { useRef, useState } from "react";
import styles from "../styles/TestimonyCard.module.css";
import testimonies from "../public/testimonies.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Testimony() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {testimonies.map(({ testimonier, testimony }, i) => (
          <SwiperSlide key={i}>
            <div className={styles.tes_card} key={i}>
              <div className={styles.tes_image}>
                <Image
                  src={`/images/avatar-${testimonier.split(" ")[0]}.png`}
                  alt={`${testimonier} image`}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className={styles.testimonier}>{testimonier}</h3>
              <p className={styles.testimony}>{testimony}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
