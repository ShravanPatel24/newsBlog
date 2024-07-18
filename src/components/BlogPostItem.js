import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const defaultImage =
  "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMGJsb2dzfGVufDB8fDB8fHww";

const BlogPostItem = ({ post }) => (
  <Card style={{ marginTop: "30px" }}>
    <CardMedia
      component="img"
      height="140"
      image={post.urlToImage || defaultImage}
      alt={post.title}
      onError={(e) => {
        e.target.src = defaultImage;
      }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {post.title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {new Date(post.publishedAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        {post.description}
      </Typography>
      <Button
        size="small"
        color="primary"
        component={Link}
        to={`/post/${post.title}`}
        state={{ post }}
      >
        Read more
      </Button>
    </CardContent>
  </Card>
);

export default BlogPostItem;
