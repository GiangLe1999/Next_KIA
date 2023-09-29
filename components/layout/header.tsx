import { FC } from "react";
import Link from "next/link";
import ContainNextImage from "../contain-next-image";
import { linkConstants } from "@/constants";
import { FaSearch } from "react-icons/fa";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  return (
    <div className="bg-white p-5 text-primary text-sm fixed top-0 left-0 right-0 border-b border-[#e5e5e5] font-bold z-[99]">
      <nav className="container flex items-center justify-between">
        {/* Left Nav */}
        <div className="header-item-list">
          <li>
            <Link href="/" className="group group-test">
              Trang chủ
            </Link>
          </li>

          <li>
            <Link href={linkConstants.sanpham}>Sản phẩm KIA</Link>
          </li>

          <li>
            <Link href={linkConstants.sorento_hybrid} className="relative">
              Sorento Hybrid
              <span className="absolute text-[#ea0029] -top-[14px] -right-[22px] text-[10px]">
                NEW
              </span>
            </Link>
          </li>

          <li>
            <Link href={linkConstants.giaxe}>Giá xe</Link>
          </li>
        </div>

        {/* Logo */}
        <Link href="/" className="flex-1 h-4 relative block">
          <ContainNextImage src="/assets/images/logo-kia.png" alt="Logo KIA" />
        </Link>

        {/* Right Nav */}
        <div className="header-item-list">
          <li>
            <Link href={linkConstants.tintuc}>Tin tức và ưu đãi</Link>
          </li>
          <li>
            <Link href={linkConstants.laithu}>Đăng ký lái thử</Link>
          </li>
          <li>
            <Link href={linkConstants.dichvu}>Dịch vụ</Link>
          </li>
          <li>
            <Link href={linkConstants.lienhe}>Liên hệ</Link>
          </li>
          <li>
            <button>
              <FaSearch size={14} />
            </button>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Header;
