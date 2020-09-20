import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    textTransform: "capitalize",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "yellow",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        <Link to="/post" className={classes.link}>
          All Post
        </Link>
      </Button>
    </div>
  );
};

export default Header;
