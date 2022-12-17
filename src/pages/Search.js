import React, { useState } from "react";

import {
  Typography,
  TextField,
  FormControl,
  Button,
  Stack,
  Box,
} from "@mui/material";

//search icon
import SearchIcon from "@mui/icons-material/Search";

import Navbar from "../components/navbar";

class Search extends React.Component {
  state = {
    images: [],
    searchTerm: "",
  };

  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();

    // Fetch the search results from the NASA API
    fetch(
      `https://images-api.nasa.gov/search?q=${this.state.searchTerm}&media_type=image`
    )
      .then((res) => res.json())
      .then((data) => {
        // Extract the image URLs from the search results
        const images = data.collection.items.map((item) => item.links[0].href);

        // Update the component's state with the search results
        this.setState({ images });
      });
  };

  render() {
    return (
      <>
        <Navbar />

        <Typography
          variant="h4"
          component="h1"
          mt={10}
          sx={{ textAlign: "center" }}
        >
          NASA Image Search
        </Typography>
        <Box sx={{ textAlign: "center" }} mt={1}>
          <FormControl>
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Search Term"
                variant="outlined"
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}
                size="small"
              />
              <Button variant="contained" onClick={this.handleSearchSubmit}>
                <SearchIcon />
              </Button>
            </Stack>
          </FormControl>
        </Box>
        <br />
        {/* Display the search results */}
        <ul>
          {this.state.images.map((image) => (
            <li key={image}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Search;
