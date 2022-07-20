import { Route, Routes } from "react-router-dom";
import ProductDetail from "../Product-detail/Product-detail";


export default function Router() {
    return(
        <Routes>
            <Route path= "/Catalogo" exact element ={<ProductDetail />}/>
        </Routes>
    )
}