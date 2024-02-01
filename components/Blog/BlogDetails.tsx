import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Blog } from "contentlayer/generated";
import React from "react";
import { slug } from "github-slugger";

interface BlogDetailsProps {
  blog: Blog;
}

export const BlogDetails: React.FC<BlogDetailsProps> = ({
  blog,
}) => {
  return (
    <div
      className="
        px-2 md:px-10
        bg-accent text-light py-2
        flex items-center justify-around flex-wrap
        text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
      <time className="m-3">
        { format( parseISO( blog.publishedAt ), "LLLL d, yyyy" ) }
      </time>
      <span className="m-3">
        {/*<ViewCounter slug={ blogSlug }/>*/}
        ViewCounter
      </span>
      <div className="m-3">{ blog.readingTime.text }</div>
      <Link href={ `/categories/${ slug( blog.tags[0] ) }` } className="m-3">
        #{ blog.tags[0] }
      </Link>
    </div>
  );
};