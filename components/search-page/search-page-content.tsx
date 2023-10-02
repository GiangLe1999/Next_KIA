"use client";

import { getSearchResults } from "@/lib/fetchData";
import { FC, useEffect, useState } from "react";
import RelatedPostCard from "../single-post-page/related-post-card";
import CarList from "../car-price-page/car-list";
import LoadingSpinner from "../loading-spinner";

interface Props {
  query: string;
}

const SearchPageContent: FC<Props> = ({ query }): JSX.Element => {
  const [posts, setPosts] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    setLoading(true);
    const results = await getSearchResults(query);
    setLoading(false);
    setPosts(results.posts);
    setCars(results.cars);
  };

  useEffect(() => {
    fetchResults();
  }, [query]);

  return (
    <>
      {loading ? (
        <div className="mt-24 min-h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="mt-24 min-h-screen">
          <h1 className="font-bold text-2xl mb-6">
            Tìm thấy {cars.length + posts.length} kết quả cho từ khóa{" "}
            <span className="text-red-700">
              &quot;{query}
              &quot;
            </span>
          </h1>

          <h2 className="mb-4 font-bold text-lg underline text-zinc-500">
            Tin tức ({posts.length} kết quả)
          </h2>
          <div className="grid grid-cols-3 gap-5 mb-10 max-[800px]:grid-cols-2 max-[545px]:grid-cols-1">
            {posts.map((post, index) => (
              <RelatedPostCard post={post} key={index} />
            ))}
          </div>

          <h2 className="mb-4 font-bold text-lg underline text-zinc-500">
            Sản phẩm ({cars.length} kết quả)
          </h2>
          <CarList cars={cars} isCarListPage isSearchPage />
        </div>
      )}
    </>
  );
};

export default SearchPageContent;
