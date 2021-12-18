import React from "react";
import { GlobalStyle } from "./GlobalStyle";
//components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Resume from "./Components/Resume";
const App = () => (

  <>
  <Navbar />
  <Hero />
  <Features />
  <Resume />
  <GlobalStyle />
  </>

);

export default App;
