"use client";

import { FC } from "react";
import PriceSection from "./price-section";
import { CarLineType } from "@/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import BtnWithIcon from "../btn-with-icon";
import { FaEdit } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";

interface Props {
  name: string;
  slug: string;
  registration: number;
  carLines: CarLineType[];
  serializedContent: MDXRemoteSerializeResult;
}

const components = { Image };

const MainContent: FC<Props> = ({
  name,
  registration,
  carLines,
  serializedContent,
}): JSX.Element => {
  return (
    <div>
      <PriceSection name={name} lines={carLines} registration={registration} />

      <div className="flex gap-8">
        <div className="w-[70%] prose postContent overflow-hidden">
          <MDXRemote {...serializedContent} components={components} />
        </div>

        <div className="flex-1 p-4 text-center mt-16 shadow-md border rounded-sm h-fit sticky top-[150px] space-y-3">
          <h4 className="font-bold text-secondary text-xl mt-2">KIA SÀI GÒN</h4>
          <p className="text-sm">
            Khách hàng vui lòng liên hệ để được tư vấn về giá xe cùng các chương
            trình khuyến mại mới nhất.
          </p>
          <p className="text-red-700 font-bold">Hotline: 0962.334.807</p>

          <BtnWithIcon
            content="Yêu cầu báo giá"
            icon={FaEdit}
            iconSize={18}
            customClasses="!bg-secondary !border-secondary hover:!text-secondary w-full"
          />
          <BtnWithIcon
            content="Đăng ký lái thử"
            icon={PiSteeringWheelFill}
            iconSize={20}
            customClasses="!bg-primary w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
