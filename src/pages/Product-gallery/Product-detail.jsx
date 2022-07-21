import React from "react";
import { Link } from "react-router-dom";
import { ContainerBtExp, ContainerExp, ContainerImg, GridSearch, ImgExp, TagsExp, TitleExp } from "../../components/styles/Product-detail.styled";

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
                                    <button className={""}></button>
                                    <button className={""}></button>
                                    <button className={""}></button>
                                </ContainerBtExp>
                                <TagsExp>
                                    <section>
                                        <h5>{""}</h5>
                                        <p>{""} por persona</p>
                                    </section>
                                    
                                    <Link to='/' className='link'>Reserva ahora</Link>      
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    // )
                } 
            </GridSearch>
    )
}