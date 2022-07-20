import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import Footer from "./pages/Footer";
import Navbar from "./pages/NavBar";

function App() {
  return (
    <Fragment>
        <GlobalStyle/>
        <Navbar/>
        <Footer/>
    </Fragment>
  );
}

export default App;
