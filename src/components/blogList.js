import React from "react";
import { Link } from "react-router-dom";
 import { useHistory } from "react-router-dom";

function BlogList({ blogs, title }) {
 
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">{title}</h2>
      {blogs.map((blog) => (
       <Link to={`/blog/${blog.id}`}>
        <div
          className="py-2.5 px-4  border-b border-zinc-50 hover:shadow-3xl"
          key={blog.id}
        >
            <h2 className="text-[20px] text-[#f1356d] mb-4">{blog.title}</h2>
            <p>Written by {blog.author}</p> 
        </div>
        </Link>
      ))}
    </div>
  );
} 

export default BlogList;
