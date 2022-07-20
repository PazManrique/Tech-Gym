import React, { Fragment } from "react";
<<<<<<< HEAD
import Carousel from "./components/Carousel";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 8b08ed99bfa8f63c0cd15984b286213969e8fefe
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
<<<<<<< HEAD
        <Carousel />
=======
        <Router/>
>>>>>>> 8b08ed99bfa8f63c0cd15984b286213969e8fefe
        <Footer/>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
