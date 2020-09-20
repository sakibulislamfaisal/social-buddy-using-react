import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 400,
    height: 330,
    overflow: "hidden",
    marginTop: "20px",
  },
  media: {
    height: 40,
  },
  marginAutoItem: {
    margin: "auto",
  },
  text: {
    color: "blue",
    fontWeight: "normal",
    fontSize: "16px",
    marginTop: "-1px",
  },
  bodyText: {
    fontSize: "14px",
    color: "black",
  },
  allComment: {
    color: "red",
  },
  content: {
    marginTop: "-20px",
  },
});
const Comment = (props) => {
  const classes = useStyles();
  const { name, email, postId, body } = props.comment;
  return (
    <div>
      <Card className={classes.root}>
        <h5 className={classes.allComment}>Comment of postId : {postId}</h5>
        <CardActionArea>
          <CardMedia />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              PostId : {postId}
            </Typography>
            <Typography className={classes.text}>Name : {name}</Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              Email : {email}
            </Typography>
            <Typography className={classes.bodyText}>Body : {body}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};
export default Comment;
