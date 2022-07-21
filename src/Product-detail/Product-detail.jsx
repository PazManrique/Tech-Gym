import React from "react";
import { Link } from "react-router-dom";
import { Banner, ContainBack, ContainerBtExp, ContainerExp, ContainerImg, GridSearch, Img, ImgExp, ProductGalleryStyle, TagsExp, TitleExp } from "../components/styles/Product-detail.styled";
import { BsArrowLeftSquareFill } from "react-icons/bs";
export default function ProductDetail(){
    return(
        <ProductGalleryStyle>
            <ContainBack>
            <Link className="btnAtras" to="/"><BsArrowLeftSquareFill/></Link>
            </ContainBack>
        <Banner>
        <Img src={""} alt={""} />
        </Banner>
    <GridSearch>     
        
                {     
                    // info.map ((singleExp, i)=> 
                        <ContainerExp key={""}>
                            <Link to={""} state={""}> 
                                <ContainerImg>
                                    <ImgExp src={""} alt={""}/>
                                    <TitleExp className='titlexp'>{""}</TitleExp>
                                </ContainerImg>
                            </Link>
                            
                            <section>
                                <ContainerBtExp>
                                    <button className={""}>Instuctor</button>
                                    <button className={""}>Fecha</button>
                                    <button className={""}>Horario</button>
                                </ContainerBtExp>
                                <ContainerBtExp>
                                <button className={""}>Modalidad</button>
                                    <button className={""}>Precio</button>
                                </ContainerBtExp>
                            </section>
                        </ContainerExp>
                    // )
                } 
            </GridSearch>
            </ProductGalleryStyle>
    )
}