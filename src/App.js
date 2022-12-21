import React from "react";
import { GlobalStyle } from "./GlobalStyle";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Resume from "./Components/Resume";

const App = () => (

  // <>
  // <Navbar />
 
  // <GlobalStyle />
  // </>

  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home />} />
      </Route>
      <Route path='/resume' element={<Resume />} />
    </Routes>
<GlobalStyle />

  </Router>


);

export default App;
