import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  grids: {
    margin: "20px",
    padding: "20px",
  },
  links: {
    textDecoration: "none",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="center">
        <Grid item className={classes.grids}>
          {" "}
          <Typography color="primary">
            <Link className={classes.links} to="/">
              Blog
            </Link>
          </Typography>
        </Grid>{" "}
        <Grid item className={classes.grids}>
          {" "}
          <Typography color="primary">
            {" "}
            <Link className={classes.links} to="create">
              Write
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
