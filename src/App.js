import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./components/contactForm/Form";
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
        <LoginForm/>
        <Router/>
        <Footer/>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
