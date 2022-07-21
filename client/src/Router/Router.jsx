import { Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactFrom.jsx";
import BodyCombatDetailPage from "../pages/Detail/BodyCombatDetailPage.jsx";
import CardioDetailPage from "../pages/Detail/CardioDetailPage.jsx";
import MeditacionDetailPage from "../pages/Detail/MeditacionDetailPage.jsx";
import PilatesDetailPage from "../pages/Detail/PilatesDetailPage.jsx";
import ResistenciaDetailPage from "../pages/Detail/ResistenciaDetailPage.jsx";
import YogaDetailPage from "../pages/Detail/YogaDetailPage.jsx";
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
            <Route path= "/YogaDetail/:id" exact element ={<YogaDetailPage />} />
            <Route path= "/PilatesDetail/:id" exact element ={<PilatesDetailPage />} />
            <Route path= "/BodyCombatDetail/:id" exact element ={<BodyCombatDetailPage />} />
            <Route path= "/MeditacionDetail/:id" exact element ={<MeditacionDetailPage />} />
            <Route path= "/CardioDetail/:id" exact element ={<CardioDetailPage />} />
            <Route path= "/ResistenciaDetail/:id" exact element ={<ResistenciaDetailPage />} />
            <Route path= "/ContactForm" exact element ={<ContactForm/>}/>
        </Routes>
    )
}