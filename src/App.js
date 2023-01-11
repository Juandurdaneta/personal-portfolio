import React from "react";
import { GlobalStyle } from "./GlobalStyle";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import ScrollToTop from "./ScrollToTop";
import Project from "./Components/Project";
const App = () => (

  // <>
  // <Navbar />
 
  // <GlobalStyle />
  // </>

  <Router>

    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home />} />
      </Route>
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:projectId' element={<Project />}/>
    </Routes>

    <GlobalStyle />

  </Router>


);

export default App;
