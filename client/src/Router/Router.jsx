import { Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactFrom";
import ProductDetail from "../Product-detail/Product-detail";
import Home from "../pages/Home";


export default function Router() {
    return(
        <Routes>
            <Route path= "/Catalogo/:id" exact element ={<ProductDetail />}/>
            <Route path= "/Contact-Form" exact element ={<ContactForm/>}/>
            <Route path= "/" exact element ={<Home/>}/>
        </Routes>
    )
}