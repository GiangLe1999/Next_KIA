"use client";

import { linkConstants } from "@/constants";
import Link from "next/link";
import { FC, useState } from "react";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import {
  FaCar,
  FaDonate,
  FaGift,
  FaList,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

interface Props {}

const StickyBtnsData = [
  {
    icon: FaTimes,
  },
  {
    title: "Bảng giá",
    icon: FaDonate,
    link: linkConstants.giaxe,
    move: "72",
  },
  {
    title: "Ưu đãi",
    icon: FaGift,
    link: linkConstants.uudai,
    move: "59",
  },
  {
    title: "Đăng ký lái thử",
    icon: FaCar,
    link: linkConstants.laithu,
    move: "117",
  },
  {
    title: "Tính phí lăn bánh",
    icon: GiCarWheel,
    link: linkConstants.laithu,
    move: "133",
  },
  {
    title: "Thủ tục trả góp",
    icon: BiSolidPieChartAlt2,
    link: linkConstants.laithu,
    move: "118",
  },
  {
    title: "Hotline: 096.2334.807",
    icon: FaPhone,
    tel: "tel:0962334807",
  },
];

const itemClasses =
  "w-full relative block aspect-square border-b grid place-items-center bg-white";

const itemLinkClasses =
  "h-11 border border-transparent border-b-[#e5e7eb] flex items-center gap-3 min-w-max px-[12px] hover:shadow-md hover:border-[#e5e7eb] transition bg-white hover:text-primary";

const StickyBtns: FC<Props> = (props): JSX.Element => {
  const [maximized, setMaximized] = useState(true);
  const [itemHovered, setItemHovered] = useState<number>(-1);

  return (
    <div className="fixed right-0 top-[30%] w-11 bg-white z-[9999] shadow-md border-l border-t">
      {maximized ? (
        <div>
          <ul>
            {StickyBtnsData.map((item, index) => {
              if (item.tel)
                return (
                  <a
                    key={index}
                    href={item.tel}
                    className={`${itemLinkClasses} hover:-translate-x-[177px]`}
                  >
                    {item.icon({ size: 18 })} {item.title}
                  </a>
                );
              if (!item.title)
                return (
                  <button
                    key={index}
                    onClick={() => setMaximized(false)}
                    className={`${itemClasses}`}
                  >
                    {item.icon({ size: 18 })}
                  </button>
                );

              return (
                <Link
                  key={index}
                  href={item.link as string}
                  className={`${itemLinkClasses}`}
                  style={{
                    transform:
                      itemHovered === index
                        ? `translateX(-${item.move}px)`
                        : "translate(0)",
                  }}
                  onMouseEnter={() => {
                    setItemHovered(index);
                  }}
                  onMouseLeave={() => setItemHovered(-1)}
                >
                  {item.icon({ size: 18 })} {item.title}
                </Link>
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          className="grid place-items-center aspect-square cursor-pointer"
          onClick={() => setMaximized(true)}
        >
          <FaList color="#000" size={18} />
        </div>
      )}
    </div>
  );
};

export default StickyBtns;
