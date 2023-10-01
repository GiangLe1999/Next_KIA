"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  showMobileNav: boolean;
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
}

const barClasses = "h-[3px] bg-primary transition-all";

const MobileNavBtn: FC<Props> = ({
  showMobileNav,
  setShowMobileNav,
}): JSX.Element => {
  const showHandler = () => {
    setShowMobileNav((prev) => !prev);
  };

  return (
    <div
      className="max-[1100px]:flex hidden flex-col gap-[5px] cursor-pointer w-[30px] overflow-hidden duration-500"
      onClick={showHandler}
    >
      <div
        className={`${barClasses} ${
          showMobileNav &&
          "-rotate-45 origin-top-right -translate-x-20 -translate-y-[1px] w-[100px]"
        }`}
      ></div>
      <div className={`${barClasses} ${showMobileNav && "opacity-0"}`}></div>
      <div
        className={`${barClasses} ${
          showMobileNav &&
          "rotate-45 origin-top-left -translate-x-[2px] -translate-y-6 w-[100px]"
        }`}
      ></div>
    </div>
  );
};

export default MobileNavBtn;
