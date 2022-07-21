import { Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactFrom";
import ProductDetail from "../Product-detail/Product-detail";


export default function Router() {
    return(
        <Routes>
            <Route path= "/Catalogo" exact element ={<ProductDetail />}/>
            <Route path= "/Contact-Form" exact element ={<ContactForm/>}/>
        </Routes>
    )
}