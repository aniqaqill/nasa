// import React from "react";
// import { Link } from "react-router-dom";

// class home extends React.Component {
//   state = {
//     data: null,
//   };

//   componentDidMount() {
//     // Fetch the data from the NASA API
//     fetch(
//       "https://api.nasa.gov/planetary/apod?api_key=jc63aHPramLEhvg8UV3A0aln9kdKTX2ejW76HMFS"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         // Update the component's state with the fetched data
//         this.setState({ data });
//       });
//   }

//   render() {
//     const { data } = this.state;

//     // Check if the data is still loading
//     if (data === null) {
//       return <p>Loading...</p>;
//     }

//     // Render the data
//     return (
//       <div>
//         <h1>{data.title}</h1>
//         <p>{data.explanation}</p>
//         <img src={data.url} alt="" />

//         <Link to="/search">
//           <button>Search</button>
//         </Link>
//       </div>
//     );
//   }
// }

// export default home;
