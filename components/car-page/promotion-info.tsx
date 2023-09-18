import { FC } from "react";

interface Props {
  content: string;
  name: string;
}

const PromotionInfo: FC<Props> = ({ content, name }): JSX.Element => {
  return (
    <div className="text-white text-sm bg-quaternary rounded-[3px] p-6 wrapper-shadow">
      <p className="font-bold text-center">KHUYẾN MÃI MUA XE</p>
      <h2 className="text-center font-bold text-2xl uppercase mt-1 mb-3">
        {name}
      </h2>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default PromotionInfo;
