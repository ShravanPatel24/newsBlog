import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Typography, Button, CardMedia } from "@mui/material";

const BlogPostDetails = () => {
  const location = useLocation();
  const { post } = location.state;
  const defaultImage =
    "https://images.unsplash.com/photo-1579532536935-619928decd08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxuZXdzJTIwYmxvZ3N8ZW58MHx8MHx8fDA%3D";

  return (
    <Container style={{ marginTop: "70px" }}>
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {new Date(post.publishedAt).toLocaleDateString()}
      </Typography>
      <CardMedia
        component="img"
        height="400"
        image={post.urlToImage || defaultImage}
        alt={post.title}
        style={{ marginTop: "20px" }}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <Typography variant="body1" paragraph style={{ marginTop: "20px" }}>
        <strong>Content: </strong> <br />
        {post.content || "Content not available."}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Description: </strong> <br />
        {post.description || "No description available for this post."}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Source:</strong> {post.source?.name || "Unknown"}
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Back to list
      </Button>
    </Container>
  );
};

export default BlogPostDetails;
