import React from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(
    `http://localhost:5000/blogs/${id}`
  );
  return (
    <div>
      {error && <h3>{error}</h3>}
      {isLoading && <div>Loading....</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <br /> <p>{blog.body}</p> <br /> <p>Written By {blog.author}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
