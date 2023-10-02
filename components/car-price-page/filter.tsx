"use client";

import { carNames } from "@/data/home";
import { Dispatch, FC, SetStateAction } from "react";
import FilterAccordion from "./filter-accordion";
import { QueryType } from "./price-list-page-content";
import BtnWithIcon from "../btn-with-icon";
import { BiSolidEraser } from "react-icons/bi";

interface Props {
  query: QueryType;
  setQuery: Dispatch<SetStateAction<QueryType>>;
  loading: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setSortBy: Dispatch<SetStateAction<string>>;
}

const Filter: FC<Props> = ({
  query,
  setQuery,
  loading,
  setCurrentPage,
  setSortBy,
}): JSX.Element => {
  const accordionData = [
    {
      header: "line",
      items: carNames,
    },
    {
      header: "price",
      items: [
        "Dưới 500 triệu",
        "500 triệu - 700 triệu",
        "700 triệu - 1 tỷ",
        "1 tỷ - 2 tỷ",
      ],
    },
    { header: "fuel", items: ["Xăng", "Dầu", "Hybrid"] },
    { header: "seats", items: ["5", "7"] },
    {
      header: "tier",
      items: ["Hạng A", "Hạng B", "Hạng C", "Hạng D", "Hạng E"],
    },
    {
      header: "kind",
      items: ["Hatchback", "Sedan", "SUV", "Pickup"],
    },
  ];

  const resetStateHander = () => {
    setSortBy("");
    setQuery((prev) => {
      const newState = { ...prev };
      newState.line = [];
      newState.price = [];
      newState.fuel = [];
      newState.seats = [];
      newState.kind = [];
      newState.tier = [];
      return newState;
    });
  };

  return (
    <div className="w-[23%] bg-[#F3F3F3] p-4 h-fit max-[1100px]:h-max max-[1100px]:w-full shadow-md border rounded-sm sticky max-[1100px]:static top-28">
      <h3 className="text-lg font-bold text-center">BỘ LỌC</h3>
      <FilterAccordion
        data={accordionData}
        setSortBy={setSortBy}
        query={query}
        setQuery={setQuery}
        loading={loading}
        setCurrentPage={setCurrentPage}
      />

      <div>
        <BtnWithIcon
          content="Reset bộ lọc"
          customClasses="!bg-primary w-full"
          icon={BiSolidEraser}
          iconSize={20}
          onClick={resetStateHander}
        />
      </div>
    </div>
  );
};

export default Filter;
