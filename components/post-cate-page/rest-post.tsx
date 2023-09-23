"use client";

import { FC, useState, useEffect } from "react";
import HorizontalLargePostCard from "./horizontal-large-post-card";
import { Post } from "@/types";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useIsMount } from "@/hooks/useIsMount";

interface Props {
  posts: Post[];
}

const postPerPage = 4;

const RestPosts: FC<Props> = ({ posts }): JSX.Element => {
  const [renderedPosts, setRenderedPosts] = useState<Post[]>();

  const isMount = useIsMount();

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postPerPage);

  useEffect(() => {
    setRenderedPosts(
      posts.slice((currentPage - 1) * postPerPage, currentPage * postPerPage)
    );

    const sectionTop = document.getElementById("news-section")
      ?.offsetTop as number;

    if (!isMount) {
      window.scrollTo(0, sectionTop - 100);
    }
  }, [currentPage]);

  return (
    <div id="news-section" className="mt-14 space-y-14">
      <h3 className="font-bold text-2xl -mb-5">Có thể bạn quan tâm</h3>
      {renderedPosts?.map((post) => (
        <HorizontalLargePostCard key={post.title} post={post} />
      ))}

      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RestPosts;
