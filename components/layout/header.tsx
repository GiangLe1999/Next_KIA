"use client";

import { FC, useState } from "react";
import Link from "next/link";
import ContainNextImage from "../contain-next-image";
import HeaderLeftItems from "./header-left-items";
import HeaderRightItems from "./header-right-items";
import SearchBar from "./search-bar";
import MobileNavBtn from "./mobile-nav-btn";
import MobileNav from "./mobile-nav";
import { FaSearch } from "react-icons/fa";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="bg-white p-5 text-primary text-sm fixed top-0 left-0 right-0 border-b border-[#e5e5e5] font-bold z-[99]">
      <nav className="container flex items-center justify-between">
        {/* Left Nav */}
        <div className="header-item-list max-[1000px]:hidden">
          <HeaderLeftItems />
        </div>

        {/* Mobile Nav */}
        <MobileNavBtn
          showMobileNav={showMobileNav}
          setShowMobileNav={setShowMobileNav}
        />

        {/* Logo */}
        <Link href="/" className="flex-1 h-4 relative block">
          <ContainNextImage src="/assets/images/logo-kia.png" alt="Logo KIA" />
        </Link>

        {/* Right Nav */}
        <div className="header-item-list max-[1000px]:hidden">
          <HeaderRightItems />
        </div>

        <div onMouseEnter={() => setShowSearch(true)}>
          <FaSearch className="cursor-pointer max-[1000px]:text-[18px] text-[14px]" />
        </div>

        <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
      </nav>

      {/* Mobile Nav */}
      <MobileNav showMobileNav={showMobileNav} />
    </div>
  );
};

export default Header;
