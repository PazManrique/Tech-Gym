import React from "react";
import { ContainerBtExp, ContainerExp, ContainerImg, GridSearch, ImgExp, TagsExp, TitleExp } from "./Product-detail.styled";

export default function ProductDetail(){
    <GridSearch>      
                {     
                    info.map ((singleExp, i)=> 
                        <ContainerExp key={i}>
                            <Link to={`/${i}/detail`} state={{etiquetaActiva}}> 
                                <ContainerImg>
                                    <ImgExp src={singleExp.img} alt={singleExp.titulo}/>
                                    <TitleExp className='titlexp'>{singleExp.titulo}</TitleExp>
                                </ContainerImg>
                            </Link>
                            
                            <section>
                                <ContainerBtExp>
                                    <button className={etiquetaActiva==='Ubicación'?'selectedButton':''}>{singleExp.Ubicacion}</button>
                                    <button className={etiquetaActiva==='Transporte'?'selectedButton':''}>{singleExp.Transporte}</button>
                                    <button className={etiquetaActiva==='Duración'?'selectedButton':''}>{singleExp.Duracion}</button>
                                </ContainerBtExp>
                                <TagsExp>
                                    <section>
                                        <h5>{singleExp.id}</h5>
                                        <p>{singleExp.precio} por persona</p>
                                    </section>
                                    
                                    <Link to='/' className='link'>Reserva ahora</Link>      
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    )
                } 
            </GridSearch>
}