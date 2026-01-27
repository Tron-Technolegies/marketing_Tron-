import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { blogs } from "../utils/blogs";
import { GoDotFill } from "react-icons/go";

export default function SingleBlogPage() {
  const { id } = useParams();
  console.log(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(blogs?.find((item) => item.id == id));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="my-7 max-w-7xl mx-auto  flex flex-col gap-3 items-center p-3 rounded-lg">
        <h1 className="text-3xl font-semibold leading-relaxed max-w-5xl text-center">
          {blog?.title}
        </h1>
        <div className="flex gap-2 justify-center items-center">
          <p>{blog?.author}</p>
          <GoDotFill />
          <p className="italic">{blog?.date}</p>
        </div>
        <div className="flex gap-7">
          {blog?.topic?.map((item) => (
            <p className="p-2 rounded-full blog-topic" key={item}>
              {item}
            </p>
          ))}
        </div>
        <img src={blog?.image} className="my-5 rounded-3xl" />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        ></div>
      </div>
    </div>
  );
}
