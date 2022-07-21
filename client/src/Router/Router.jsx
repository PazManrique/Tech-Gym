import { Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactFrom.jsx";
import DetailPage from "../pages/Detail/DetailPage.jsx";
import Home from "../pages/Home";
import BodyCombatGallery from "../pages/ProductGallery/BodyCombatGallery.jsx";
import CardioGallery from "../pages/ProductGallery/CardioGallery.jsx";
import MeditacionGallery from "../pages/ProductGallery/MeditacionGallery.jsx";
import PilatesGallery from "../pages/ProductGallery/PilatesGallery.jsx";
import ResistenciaGallery from "../pages/ProductGallery/ResistenciaGallery.jsx";
import YogaGallery from "../pages/ProductGallery/YogaGallery.jsx";

export default function Router() {
    return(
        <Routes>
            <Route path= "/" exact element ={<Home/>}/>
            <Route path= "/BodyCombatCatalogo" exact element ={<BodyCombatGallery />}/>
            <Route path= "/PilatesCatalogo" exact element ={<PilatesGallery />}/>
            <Route path= "/CardioCatalogo" exact element ={<CardioGallery />}/>
            <Route path= "/MeditacionGallery" exact element ={<MeditacionGallery />}/>
            <Route path= "/ResistenciaGallery" exact element ={<ResistenciaGallery />}/>
            <Route path= "/YogaGallery" exact element ={<YogaGallery />}/>
            <Route path="/DetalleProducto/:id" exact element ={<DetailPage />} />
            <Route path= "/ContactForm" exact element ={<ContactForm/>}/>
        </Routes>
    )
}