import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

interface Blog {
  title: string;
  url: string;
  description: string;
  image: {
    filePath: string;
    blurhashDataUrl: string;
  };
  publishedAt: string;
  tags: string[];
}

export const sortBlogs = (blogs: Blog[]) => {
  return blogs
    .slice()
    .sort((a: Blog, b: Blog) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
