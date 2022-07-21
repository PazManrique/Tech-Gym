import React, {useState, useEffect} from 'react'
import Carousel from '../components/Carousel'
import { Categoria, ContainerCategoria, HomeContainerStyle, Img, TextCategoria } from '../components/styles/Home.styled'
import {Link} from "react-router-dom"
import Getinfo from '../services/Getinfo'

export default function Home() {
  const [info, setInfo] = useState([])

  useEffect(()=>{
    Getinfo()
      .then(data =>{
        console.log(data)
        setInfo(data)
      })
  }, [])

  return (
    <HomeContainerStyle>
      <section>
      <Carousel/>
      </section>
      <section className="categorias">
      <Link to={`/${info}/detail`}> 
        <Categoria>
            <ContainerCategoria>
              <h3>Yoga</h3>
            </ContainerCategoria>
        </Categoria>
       </Link>
      </section>
    </HomeContainerStyle>  
  )
}
