import React from "react";
import { GlobalStyle } from "./GlobalStyle";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => (

  // <>
  // <Navbar />
 
  // <GlobalStyle />
  // </>

  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
<GlobalStyle />

  </Router>


);

export default App;
