"use client";

import { CarType } from "@/types";
import { FC, ReactNode } from "react";

import NextImage from "../next-image";

import CarListItem from "./car-list-item";

interface Props {
  cars: CarType[];
  error: string;
  isCarListPage?: boolean;
}

const CarList: FC<Props> = ({ cars, error, isCarListPage }): JSX.Element => {
  const Fallback: ReactNode = (
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
  );

  return (
    <div className="mt-5 flex-1">
      {isCarListPage ? (
        <div className="grid grid-cols-2 gap-6 mb-12">
          {Array.isArray(cars) && !error ? (
            cars.map((car) => (
              <CarListItem
                car={car}
                key={car._id.toString()}
                isCarListPage={isCarListPage}
              />
            ))
          ) : (
            <div>{Fallback}</div>
          )}
        </div>
      ) : (
        <>
          {Array.isArray(cars) && !error
            ? cars.map((car) => (
                <CarListItem car={car} key={car._id.toString()} />
              ))
            : { Fallback }}
        </>
      )}
    </div>
  );
};

export default CarList;
