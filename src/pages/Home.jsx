import React from "react";
import Carousel from "../components/Carousel";
import {
  Categoria,
  ContainerCategoria,
  HomeContainerStyle,
  ImageImg,
  
} from "../components/styles/Home.styled";

export default function Home() {
  return (
    <HomeContainerStyle>
      <section>
        <Carousel />
      </section>
      <section className="categorias">
        <Categoria>
          <ContainerCategoria>
            <h3>BodyCombat</h3>
            <ImageImg src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVwb3J0ZSUyMGRlJTIwZnVlcnphfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </ContainerCategoria>
        </Categoria>
      </section>
      <section className="categorias">
        <Categoria>
          <ContainerCategoria>
            <h3>Pilates</h3>
            <ImageImg src="https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsYXRlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </ContainerCategoria>
        </Categoria>
      </section>
      <section className="categorias">
        <Categoria>
          <ContainerCategoria>
            <h3>Yoga</h3>
            <ImageImg src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </ContainerCategoria>
        </Categoria>
      </section>
      <section className="categorias">
        <Categoria>
          <ContainerCategoria>
            <h3>Meditacion</h3>
            <ImageImg src="https://images.unsplash.com/photo-1531986733711-de47444e8cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhY2lvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </ContainerCategoria>
        </Categoria>
      </section>
      <section className="categorias">
        <Categoria>
          <ContainerCategoria>
            <h3>Resistencia</h3>
            <ImageImg src="https://images.unsplash.com/photo-1648176778246-ffa7428a4ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVwb3J0ZSUyMGRlJTIwcmVzaXN0ZW5jaWF8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </ContainerCategoria>
        </Categoria>
      </section>
      <section className="categorias">
        <Categoria>
          <ContainerCategoria>
            <h3>Cardio</h3>
            <ImageImg src="https://images.unsplash.com/photo-1614691771330-13f4e0deec54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </ContainerCategoria>
        </Categoria>
      </section>
    </HomeContainerStyle>
  );
}
