import { Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactFrom";
import ProductDetail from "../pages/Product-detail/Product-detail"
import DetailPage from "../pages/Detail/DetailPage";
import Home from "../pages/Home";


export default function Router() {
    return(
        <Routes>
            <Route path= "/Catalogo/:id" exact element ={<ProductDetail />}/>
            <Route path= "/Contact-Form" exact element ={<ContactForm/>}/>
            <Route path="/DetalleProducto/:id" exact element ={<DetailPage />} />
            <Route path= "/" exact element ={<Home/>}/>
        </Routes>
    )
}