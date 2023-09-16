"use client";

import { FC, useState } from "react";
import { mainOptions } from "@/data/home";

import { BiRightArrowAlt } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import NextImage from "../next-image";
import { useRouter } from "next/navigation";

interface Props {}

const MainOptionsSwiper: FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  return (
    <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="main-options-swiper"
      >
        {mainOptions.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => router.push(item.link)}
              className="w-full aspect-[0.67] relative group overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-10 group-hover:-translate-x-full transition duration-500"></div>
              <NextImage
                src={item.bg}
                alt={item.title}
                className="rounded-sm"
              />

              <div className="absolute top-[73%] text-white left-6 right-4">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[15px]">{item.desc}</p>
              </div>

              <div className="absolute bottom-3 right-6 w-10 h-10 rounded-full bg-transparent border-[1.5px] border-white text-white grid place-items-center cursor-pointer">
                <BiRightArrowAlt size={23} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainOptionsSwiper;
