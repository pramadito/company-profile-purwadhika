"use client";

import useGetBlogs from "../_hooks/useGetBlogs";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogList = () => {
  const { data: blogs, isPending } = useGetBlogs();

  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
      {isPending && <BlogCardSkeleton />}

      {blogs?.map((blog, index) => (
        <BlogCard key={blog.objectId} blog={blog} />
      ))}
    </section>
  );
};

export default BlogList;
