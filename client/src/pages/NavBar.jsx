import React from "react";
import logo from "../assets/logo.png"
import {BsCartFill} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { NavStyle } from "../components/styles/NavBarStyles";
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <header>
            <NavStyle>
                <Link to="/"><img src={logo} alt="LogoTechGym"/></Link>
                <h2>Es hora de desarrollar tu cuerpo. Levántate de la silla!</h2>
                <IconContext.Provider value={{ size:'2em', color:'' }}>
                    <button><BsCartFill/></button>         
                </IconContext.Provider>
                <input type='text' placeholder='Busca la actividad que prefieras' className="buscador"/>  
            </NavStyle>
        </header>
    )
}