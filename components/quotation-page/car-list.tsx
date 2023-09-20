"use client";

import { CarType } from "@/types";
import { FC } from "react";
import { formatPrice } from "@/lib/formatData";
import Link from "next/link";
import NextImage from "../next-image";
import BtnWithIcon from "../btn-with-icon";
import { linkConstants } from "@/constants";
import ContainNextImage from "../contain-next-image";

interface Props {
  cars: CarType[];
  error: string;
}

const CarList: FC<Props> = ({ cars, error }): JSX.Element => {
  return (
    <div className="mt-5 flex-1">
      {Array.isArray(cars) && !error ? (
        cars.map((car) => (
          <div key={car._id.toString()} className="mb-16">
            <h2 className="font-bold text-xl uppercase border-b py-1 mb-5 hover:text-secondary transition">
              <Link href={`/${car.slug}`}>KIA {car.name}</Link>
            </h2>
            <div className="flex items-center gap-4 max-[779px]:flex-col">
              <Link
                href={`/${car.slug}`}
                className="block relative w-[35%] aspect-[22/10] max-[779px]:w-[80%] max-[545px]:w-full"
              >
                <ContainNextImage
                  src={car.avatar}
                  alt={car.name}
                  className="hover:scale-[1.05]"
                />
              </Link>

              <div className="flex-1 space-y-8 max-[779px]:w-full">
                {car.carLines.map((line, index) => (
                  <div
                    className="flex items-center gap-x-8 gap-y-3 max-[1000px]:text-base max-[615px]:text-sm text-xs max-[545px]:flex-col max-[545px]:text-base"
                    key={index}
                  >
                    <h3 className="flex-1 font-bold max-[545px]:w-full">
                      {line.name}
                    </h3>
                    <div className="w-[35%] max-[545px]:w-full">
                      Giá: {formatPrice(line.price)} VNĐ
                    </div>

                    <div className="flex flex-col w-[20%] gap-2">
                      <BtnWithIcon
                        to={linkConstants.laithu}
                        customClasses="w-full !bg-primary max-[545px]:w-full !text-xs !p-1"
                        content="Lái thử"
                      />

                      <BtnWithIcon
                        to={"/" + car.slug}
                        customClasses="w-full !bg-secondary !border-secondary hover:text-secondary max-[545px]:w-full !text-xs !p-1"
                        content="Chi tiết"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="relative w-[80%] aspect-[798/243] mx-auto">
            <NextImage
              src="/images/bao-gia/found-no-car.jpg"
              alt="Không tìm thấy xe phù hợp"
            />
          </div>
          <p className="text-center font-bold text-primary text-xl">
            Không tìm thấy xe phù hợp!
          </p>
        </>
      )}
    </div>
  );
};

export default CarList;
