import { FC } from "react";
import HeaderLeftItems from "./header-left-items";
import HeaderRightItems from "./header-right-items";

interface Props {
  showMobileNav: boolean;
}

const MobileNav: FC<Props> = ({ showMobileNav }): JSX.Element => {
  return (
    <div
      className="absolute left-0 right-0 top-[60px] z-50 bg-white shadow-md transition px-8 header-item-list-mobile duration-500"
      style={{
        transform: showMobileNav ? "scale3d(1,1,1)" : "scale3d(1,0,1)",
        opacity: showMobileNav ? 1 : 0,
        transformOrigin: "0 0",
      }}
    >
      <HeaderLeftItems />
      <HeaderRightItems />
    </div>
  );
};

export default MobileNav;
