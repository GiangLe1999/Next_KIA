import { filterCarByCategory } from "@/lib/filterData";
import { CarByCategory } from "@/types";
import { FC, useEffect, useState } from "react";
import TestDriveCarOption from "./test-drive-car-option";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { TestDriveValues } from "./test-drive-form";

interface Props {
  cars: CarByCategory[];
  register: UseFormRegister<TestDriveValues>;
  setValue: UseFormSetValue<TestDriveValues>;
  error: string | undefined;
}

const TestDriveChooseCar: FC<Props> = ({
  cars,
  register,
  setValue,
  error,
}): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("hatchback");

  const hatchbackCars = filterCarByCategory(cars, "Hatchback");
  const sedanCars = filterCarByCategory(cars, "Sedan");
  const suvCars = filterCarByCategory(cars, "SUV");
  const hybridCars = filterCarByCategory(cars, "HYBRID");

  let renderedCars = [];
  switch (selectedCategory) {
    case "hatchback":
      renderedCars = hatchbackCars;
      break;
    case "sedan":
      renderedCars = sedanCars;
      break;
    case "suv":
      renderedCars = suvCars;
      break;
    default:
      renderedCars = hybridCars;
  }

  useEffect(() => {
    setValue("car", "");
  }, [selectedCategory]);

  return (
    <div className="pl-6">
      <p className="text-xs text-left mt-8 normal-case mb-1">
        Dòng xe{" "}
        {error && <span className="font-normal text-red-700">({error})</span>}
      </p>
      <div className="car-categories-menu-sm">
        <button
          onClick={() => setSelectedCategory("hatchback")}
          className={`rounded-l-[10px] ${
            selectedCategory === "hatchback" && "!border-primary"
          }`}
        >
          Hatchback
        </button>
        <button
          onClick={() => setSelectedCategory("sedan")}
          className={`${selectedCategory === "sedan" && "!border-primary"}`}
        >
          Sedan
        </button>
        <button
          onClick={() => setSelectedCategory("suv")}
          className={`${selectedCategory === "suv" && "!border-primary"}`}
        >
          SUV
        </button>
        <button
          onClick={() => setSelectedCategory("hybrid")}
          className={`rounded-r-[10px] ${
            selectedCategory === "hybrid" && "!border-primary"
          }`}
        >
          HYBRID
        </button>
      </div>

      <div className="mt-4">
        {renderedCars.map((car, index) => (
          <TestDriveCarOption key={index} car={car} register={register} />
        ))}
      </div>
    </div>
  );
};

export default TestDriveChooseCar;
