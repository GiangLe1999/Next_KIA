import { FC } from "react";

interface Props {
  content: string;
  name: string;
}

const PromotionInfo: FC<Props> = ({ content, name }): JSX.Element => {
  return (
    <div className="text-sm bg-white text-primary rounded-[3px] p-6 shadow-md border">
      <p className="font-bold text-center text-red-700">KHUYẾN MÃI MUA XE</p>
      <h2 className="text-center font-bold text-2xl uppercase mt-1 mb-3">
        KIA {name}
      </h2>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default PromotionInfo;
