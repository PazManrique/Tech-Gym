import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Carousel from "./components/Carousel";
import GlobalStyle from "./globalStyles";
import Footer from "./pages/Footer";
import Navbar from "./pages/NavBar";
import Router from "./Router/Router";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle/>
        <Navbar/>
        <Router/>
        <Carousel/>
        <Footer/>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
