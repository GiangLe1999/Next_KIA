import { CarByCategory } from "@/types";

export const filterCarByCategory = (
  cars: CarByCategory[],
  category: String
) => {
  return cars.filter((car) => car.category === category);
};
