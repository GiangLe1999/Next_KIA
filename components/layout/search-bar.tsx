"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { ImSpinner } from "react-icons/im";
import { IoClose } from "react-icons/io5";

interface Props {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<Props> = ({ showSearch, setShowSearch }): JSX.Element => {
  const pathName = usePathname();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (query.trim().length < 2) {
      setError("Vui lòng nhập ít nhất 2 ký tự!");
      setLoading(false);
      return;
    }
    router.push(`/tim-kiem/${query}`);
    setLoading(false);
    setQuery("");
    setError("");
  };

  useEffect(() => {
    setShowSearch(false);
  }, [pathName]);

  return (
    <form
      style={{
        transform: showSearch ? "scale3d(1,1,1)" : "scale3d(1,0,1)",
      }}
      className={`absolute transition-all top-full right-9 p-4 bg-white rounded-sm shadow-search-block w-[400px] max-[1100px]:w-full max-[1100px]:left-0 max-[1100px]:right-0 max-[1100px]:top-[60px] origin-top`}
      onSubmit={searchHandler}
    >
      <p className="text-xs mb-1">Nhập từ khóa để tìm kiếm (*)</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="w-[70%] border rounded-sm outline-none bg-[#05141f08] h-9 p-3"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button
          type="submit"
          className="primary-btn !bg-primary !text-xs flex-1 max-[373px]:px-1"
        >
          {loading ? (
            <>
              <ImSpinner className="animate-spin" /> Searching
            </>
          ) : (
            "Tìm kiếm"
          )}
        </button>

        <button
          type="button"
          onClick={() => setShowSearch(false)}
          className="absolute top-0 right-0 bg-red-700 w-5 h-5 rounded-tr-sm grid place-items-center text-white text-base"
        >
          <IoClose />
        </button>
      </div>

      {error && (
        <p className="text-xs text-red-700 mt-1 flex items-center gap-[2px]">
          <AiOutlineWarning />
          {error}
        </p>
      )}
    </form>
  );
};

export default SearchBar;
