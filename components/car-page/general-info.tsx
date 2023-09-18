import { formatPrice } from "@/lib/formatData";
import { FC } from "react";
import BtnWithIcon from "../btn-with-icon";
import { GiCarWheel } from "react-icons/gi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";

interface Props {
  name: string;
  slogan: string;
  priceFrom: number;
  mainInfo: { seats: number; gear: string; fuel: string; engine: string };
  category: string;
  tier: string;
}

const GeneralInfo: FC<Props> = ({
  name,
  slogan,
  priceFrom,
  mainInfo,
  category,
  tier,
}): JSX.Element => {
  return (
    <div className="space-y-3">
      <h1 className="uppercase font-bold text-3xl text-primary">KIA {name}</h1>
      <p className="font-semibold text-lg italic text-pentanary font-sans !-mt-[2px]">
        {slogan}
      </p>
      <p className="text-sm">
        Giá từ:{" "}
        <span className="text-lg font-bold text-red-700">
          {formatPrice(priceFrom)}VNĐ
        </span>
      </p>

      <ul className="car-general-info">
        <div>
          <li>
            <strong>Xuất xứ :</strong> Xe trong nước
          </li>
          <li>
            <strong>Tình trạng :</strong> Có sẵn
          </li>
        </div>

        <div>
          <li>
            <strong>Kiểu dáng : </strong>
            {category}
          </li>
          <li>
            <strong>Phân khúc :</strong> {tier}
          </li>
        </div>

        <div>
          <li>
            <strong>Số ghế :</strong> {mainInfo.seats}
          </li>
          <li>
            <strong>Động cơ :</strong> {mainInfo.engine}
          </li>
        </div>

        <div>
          <li>
            <strong>Hộp số : </strong>
            {mainInfo.gear}
          </li>
          <li>
            <strong>Nhiên liệu : </strong>
            {mainInfo.fuel}
          </li>
        </div>
      </ul>

      <div className="grid grid-cols-2 gap-2">
        <BtnWithIcon
          content="Giá lăn bánh"
          icon={GiCarWheel}
          iconSize={19}
          customClasses="!bg-quaternary"
        />
        <BtnWithIcon
          content="Đăng ký lái thử"
          icon={PiSteeringWheelFill}
          iconSize={21}
          customClasses="!bg-pentanary !border-pentanary hover:!text-pentanary"
        />
        <BtnWithIcon
          content="Nhận báo giá"
          icon={FaEdit}
          iconSize={18}
          customClasses="!bg-pentanary !border-pentanary hover:!text-pentanary"
        />
        <BtnWithIcon
          content="Tư vấn nhanh"
          icon={MdHeadsetMic}
          iconSize={20}
          customClasses="!bg-quaternary"
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
