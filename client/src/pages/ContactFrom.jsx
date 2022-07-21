import React from "react";
import Form from "../components/contactForm/Form"
import { FormContainer } from "../components/styles/FormStyles";

export default function ContactForm(){
    return(
        <FormContainer>
            <h2>Contacta con tu profesor de forma directa!</h2>
            <Form/>
        </FormContainer>
    )
}