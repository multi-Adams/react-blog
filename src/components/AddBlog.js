import { useState } from "react";
import { useHistory } from "react-router";

export default function AddBlog() {
  const [author, setAuthor] = useState("Ade");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [noContent, setNoContent] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { author, body, title };
    setLoading(true);

    if (newBlog.title && newBlog.author && newBlog.body) {
      fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      }).then(() => setLoading(false));
      setTitle("");
      setAuthor("");
      setBody("");
      history.push("/");
    } else {
      setNoContent("Please write a blog post!");
    }
    setLoading(false);
  };
  return (
    <div>
      <h2>Add a new post</h2>
      {loading && <div>Loading......</div>}

      <p>{noContent}</p>

      <form onSubmit={handleSubmit}>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="ade">Ade</option>
          <option value="adams">Adams</option>
          <option value="lee">Lee</option>
        </select>
        <br />
        <input
          placeholder="Blog Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Blog content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />{" "}
        <br />
        {loading && <button>Adding blog</button>}
        {!loading && <button>Add blog</button>}
      </form>
    </div>
  );
}
