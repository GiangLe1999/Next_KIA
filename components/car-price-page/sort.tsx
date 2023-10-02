import { Dispatch, FC, SetStateAction, ChangeEvent } from "react";

interface Props {
  loading: boolean;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Sort: FC<Props> = ({
  loading,
  sortBy,
  setSortBy,
  setCurrentPage,
}): JSX.Element => {
  const changeSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    setSortBy(e.target.value);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 bg-[#F3F3F3] round-sm shadow-md border py-3 px-4 sticky top-28 max-[1100px]:top-[60px] before:absolute before:bg-white before:h-28 before:-top-[113px] before:-left-1 before:w-[200%] z-50 text-sm max-[1100px]:before:hidden">
      <label className="w-[100px]">Sắp xếp theo: </label>
      <select
        disabled={loading}
        className="p-2 flex-1 border rounded-sm"
        onChange={(e) => changeSortHandler(e)}
        value={sortBy}
      >
        <option value="">--- Lựa chọn ----</option>
        <option value="asc">Giá từ cao đến thấp</option>
        <option value="desc">Giá từ thấp đến cao</option>
        <option value="a-z">Từ A đến Z</option>
      </select>
    </div>
  );
};

export default Sort;
