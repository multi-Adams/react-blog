import { Link } from "react-router-dom";
import { truncateString } from "../utils";

export default function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            {" "}
            <div className="">
              <h4 className=" text-yellow-400">{blog.author}</h4>
              <h3>{blog.title}</h3>
              <p>{truncateString(blog.body, 200)}</p> <br />
              <Link to={`/blog/${blog.id}`}>
                {" "}
                <button className=" ">read more</button>
              </Link>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}
