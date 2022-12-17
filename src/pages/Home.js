import React from "react";
import axios from "axios";

//import material ui components
import { Container } from "@mui/material";

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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;

    // Check if the data is still loading
    if (data === null) {
      return <p>Loading...</p>;
    }

    // Render the data
    return (
      //create a mui container
      <>
        <Navbar />
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
        <img src={data.url} alt="" />
      </>
    );
  }
}

export default home;
