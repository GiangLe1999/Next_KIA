import { CarLinesType } from "@/types";
import { getAllCarsLinesData } from "@/lib/fetchData";
import { useEffect, useState } from "react";

export const useFetchCarLines = () => {
  const [carLines, setCarLines] = useState<CarLinesType[]>([]);

  const fetchDataHandler = async () => {
    const carLines = (await getAllCarsLinesData()) as CarLinesType[];
    setCarLines(carLines);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return carLines;
};
