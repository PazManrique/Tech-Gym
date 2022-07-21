import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import ProductDetail from "../Product-detail/Product-detail";
import DetailPage from "../pages/Detail/DetailPage";
import Home from "../pages/Home";

=======
import ContactForm from "../pages/ContactFrom.jsx";
import DetailPage from "../pages/Detail/DetailPage.jsx";
import Home from "../pages/Home";
import BodyCombatGallery from "../pages/ProductGallery/BodyCombatGallery.jsx";
import CardioGallery from "../pages/ProductGallery/CardioGallery.jsx";
import MeditacionGallery from "../pages/ProductGallery/MeditacionGallery.jsx";
import PilatesGallery from "../pages/ProductGallery/PilatesGallery.jsx";
import ResistenciaGallery from "../pages/ProductGallery/ResistenciaGallery.jsx";
import YogaGallery from "../pages/ProductGallery/YogaGallery.jsx";
>>>>>>> main

export default function Router() {
    return(
        <Routes>
<<<<<<< HEAD
            <Route path= "/Catalogo" exact element ={<ProductDetail />}/>
            <Route path="/DetalleProducto" exact element ={<DetailPage />} />
            <Route path= "/" exact element ={<Home/>}/>
=======
            <Route path= "/" exact element ={<Home/>}/>
            <Route path= "/BodyCombatCatalogo" exact element ={<BodyCombatGallery />}/>
            <Route path= "/PilatesCatalogo" exact element ={<PilatesGallery />}/>
            <Route path= "/CardioCatalogo" exact element ={<CardioGallery />}/>
            <Route path= "/MeditacionGallery" exact element ={<MeditacionGallery />}/>
            <Route path= "/ResistenciaGallery" exact element ={<ResistenciaGallery />}/>
            <Route path= "/YogaGallery" exact element ={<YogaGallery />}/>
            <Route path="/DetalleProducto/:id" exact element ={<DetailPage />} />
            <Route path= "/ContactForm" exact element ={<ContactForm/>}/>
>>>>>>> main
        </Routes>
    )
}