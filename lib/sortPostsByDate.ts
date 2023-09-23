import { Post } from "@/types";

export const sortNewestPosts = (posts: Post[]) => {
  const newPosts = posts.sort((a, b) => {
    if (a.date > b.date) return -1;

    return 1;
  });

  return newPosts;
};
