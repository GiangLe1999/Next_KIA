"use client";

import { useOuterClick } from "@/hooks/useOuterClick";
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
  const innerRef = useOuterClick(() => setShowSearch(false));

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
    <div ref={innerRef}>
      <form
        style={{
          transform: showSearch ? "scale(1)" : "scale(0)",
          transformOrigin: "400px -10px",
        }}
        className={`absolute transition-all top-full right-9 p-4 bg-white rounded-sm shadow-search-block w-[400px] max-[1000px]:w-full max-[1000px]:left-0 max-[1000px]:right-0 max-[1000px]:top-[60px]`}
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
        </div>

        {error && (
          <p className="text-xs text-red-700 mt-1 flex items-center gap-[2px]">
            <AiOutlineWarning />
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
