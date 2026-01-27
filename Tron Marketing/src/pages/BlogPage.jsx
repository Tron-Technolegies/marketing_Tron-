import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { blogs } from "../utils/blogs";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <h1 className="my-5 text-3xl font-semibold text-center">All Blogs</h1>
      <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center justify-center mx-auto my-7">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.title}
            className="shadow-xl p-2 w-full bg-white h-full"
          >
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-meta">
              <span>{blog.author}</span> {"• "}
              <span>{blog.date}</span>
            </div>
            <div className="blog-content">
              <h4>{blog.title?.slice(0, 50)}....</h4>
              <div className="blog-topic-container">
                {blog.topic.map((topic, index) => (
                  <span key={index} className="blog-topic">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
