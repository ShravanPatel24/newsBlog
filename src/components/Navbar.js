import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        {location.pathname !== "/" && (
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ marginRight: 2 }}
          >
            Home
          </Button>
        )}
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
