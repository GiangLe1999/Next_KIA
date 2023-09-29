import { CarByCategory } from "@/types";
import { FC } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { TestDriveValues } from "./test-drive-form";
import ContainNextImage from "../contain-next-image";

interface Props {
  car: CarByCategory;
  register: UseFormRegister<TestDriveValues>;
}

const TestDriveCarOption: FC<Props> = ({ car, register }): JSX.Element => {
  return (
    <div>
      <div className="relative w-full aspect-square">
        <ContainNextImage src={car.avatar} alt={car.name} />
      </div>

      <div className="flex items-center justify-center gap-2 -mt-16 relative z-50 cursor-pointer">
        <input
          type="radio"
          id={car.name}
          {...register("car")}
          value={car.name}
        />
        <label htmlFor={car.name}>KIA {car.name}</label>
      </div>
    </div>
  );
};

export default TestDriveCarOption;
