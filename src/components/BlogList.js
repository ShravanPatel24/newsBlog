import React, { useState, useEffect } from "react";
import BlogPostItem from "./BlogPostItem";
import { Container, Grid, Button, CircularProgress } from "@mui/material";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=react&token=${process.env.REACT_APP_GNEWS_API_KEY}&page=${currentPage}&lang=en&max=${pageSize}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPosts(data.articles);
    } catch (error) {
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  return (
    <Container style={{ marginTop: "70px" }}>
      {loading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <>
          <Grid container spacing={3}>
            {posts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <BlogPostItem post={post} />
              </Grid>
            ))}
          </Grid>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default BlogPostList;
