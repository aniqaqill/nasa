//navbar component material ui
import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="fixed" color="secondary" fullWidth>
      <Toolbar>
        <Typography variant="h6">NASA</Typography>
        <Button color="inherit" component={Link} to="/nasa">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
