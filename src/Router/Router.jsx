import { Route, Routes } from "react-router-dom";
import ProductDetail from "../Product-detail/Product-detail";
import DetailPage from "../pages/Detail/DetailPage";


export default function Router() {
    return(
        <Routes>
            <Route path= "/Catalogo" exact element ={<ProductDetail />}/>
            <Route path="/DetalleProducto" exact element ={<DetailPage />} />
        </Routes>
    )
}