import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 400,
    height: 320,
    overflow: "hidden",
    marginTop: 30,
  },
  media: {
    height: 40,
  },
  marginAutoItem: {
    margin: "auto",
  },
  text: {
    fontWeight: "normal",
    fontSize: "20px",
    color: "blue",
  },
});

export default function CardItem(props) {
  const classes = useStyles();
  const { id, title, body } = props.post;
  const handleReadMore = props.handleReadMore;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              handleReadMore(id);
            }}
            variant="contained"
            color="primary"
            className={classes.marginAutoItem}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
