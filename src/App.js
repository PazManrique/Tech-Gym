import React, { Fragment } from "react";
import Carousel from "./components/Carousel";
import GlobalStyle from "./globalStyles";
import Footer from "./pages/Footer";
import Navbar from "./pages/NavBar";

function App() {
  return (
    <Fragment>
        <GlobalStyle/>
        <Navbar/>
        <Carousel />
        <Footer/>
    </Fragment>
  );
}

export default App;
