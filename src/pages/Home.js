import useFetch from "../hooks/useFetch";
import BlogList from "../components/BlogList";

function App() {
  const { data: blogs, error, isLoading } = useFetch(
    "http://localhost:5000/blogs"
  );
  return (
    <div className="">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default App;
