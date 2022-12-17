import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";

//add background image from img folder
// import meteor from "./img/meteor.png";
//import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nasa" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
