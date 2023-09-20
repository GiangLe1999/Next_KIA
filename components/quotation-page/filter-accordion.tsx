"use client";

import { FC, Dispatch, SetStateAction } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";
import { CarType } from "@/types";
import { QueryType } from "@/app/(car-price)/gia-xe-kia/page";
import BtnWithIcon from "../btn-with-icon";
import { BiSolidEraser } from "react-icons/bi";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface ItemsProps {
  header: FieldNameType;
  children: JSX.Element | JSX.Element[];
  initialEntered?: boolean;
}

const AccordionItem: FC<ItemsProps> = ({ header, ...rest }) => {
  let headerLabel = "";
  switch (header) {
    case "line":
      headerLabel = "dòng xe";
      break;
    case "price":
      headerLabel = "giá";
      break;
    case "fuel":
      headerLabel = "nhiên liệu";
      break;
    case "seats":
      headerLabel = "số ghế";
      break;
    case "kind":
      headerLabel = "kiểu dáng";
      break;
    default:
      headerLabel = "";
  }

  return (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className="flex justify-between items-center w-full">
          <span className="block font-bold uppercase text-sm">
            {headerLabel}
          </span>
          <FiChevronDown
            className={`ml-auto transition-transform duration-200 ease-out w-3 h-3 ${
              isEnter && "rotate-180"
            }`}
          />
        </div>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left ${isEnter && "bg-[#E8E8E8]"}`,
      }}
      contentProps={{
        className: "transition-height duration-300 ease-out",
      }}
      panelProps={{ className: "p-4" }}
    />
  );
};

interface Props {
  data: { header: string; items: string[] }[];
  query: QueryType;
  setQuery: Dispatch<SetStateAction<QueryType>>;
  loading: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setSortBy: Dispatch<SetStateAction<string>>;
}

export type FieldNameType = "line" | "price" | "fuel" | "seats" | "kind";

const FilterAccordion: FC<Props> = ({
  data,
  query,
  setQuery,
  loading,
  setCurrentPage,
  setSortBy,
}): JSX.Element => {
  const inputChangeHandler = (name: FieldNameType, value: string) => {
    const newQuery = { ...query };

    setCurrentPage(1);

    if (newQuery[name].includes(value)) {
      newQuery[name] = newQuery[name].filter((item) => item !== value);
    } else {
      newQuery[name].push(value);
    }

    setQuery(newQuery);
  };

  return (
    <div className="my-4 border-t overflow-y-scroll max-h-screen no-scrollbar">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition allowMultiple transitionTimeout={300}>
        {data.map((group, index) => (
          <AccordionItem header={group.header as FieldNameType} key={index}>
            <ul>
              {group.items.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 py-2 text-xs cursor-pointer truncate"
                  htmlFor={item}
                >
                  <input
                    type="checkbox"
                    name={group.header}
                    checked={query[group.header as FieldNameType].includes(
                      item
                    )}
                    id={item}
                    className="cursor-pointer"
                    onChange={() =>
                      inputChangeHandler(group.header as FieldNameType, item)
                    }
                    disabled={loading}
                  />
                  {item}
                </label>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="pt-4 border-t">
        <BtnWithIcon
          content="Reset bộ lọc"
          customClasses="!bg-primary w-full border-t"
          icon={BiSolidEraser}
          iconSize={20}
          onClick={() => {
            setSortBy("");
            setQuery((prev) => {
              const newState = { ...prev };
              newState.line = [];
              newState.price = [];
              newState.fuel = [];
              newState.seats = [];
              newState.kind = [];
              return newState;
            });
          }}
        />
      </div>
    </div>
  );
};

export default FilterAccordion;
