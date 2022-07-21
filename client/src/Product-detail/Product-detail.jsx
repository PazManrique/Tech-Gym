import React, { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import { ContainerBtExp, ContainerExp, ContainerImg, GridSearch, ImgExp, TagsExp, TitleExp } from "../components/styles/Product-detail.styled";
import Getinfo from "../services/Getinfo";

export default function ProductDetail(){
    const {id} = useParams();
    const [info, setInfo] = useState([id])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        Getinfo()
            .then(data =>{
                setInfo(data[id])
                setLoading(false)
            })
    }, [])

    if (loading) return <section>Cargando...</section>

    return(
        <GridSearch>      
                {     
                    info.map ((singleAct, i)=> 
                        <ContainerExp key={i}>
                            <Link to={i}> 
                                <ContainerImg>
                                    <ImgExp src={singleAct.img} alt={singleAct.titulo}/>
                                    <TitleExp className='titlexp'>{singleAct.titulo}</TitleExp>
                                </ContainerImg>
                            </Link>
                            
                            <section>
                                <ContainerBtExp>
                                    <button className={""}>{singleAct.intructor}</button>
                                    <button className={""}>{singleAct.fecha}</button>
                                    <button className={""}>{singleAct.horario}</button>
                                </ContainerBtExp>
                                <TagsExp>
                                    <button className={""}>{singleAct.modalidad}</button>
                                    <button className={""}>{singleAct.precio}</button>
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    )
                } 
        </GridSearch>
    )
}