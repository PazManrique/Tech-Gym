import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
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
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
