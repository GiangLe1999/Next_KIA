import SubPageHeader from "@/components/sub-page-header";
import { postsSubHeaderItems } from "@/data/posts-page";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PostsPageLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <SubPageHeader items={postsSubHeaderItems} customClasses="mt-[61px]" />
      <div className="mt-14">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default PostsPageLayout;
