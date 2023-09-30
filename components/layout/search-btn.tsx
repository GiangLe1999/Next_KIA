"use client";

import useDropdown from "@/hooks/useDropdown";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";

interface Props {}

const SearchBtn: FC<Props> = (props): JSX.Element => {
  const [query, setQuery] = useState("");
  const { show, setShow, innerRef } = useDropdown();
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

  return (
    <div ref={innerRef} className="relative" onClick={() => setShow(true)}>
      <FaSearch size={14} className="cursor-pointer" />

      <form
        style={{
          transform: show ? "scale(1)" : "scale(0)",
          transformOrigin: "400px -10px",
        }}
        className={`absolute transition-all top-[220%] right-0 p-4 bg-white rounded-sm shadow-search-block w-[400px]`}
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
            className="primary-btn !bg-primary !text-xs flex-1"
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

export default SearchBtn;
