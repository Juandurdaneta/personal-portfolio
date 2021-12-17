import React from "react";
import { GlobalStyle } from "./GlobalStyle";
//components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
const App = () => (

  <>
  <Navbar />
  <Hero />
  <Services />
  <GlobalStyle />
  </>

);

export default App;
