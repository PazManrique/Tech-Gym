import { Route, Routes } from "react-router-dom";
import ProductDetail from "../Product-detail/Product-detail";
import Home from "../pages/Home";


export default function Router() {
    return(
        <Routes>
            <Route path= "/Catalogo" exact element ={<ProductDetail />}/>
            <Route path= "/" exact element ={<Home/>}/>
        </Routes>
    )
}