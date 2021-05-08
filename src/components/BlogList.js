import { Link } from "react-router-dom";
import { truncateString } from "../utils";
import {
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardAction,
  makeStyles,
  Typography,
} from "@material-ui/core";
import BlogCard from "./BlogCard";

const styles = makeStyles({
  blogs: {
    padding: "5px",
    margin: "5px",
  },
});

export default function BlogList({ blogs }) {
  const classes = styles();
  return (
    <Container>
      <Grid container spacing={3}>
        {" "}
        {blogs.map((blog) => {
          return (
            <Grid item key={blog.id} md={6} xs={12} lg={4}>
              {" "}
              <BlogCard blog={blog} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

//   <Typography variant="h6">{blog.author}</Typography>
//   <Typography variant="h5">{blog.title}</Typography>
//   <Typography variant="p">
//     {truncateString(blog.body, 200)}
//   </Typography>{" "}
//   <br />
//   <Link to={`/blog/${blog.id}`}>
//     {" "}
//     <Button size="small" variant="contained" color="primary">
//       read more
//     </Button>
//   </Link>
