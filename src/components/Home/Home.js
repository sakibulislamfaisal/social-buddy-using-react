import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardItem from "../CardItem/CardItem";

const Home = (props) => {
  const [post, setPost] = useState([]);
  let history = useHistory();

  const handleReadMore = (id, postId) => {
    const url = `/posts/${id}`;
    history.push(url);
  };
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <Grid container spacing={5}>
          {post.map((pt) => (
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <CardItem
                post={pt}
                key={pt.id}
                handleReadMore={handleReadMore}
              ></CardItem>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
