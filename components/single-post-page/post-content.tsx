"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";
import Image from "next/image";
import { formatLongDate } from "@/lib/formatData";

interface Props {
  content: MDXRemoteSerializeResult;
  title: string;
  date: number;
}

const components = { Image };

const PostContent: FC<Props> = ({ content, title, date }): JSX.Element => {
  return (
    <div className="prose postContent overflow-hidden">
      <h1 className="text-xl mb-1">{title}</h1>
      <time className="text-[#acacac] text-sm">{formatLongDate(date)}</time>
      <MDXRemote {...content} components={components} />
    </div>
  );
};

export default PostContent;
