import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="m-6">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <CreateBlog />
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
