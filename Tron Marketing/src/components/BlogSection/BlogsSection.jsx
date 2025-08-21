import React from "react";
import "./BlogSection.css";

export default function BlogsSection() {
  const blogs = [
    {
      author: "Yadhu",
      date: "May 20, 2023",
      title: "Blog 1",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      topic: ["Leadership", "Management", "Business"],
      image: "/blog-img.png",
    },
    {
      author: "Yadhu",
      date: "May 20, 2023",
      title: "Blog 2",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      topic: ["Leadership", "Management", "Business"],
      image: "https://placehold.co/400x250/cccccc/333333?text=Blog+2",
    },
    {
      author: "Yadhu",
      date: "May 20, 2023",
      title: "Blog 3",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      topic: ["Leadership", "Management", "Business"],
      image: "https://placehold.co/400x250/cccccc/333333?text=Blog+3",
    },
  ];
  return (
    <section className="blogs-section">
      <div className="title">
        <h4>From Our Blog</h4>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-meta">
              <span>{blog.author}</span> {"• "}
              <span>{blog.date}</span>
            </div>
            <div className="blog-content">
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
              <div className="blog-topic-container">
                {blog.topic.map((topic, index) => (
                  <span key={index} className="blog-topic">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="/bg-icon-circle.png" alt="" className="bg-icon-circle" />
    </section>
  );
}
