"use client";

import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { CarByCategory } from "@/types";
import { formatPrice } from "@/lib/formatData";
import BtnWithIcon from "../btnWithIcon";
import { FaGear } from "react-icons/fa6";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import ContainNextImage from "../contain-next-image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CarCategoriesSwiper({
  cars,
}: {
  cars: CarByCategory[];
}) {
  const router = useRouter();

  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState<SwiperType>();

  //   Reset Swiper về Slide đầu mỗi khi mảng cars thay đổi
  useEffect(() => {
    swiper?.slideTo(0);
  }, [cars]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="car-categories-swiper"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {cars.map((car) => (
          <SwiperSlide key={car._id.toString()}>
            <div className="flex items-center gap-3 pb-24">
              <div className="w-[40%]">
                <h2 className="uppercase font-bold text-3xl text-[25px]">
                  <Link href={"/" + car.slug}>{car.name}</Link>
                </h2>
                <p className="text-[#05141f] opacity-40 text-lg mb-[10px]">
                  {car.slogan}
                </p>
                <p className="text-primary font-bold text-[26px] mb-9">
                  {formatPrice(car.priceFrom)}
                  <span className="-ml-1">đ</span>
                </p>
                <BtnWithIcon
                  to={"/" + car.slug}
                  content="Xem tất cả"
                  customClasses="w-max"
                />
              </div>

              <div className="w-[60%]">
                <ul className="text-white text-[15px] space-y-3 ml-auto w-max">
                  <li className="flex items-center gap-2">
                    <BsFuelPumpFill size={18} /> {car.mainInfo.engine}
                  </li>

                  <li className="flex items-center gap-2">
                    <FaGear size={18} className="-ml-[2px]" />{" "}
                    {car.mainInfo.gear}
                  </li>

                  <li className="flex items-center gap-2">
                    <MdEventSeat size={21} className="-ml-[3px]" />{" "}
                    {car.mainInfo.seats} chỗ
                  </li>
                </ul>

                <div
                  onClick={() => router.push("/" + car.slug)}
                  className="cursor-pointer mt-10 w-full aspect-[1.7] relative hover:scale-[1.05] transition"
                >
                  <ContainNextImage src={car.avatar} alt={car.name} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
