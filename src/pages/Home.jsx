import React from 'react'
import Carousel from '../components/Carousel'
import { Categoria, ContainerCategoria, HomeContainerStyle, Img, TextCategoria } from '../components/styles/Home.styled'


export default function Home() {
  return (
    <HomeContainerStyle>
    <section>
  <Carousel/>
  </section>
  <section className="categorias">
    <Categoria>
        <ContainerCategoria>
        
        <h3>Yoga</h3>
        </ContainerCategoria>
    </Categoria>
    </section>
    </HomeContainerStyle>

  
  
  
  
  )
}
