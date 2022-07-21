import React from "react";
import { Link } from "react-router-dom";
import { ContainerBtExp, ContainerExp, ContainerImg, GridSearch, ImgExp, TagsExp, TitleExp } from "../components/styles/Product-detail.styled";

export default function ProductDetail(){
    return(
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
                                <TagsExp>
                                <button className={""}>Modalidad</button>
                                    <button className={""}>Precio</button>
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    // )
                } 
            </GridSearch>
    )
}