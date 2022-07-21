import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Getinfo from "../../services/Getinfo.jsx";
import { Banner, ContainerBtExp, ContainerExp, ContainerImg, GridSearch, Img, ImgExp, ProductGalleryStyle, TitleExp } from "../../components/styles/Product-detail.styled";
import { BsArrowLeftSquareFill } from "react-icons/bs";

export default function CardioGallery() {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    Getinfo.getCardio()
    .then(res =>{ 
            setInfo(res)
            setLoading(false)
        })
}, [])

  if (loading) return <section>Cargando...</section>

  return(
        <ProductGalleryStyle>
            <Link className="btnAtras" to="/"><BsArrowLeftSquareFill/></Link>
        <Banner>
            <Img src={""} alt={""} />
        </Banner>
        <GridSearch>      
                {     
                    info.map ((singleAct, i)=> 
                        <ContainerExp key={i}>
                            <Link to={`/DetalleProducto/${i}`}>
                                <ContainerImg>
                                    <ImgExp src={singleAct.img} alt={singleAct.título}/>
                                    <TitleExp className='titlexp'>{singleAct.título}</TitleExp>
                                </ContainerImg>
                            </Link>
                            
                            <section>
                                <ContainerBtExp>
                                    <button className={""}>{singleAct.instructor}</button>
                                    <button className={""}>{singleAct.fecha}</button>
                                    <button className={""}>{singleAct.horario}</button>
                                </ContainerBtExp>
                                <ContainerBtExp>
                                    <button className={""}>{singleAct.modalidad}</button>
                                    <button className={""}>{singleAct.precio}</button>
                                </ContainerBtExp>
                            </section>
                        </ContainerExp>
                    )
                } 
        </GridSearch>
        </ProductGalleryStyle>
    )

}