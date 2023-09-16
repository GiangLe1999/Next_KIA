import { StaticImageData } from "next/image";

import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
  option1,
  option2,
  option3,
  option4,
} from "@/public/assets/images/home";
import { linkConstants } from "@/constants";
import { IconType } from "react-icons";
import { MdMail, MdPhone } from "react-icons/md";
import Link from "next/link";

export const homeBanners: StaticImageData[] = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
];

export const mainOptions: {
  title: string;
  desc: string;
  bg: StaticImageData;
  link: string;
}[] = [
  {
    title: "Chọn xe và giá",
    desc: "Bảng giá chi tiết cho từng dòng xe KIA",
    bg: option1,
    link: linkConstants.giaxe,
  },
  {
    title: "Thông tin ưu đãi",
    desc: "Thông tin ưu đãi của các dòng xe theo tháng",
    bg: option2,
    link: linkConstants.tintuc,
  },
  {
    title: "Thủ tục trả góp",
    desc: "Thủ tục trả góp cho Cá nhân & Doanh nghiệp",
    bg: option3,
    link: linkConstants.tragop,
  },
  {
    title: "Tải brochure",
    desc: "Tải brochure chi tiết của từng dòng xe",
    bg: option4,
    link: linkConstants.brochure,
  },
];

type staticCarsDataType = { title: string; link: string };

export const staticCarsData: staticCarsDataType[] = [
  { title: "New Morning", link: "/kia-new-morning" },
  { title: "Morning", link: "/kia-morning" },
  { title: "Soluto", link: "/kia-soluto" },
  { title: "K3", link: "/kia-k3" },
  { title: "K5", link: "/kia-k5" },
  { title: "Sonet", link: "/kia-sonet" },
  { title: "Carens", link: "/kia-carens" },
  { title: "Seltos", link: "/kia-seltos" },
  { title: "Sportage", link: "/kia-sportage" },
  { title: "Sorento", link: "/kia-sorento" },
  { title: "Canival", link: "/kia-carnival" },
  { title: "Sorento Hybrid", link: "/kia-sorento-hybrid" },
  { title: "Sorento Plug-in Hybrid", link: "/kia-sorento-plug-in-hybrid" },
];

type footerItemType = { title: string; link: string };

export const footerCol1: string[] = [
  "Giấy CNĐKDN: 400077880 Ngày cấp 27/10/2010",
  "Cơ quan cấp: Cơ quan cấp: Phòng đăng ký kinh doanh Sở kế hoạch và đầu tư tỉnh Quảng Nam",
  "Địa chỉ : Thôn 4, Xã Tam Hiệp, Huyện Núi Thành, Tỉnh Quảng Nam, Việt Nam",
];

export const footerAccordionData = [
  {
    header: "Hatchback",
    content: (
      <ul className="footer-accordion-list">
        <li>
          <Link href={"/kia-new-morning"}>Morning</Link>
        </li>
        <li>
          <Link href={"/kia-morning"}>New Morning</Link>
        </li>
      </ul>
    ),
  },
  {
    header: "Sedan",
    content: (
      <ul className="footer-accordion-list">
        <li>
          <Link href={"/kia-soluto"}>Soluto</Link>
        </li>
        <li>
          <Link href={"/kia-k3"}>K3</Link>
        </li>
        <li>
          <Link href={"/kia-k5"}>K5</Link>
        </li>
      </ul>
    ),
  },
  {
    header: "SUV",
    content: (
      <ul className="footer-accordion-list">
        <li>
          <Link href={"/kia-sonet"}>Sonet</Link>
        </li>
        <li>
          <Link href={"/kia-seltos"}>Seltos</Link>
        </li>
        <li>
          <Link href={"/kia-sportage"}>Sportage</Link>
        </li>
        <li>
          <Link href={"/kia-carens"}>Carens</Link>
        </li>
        <li>
          <Link href={"/kia-sorento"}>Sorento</Link>
        </li>
        <li>
          <Link href={"/kia-sorento"}>Carnival</Link>
        </li>
      </ul>
    ),
  },
  {
    header: "Hybrid",
    content: (
      <ul className="footer-accordion-list">
        <li>
          <Link href={"/kia-sorento-hybrid"}>Sorento Hybrid</Link>
        </li>
        <li>
          <Link href={"/kia-seltos-plugin-hybrid"}>Sorento Plug-in Hybrid</Link>
        </li>
      </ul>
    ),
  },
];

export const footerCol3: footerItemType[] = [
  { title: "Dịch vụ sau bán hàng", link: linkConstants.brochure },
  { title: "Phụ tùng - phụ kiện", link: linkConstants.brochure },
  { title: "Chăm sóc khách hàng", link: linkConstants.brochure },
  { title: "Đặt hẹn dịch vụ", link: linkConstants.brochure },
];

export const footerCol32: footerItemType[] = [
  { title: "Chính sách Thanh toán", link: linkConstants.brochure },
  { title: "Chính sách Bảo mật", link: linkConstants.brochure },
  {
    title: "Chính sách Giao nhận - Vận chuyển",
    link: linkConstants.brochure,
  },
];

export const footerCol4: { title: string; link: string; icon: IconType }[] = [
  { title: "Hotline: 0962334807", link: "tel:0962334807", icon: MdPhone },
  {
    title: "cskh@thaco.com.vn",
    link: "mailto:cskh@thaco.com.vn",
    icon: MdMail,
  },
];
