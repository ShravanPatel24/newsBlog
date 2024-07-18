import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";

const About = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        About This Blog App
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Welcome to Blog Sphere!
        </Typography>
        <Typography variant="body1" paragraph>
          Blog App is a simple yet powerful blogging platform that allows users
          to explore articles on various topics, particularly focusing on
          technology, development, and industry trends.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Features:
        </Typography>
        <ul>
          <li>Browse a collection of blog posts</li>
          <li>View detailed articles with rich content</li>
          <li>Responsive design for a seamless experience on any device</li>
          <li>Easy navigation between different sections</li>
        </ul>
      </Paper>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Built With:
        </Typography>
        <Typography variant="body1" paragraph>
          This application is built using React, Material UI, and fetch data
          from the gnews API, ensuring a modern and efficient user experience.
        </Typography>
      </Paper>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="body2" color="textSecondary">
          Thank you for visiting our blog! We hope you enjoy reading the
          articles.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
