import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Comment from "../Comment/Comment";
import { Grid } from "@material-ui/core";
import ImageShow from "../ImageShow/ImageShow";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "270px",
    width: "700px",
    justifyContent: "center",
    margin: "auto",
    marginTop: "30px",
    overflow: "hidden",
  },
  body: {
    backgroundColor: "darkslategray",
    color: "yellow",
    fontWeight: "600",
    boxSizing: "border-box",
    fontSize: "15px",
  },
  text: {
    textAlign: "justify",
    color: "yellow",
  },
  postDetail: {
    color: "white",
  },
}));

const CardItemDetail = (props) => {
  const classes = useStyles();
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [commentDetail, setCommentDetail] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPostDetail(data))
      .catch((err) => console.error(err));

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setCommentDetail(data));

    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setImage(data.results));
  }, []);
  const { userId, id, title, body } = postDetail;
  return (
    <div>
      <div className={classes.root}>
        <Paper variant="contained" className={classes.body}>
          <strong className={classes.postDetail}> Post Detail :</strong>
          <strong>
            <p>Id : {id}</p>
          </strong>
          <strong>
            <p>UserId : {userId}</p>
          </strong>
          <strong>
            <p>Title : {title}</p>
          </strong>
          <strong>
            <p>Body : {body}</p>
          </strong>
        </Paper>
      </div>
      <div>
        <Grid container spacing={5}>
          {commentDetail.map((comment) => (
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Comment comment={comment} key={comment.id}></Comment>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        {image.map((image) => (
          <ImageShow image={image} key={image && image.id.value}></ImageShow>
        ))}
      </div>
    </div>
  );
};

export default CardItemDetail;
