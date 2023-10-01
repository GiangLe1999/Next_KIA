import { linkConstants } from "@/constants";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const HeaderLeftItems: FC<Props> = (props): JSX.Element => {
  return (
    <>
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
          <span className="absolute text-[#ea0029] -top-[14px] -right-[22px] max-[1000px]:top-[2px] max-[1000px]:left-28 text-[10px] max-[1000px]:">
            NEW
          </span>
        </Link>
      </li>
      <li>
        <Link href={linkConstants.giaxe}>Giá xe</Link>
      </li>
    </>
  );
};

export default HeaderLeftItems;
