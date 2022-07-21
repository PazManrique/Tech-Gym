import React, {useState} from "react";
import {Link} from "react-router-dom"
import { BtnForm, FormStyle } from "../styles/FormStyles";

export default function ContactFormStyle(){
    return(
            <FormStyle onClick={""}>
                <section className="info">
                    <label htmlFor="name">Nombre del alumno:</label>
                    <input 
                    id="name"
                    placeholder="Escribe tu nombre" 
                    type="text" 
                    name="name" 
                    />
                </section>    
                
                <section className="info">
                    <label htmlFor="message">Escribe aquí tu mensaje para que lo lea el profesor:</label>
                    <textarea id="message" name="message" rows="5" cols="50" placeholder="Describe brevemente el tu motivo de consulta que se lo haremos 
                    llegar al profesor."></textarea>
                </section>

                <BtnForm className="btns">
                    <button type="reset" className="bt1">Resetear</button>
                    <button className="bt2"><Link to="/" className="link">Cancelar</Link></button>
                    <button type="submit" className="bt3">Enviar</button>
                </BtnForm>
            </FormStyle>
    )
}