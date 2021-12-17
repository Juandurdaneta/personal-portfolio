import React from "react";
import { GlobalStyle } from "./GlobalStyle";
//components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
const App = () => (

  <>
  <Navbar />
  <Hero />
  <Features />
  <GlobalStyle />
  </>

);

export default App;
