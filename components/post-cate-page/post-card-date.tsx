import { formatShortDate, formatTime } from "@/lib/formatData";
import { FC } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

interface Props {
  date: number;
  customClasses?: string;
}

const PostCardDate: FC<Props> = ({ date, customClasses }): JSX.Element => {
  return (
    <p className={`flex items-center gap-1 ${customClasses}`}>
      <FaRegCalendarAlt className="-mt-[2px]" />
      {formatShortDate(date)}
      <span className="ml-4">{formatTime(date)}</span>
    </p>
  );
};

export default PostCardDate;
