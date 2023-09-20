"use client";

import LoadingSpinner from "@/components/loading-spinner";
import CarList from "@/components/quotation-page/car-list";
import Filter from "@/components/quotation-page/filter";
import Sort from "@/components/quotation-page/sort";
import { CarType } from "@/types";
import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

export type QueryType = {
  line: string[];
  price: string[];
  fuel: string[];
  seats: string[];
  kind: string[];
};

const initialQuery = {
  line: [],
  price: [],
  fuel: [],
  seats: [],
  kind: [],
};

const ITEMS_PER_PAGE = 3;

const QuotationPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [sortBy, setSortBy] = useState("");
  const [query, setQuery] = useState<QueryType>(initialQuery);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [orginalPages, setOriginalPages] = useState(0);

  useEffect(() => {
    try {
      setError("");
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/filter`, {
        method: "POST",
        body: JSON.stringify({
          query,
          sortBy,
          limit: ITEMS_PER_PAGE || 3,
          currentPage: currentPage || 1,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            setLoading(false);
            setError(res.statusText);
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setCars(data.cars);
          setTotalPages(Math.ceil(data.carsLength / ITEMS_PER_PAGE));
          setOriginalPages(data.carsLength);
          setError("");
          window.scrollTo(0, 0);
        });
    } catch (error) {
      setLoading(false);
      setError(error as string);
    }
  }, [query, sortBy, currentPage]);

  return (
    <div className="container mt-28">
      <div className="flex mt-8 mb-16 gap-7 max-[1000px]:flex-col">
        <Filter
          query={query}
          setQuery={setQuery}
          loading={loading}
          setCurrentPage={setCurrentPage}
          setSortBy={setSortBy}
        />
        <div className="flex-1">
          <Sort
            sortBy={sortBy}
            setSortBy={setSortBy}
            loading={loading}
            setCurrentPage={setCurrentPage}
          />

          {cars.length > 0 && !error ? (
            <p className="mt-4 italic flex items-center text-xs justify-end">
              <AiOutlineCheck className="text-green-600 -mt-[2px]" size={16} />{" "}
              Tìm thấy {orginalPages} kết quả phù hợp
            </p>
          ) : null}

          {loading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <CarList cars={cars} error={error} />{" "}
              {cars.length > 0 && !error && (
                <div className="w-fit pagination mx-auto">
                  <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotationPage;
