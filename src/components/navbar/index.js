//navbar component material ui
import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6">NASA</Typography>
          <Button color="inherit" component={Link} to="/nasa">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/search">
            Search
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
