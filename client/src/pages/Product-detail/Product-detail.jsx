import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Getinfo from "../../services/Getinfo";
import { Banner, ContainerBtExp, ContainerExp, ContainerImg, GridSearch, Img, ImgExp, ProductGalleryStyle, TagsExp, TitleExp } from "../../components/styles/Product-detail.styled";
import { BsArrowLeftSquareFill } from "react-icons/bs";

export default function ProductDetail(){
    const {id} = useParams();
    const [info, setInfo] = useState([id])
    const [loading, setLoading] = useState(false)
    console.log(info)

    useEffect(()=>{
        setLoading(true)
        Getinfo()
            .then(data =>{
                setInfo(data[id])

                setLoading(false)
            })
    }, [])
    console.log(info)
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
        </ProductGalleryStyle>
    )
}