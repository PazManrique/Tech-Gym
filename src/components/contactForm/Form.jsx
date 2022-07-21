import React, {useState} from "react";
import {Link} from "react-router-dom"

export default function ContactForm(){
    return(
        <section>
            <form onClick={""}>
                <section>
                    <label htmlFor="name">Nombre del alumno:</label>
                    <input 
                    id="name"
                    placeholder="Escribe tu nombre" 
                    type="text" 
                    name="name" 
                    />
                </section>    
                
                <section>
                    <label htmlFor="message">Escribe aquí tu mensaje para que lo lea el profesor:</label>
                    <textarea id="message" name="message" rows="5" cols="50">Describe brevemente el tu motivo de consulta que se lo haremos 
                    llegar al profesor.</textarea>
                </section>

                <section>
                    <button type="reset">Resetear</button>
                    <button><Link to="/">Cancelar</Link></button>
                    <button type="submit">Enviar</button>
                </section>
            </form>
        </section>
    )
}