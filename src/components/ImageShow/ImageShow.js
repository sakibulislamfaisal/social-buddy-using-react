import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "100px",
    border: "1px solid green",
    marginTop: "25px",
  },
});

const ImageShow = (props) => {
  const classes = useStyles();
  const { picture } = props.image;
  return (
    <div>
      <img className={classes.image} src={picture && picture.large} alt="" />
    </div>
  );
};

export default ImageShow;
