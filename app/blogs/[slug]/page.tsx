import { allBlogs, Blog } from "contentlayer/generated";
import Tag from "@/components/Elements/Tag";
import { slug } from "github-slugger";
import React from "react";
import Image from "next/image";

interface BlogPageProps {
  className?: string;
  blogs: Blog[];
}

export default function BlogPage ( { params }: { params: { slug: string }}) {

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug) as Blog;

  if (!blog) {
    // Handle case where blog is not found
    return <div>Blog Not Found</div>;
  }

  const firstTag = blog.tags && blog.tags.length > 0 ? blog.tags[0] : "";
  const imagePath = blog.image && blog.image.filePath ? blog.image.filePath.replace("../public", "") : '';
  const imageBlur = blog.image && blog.image.blurhashDataUrl ? blog.image.blurhashDataUrl : '';
  const imageWidth = blog.image && blog.image.width ? blog.image.width : 0;
  const imageHeight = blog.image && blog.image.height ? blog.image.height : 0;

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div
          className="
            w-full z-10
            flex flex-col items-center justify-center absolute
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={ firstTag }
            link={ `/categories/${ slug( firstTag ) }` }
            className="px-6 text-sm py-2"
          />
          <h1
            className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
          >
            { blog.title }
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60">
          <Image
            src={ imagePath }
            placeholder="blur"
            blurDataURL={ imageBlur }
            alt={ blog.title }
            width={ imageWidth }
            height={ imageHeight }
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </article>
  )
}