import { linkConstants } from "@/constants";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const HeaderRightItems: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <li>
        <Link href={linkConstants.tintuc}>Tin tức và ưu đãi</Link>
      </li>
      <li>
        <Link href={linkConstants.laithu}>Lái thử</Link>
      </li>
      <li>
        <Link href={linkConstants.dichvu}>Dịch vụ</Link>
      </li>
      <li>
        <Link href={linkConstants.lienhe}>Liên hệ</Link>
      </li>
    </>
  );
};

export default HeaderRightItems;
