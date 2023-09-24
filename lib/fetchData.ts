import { cache } from "react";

export const getCarDataByCategory = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/by-category`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCarData = async (carSlug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/car?slug=${carSlug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCarContent = async (carSlug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/car-content?slug=${carSlug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<{
      content: string;
      data: { promotion: string };
    }>;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsLinesData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars/lines`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getCarRegistration = cache(async (carName: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/car/registration?name=${carName}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
});

export const getAllPostsData = async (cate: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${cate}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPostData = async (cateSlug: string, postSlug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?cate_slug=${cateSlug}&post_slug=${postSlug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedPosts = async (cateSlug: string, postSlug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/related-posts?cate_slug=${cateSlug}&post_slug=${postSlug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
