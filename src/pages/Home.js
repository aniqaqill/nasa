import React from "react";
import axios from "axios";

//import material ui components
import { Container, CircularProgress, Box, Typography } from "@mui/material";

//import navbar
import Navbar from "../components/navbar";

class home extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    //use axios to fetch data from the NASA API
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=jc63aHPramLEhvg8UV3A0aln9kdKTX2ejW76HMFS"
      )
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;

    // Check if the data is still loading
    if (data === null) {
      return (
        //make the item render in the middle using box
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    // Render the data
    return (
      //create a mui container
      <>
        <Navbar />
        <Container>
          <Typography variant="h4" component="h1" mt={10}>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {data.date}
          </Typography>
          <Typography variant="body2" mb={5}>
            {data.explanation}
          </Typography>
          <img src={data.url} alt="" />
        </Container>
      </>
    );
  }
}

export default home;
