import React from "react";
import { Link } from "react-router-dom";

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
      <div>
        <h1>NASA Image Search</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <label>
            Search Term:
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleSearchTermChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <br />

        <Link to="/nasa">
          <button>Home</button>
        </Link>
        <h2>Results</h2>
        {/* Display the search results */}
        <ul>
          {this.state.images.map((image) => (
            <li key={image}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
