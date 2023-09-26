import { FC } from "react";

import { formatPrice } from "@/lib/formatData";
import Link from "next/link";
import BtnWithIcon from "../btn-with-icon";
import { linkConstants } from "@/constants";
import ContainNextImage from "../contain-next-image";
import { CarType } from "@/types";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { BiSolidDownload } from "react-icons/bi";
import { MdDownload } from "react-icons/md";

interface Props {
  car: CarType;
  isCarListPage?: boolean;
  isBrochurePage?: boolean;
}

const CarListItem: FC<Props> = ({
  car,
  isCarListPage,
  isBrochurePage,
}): JSX.Element => {
  if (isCarListPage || isBrochurePage)
    return (
      <div className="bg-[#F3F3F3] shadow-md border rounded-sm p-4">
        <h2 className="font-bold text-2xl capitalize hover:text-secondary transition">
          <Link href={"/" + car.slug}>{car.name}</Link>
        </h2>
        <p className="text-xs text-black/50 mt-1 mb-4">{car.slogan}</p>

        <p className="font-bold text-xl text-primary/90 pb-2 border-b border-[#e5e5e5] mb-6">
          {formatPrice(car.priceFrom)}VNĐ
        </p>

        <Link
          href={`/${car.slug}`}
          className="block relative w-full aspect-video mb-6"
        >
          <ContainNextImage
            src={car.avatar}
            alt={car.name}
            className="hover:scale-[1.05]"
          />
        </Link>

        {isBrochurePage ? (
          <BtnWithIcon
            content="Tải Brochure"
            iconBehind={MdDownload}
            iconSize={19}
            customClasses="!bg-primary !text-xs w-full"
            href={car.brochure}
            external
          />
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <BtnWithIcon
              content="Xem chi tiết"
              icon={HiCursorClick}
              iconSize={19}
              customClasses="!bg-primary !text-xs"
              to={"/" + car.slug}
            />
            <BtnWithIcon
              content="Đăng ký lái thử"
              icon={PiSteeringWheelFill}
              iconSize={21}
              customClasses="!bg-secondary !border-secondary hover:!text-secondary !text-xs"
              to={"/" + car.slug}
            />
            <BtnWithIcon
              content="Nhận báo giá"
              icon={FaEdit}
              iconSize={18}
              customClasses="!bg-secondary !border-secondary hover:!text-secondary !text-xs"
              to={"/" + car.slug}
            />
            <BtnWithIcon
              content="Download brochure"
              icon={BiSolidDownload}
              iconSize={20}
              customClasses="!bg-primary !text-xs"
              external
              href={car.brochure}
            />
          </div>
        )}
      </div>
    );

  return (
    <div className="mb-16">
      <h2 className="font-bold text-xl uppercase border-b py-1 mb-5 hover:text-secondary transition">
        <Link href={`/${car.slug}`}>KIA {car.name}</Link>
      </h2>
      <div className="flex items-center gap-4 max-[779px]:flex-col">
        <Link
          href={`/${car.slug}`}
          className="block relative w-[35%] aspect-[22/10] max-[779px]:w-[80%] max-[545px]:w-full"
        >
          <ContainNextImage
            src={car.avatar}
            alt={car.name}
            className="hover:scale-[1.05]"
          />
        </Link>

        <div className="flex-1 space-y-8 max-[779px]:w-full">
          {car.carLines.map((line, index) => (
            <div
              className="flex items-center gap-x-8 gap-y-3 max-[1000px]:text-base max-[615px]:text-sm text-xs max-[545px]:flex-col max-[545px]:text-base"
              key={index}
            >
              <h3 className="flex-1 font-bold max-[545px]:w-full">
                {line.name}
              </h3>
              <div className="w-[35%] max-[545px]:w-full">
                Giá: {formatPrice(line.price)} VNĐ
              </div>

              <div className="flex flex-col w-[20%] gap-2">
                <BtnWithIcon
                  to={linkConstants.laithu}
                  customClasses="w-full !bg-primary max-[545px]:w-full !text-xs !p-1"
                  content="Lái thử"
                />

                <BtnWithIcon
                  to={"/" + car.slug}
                  customClasses="w-full !bg-secondary !border-secondary hover:text-secondary max-[545px]:w-full !text-xs !p-1"
                  content="Chi tiết"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListItem;
