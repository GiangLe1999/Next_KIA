"use client";

import { filterCarByCategory } from "@/lib/filterData";
import { CarByCategory } from "@/types";
import { FC, useState } from "react";
import CarCategoriesSwiper from "./car-categories-swiper";

interface Props {
  cars: CarByCategory[];
}

const CarCategories: FC<Props> = ({ cars }): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("hatchback");

  const hatchbackCars = filterCarByCategory(cars, "Hatchback");
  const sedanCars = filterCarByCategory(cars, "Sedan");
  const suvCars = filterCarByCategory(cars, "SUV");
  const hybridCars = filterCarByCategory(cars, "HYBRID");

  return (
    <section className="car-categories-section">
      <div className="container">
        <div className="car-categories-menu">
          <button
            onClick={() => setSelectedCategory("hatchback")}
            className={`rounded-l-[10px] ${
              selectedCategory === "hatchback" && "!border-primary"
            }`}
          >
            Hatchback ({hatchbackCars.length})
          </button>
          <button
            onClick={() => setSelectedCategory("sedan")}
            className={`${selectedCategory === "sedan" && "!border-primary"}`}
          >
            Sedan ({sedanCars.length})
          </button>
          <button
            onClick={() => setSelectedCategory("suv")}
            className={`${selectedCategory === "suv" && "!border-primary"}`}
          >
            SUV ({suvCars.length})
          </button>
          <button
            onClick={() => setSelectedCategory("hybrid")}
            className={`rounded-r-[10px] ${
              selectedCategory === "hybrid" && "!border-primary"
            }`}
          >
            HYBRID ({hybridCars.length})
          </button>
        </div>

        <div className="">
          <CarCategoriesSwiper
            cars={
              selectedCategory === "hatchback"
                ? hatchbackCars
                : selectedCategory === "sedan"
                ? sedanCars
                : selectedCategory === "suv"
                ? suvCars
                : hybridCars
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
