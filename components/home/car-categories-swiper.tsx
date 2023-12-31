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
import BtnWithIcon from "../btn-with-icon";
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
            <div className="flex items-center gap-x-3 gap-y-5 pb-24 max-[1100px]:flex-col-reverse">
              <div className="w-[40%] max-[1100px]:mt-8 max-[1100px]:text-center max-[1100px]:w-full">
                <h2 className="uppercase font-bold text-3xl text-[25px] max-[525px]:text-xl">
                  <Link href={"/" + car.slug}>{car.name}</Link>
                </h2>
                <p className="text-[#05141f] opacity-40 text-lg mb-[10px] max-[525px]:text-sm">
                  {car.slogan}
                </p>
                <p className="text-primary font-bold text-[26px] mb-9 max-[525px]:text-xl">
                  {formatPrice(car.priceFrom)}
                  <span className="-ml-1">đ</span>
                </p>
                <BtnWithIcon
                  to={"/" + car.slug}
                  content="Xem tất cả"
                  customClasses="w-max !bg-primary max-[1100px]:mx-auto max-[1100px]:mb-6"
                />
              </div>

              <div className="w-[60%] flex flex-col max-[1100px]:flex-col-reverse max-[1100px]:w-full">
                <ul className="car-specifications">
                  <li>
                    <BsFuelPumpFill size={18} /> {car.mainInfo.engine}
                  </li>

                  <li>
                    <FaGear size={18} className="-ml-[2px]" />{" "}
                    {car.mainInfo.gear}
                  </li>

                  <li>
                    <MdEventSeat size={21} className="-ml-[3px]" />{" "}
                    {car.mainInfo.seats} chỗ
                  </li>
                </ul>

                <Link
                  href={"/" + car.slug}
                  className="block cursor-pointer mt-10 w-full aspect-[1.7] relative hover:scale-[1.05] transition max-[1100px]:w-[80%] max-[1100px]:mx-auto"
                >
                  <ContainNextImage src={car.avatar} alt={car.name} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
