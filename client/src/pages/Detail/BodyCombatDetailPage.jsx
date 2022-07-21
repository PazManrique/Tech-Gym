import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FlexRow } from "../../globalStyles";
import { ContainerImgOtherProducts, ContainerOtherProducts, ImgOtherProducts, TitleOtherProducts, ButtonAdd, ButtonContact, ButtonsDetail, ContainerDescription, ContainerDetail, ContainerImgDetail, ContainerImgPrincipal, ContainerImgSelect, ContainerInfo, ContainerInfoDetail, ImgProduct, ImgSelect, TitleProduct} from "../../components/styles/DetailPageStyle.jsx";
import Getinfo from "../../services/Getinfo.jsx";
import { ReadMore } from "../../components/Product-detail/ReadMore.jsx"
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { ProductGalleryStyle } from "../../components/styles/ProductGallery.styled.jsx";

export default function BodyCombatDetailPage(){
    const {id} = useParams();
    const [singleDetail, setSingleDetail]= useState([id])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        Getinfo.getOneBodyCombat()
            .then(res =>{ 
                console.log(res)
                setSingleDetail(res[id])
                setLoading(false)
            })
    }, [id])

    if (loading) return <section>Cargando...</section>
    
    return(
        <section>
            <ContainerDetail>
                <ProductGalleryStyle>
                    <Link className="btnAtras" to="/Catalogo"><BsArrowLeftSquareFill/></Link>
                </ProductGalleryStyle>
                    <ContainerImgDetail>
                    <ContainerImgPrincipal>
                        <div>
                        <ImgProduct src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt={"singleDetail.título"}/>
                        </div>
                    </ContainerImgPrincipal>
                    <ContainerImgSelect>
                    <FlexRow>
                        <div>
                        <ImgSelect src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                        <div>
                            <ImgSelect src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                        <div>
                        <ImgSelect src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                        </FlexRow>
                    </ContainerImgSelect>
                    </ContainerImgDetail>
                
                <ContainerInfoDetail>
                    <ContainerInfo>
                        <TitleProduct>{/*singleDetail.título*/}</TitleProduct>
                            <ContainerDescription>
                                <ReadMore>
                                    <p>
                                        <h4>Description:</h4>
                                        {/*singleDetail.descripción*/}
                                    </p>
                                    <p>
                                        <h4>Precio: </h4>
                                        {/*singleDetail.precio*/}
                                    </p>
                                </ReadMore>
                            </ContainerDescription>
                    </ContainerInfo>
                        <ButtonsDetail>
                            <Link to="/ContactForm"><ButtonContact>Contactar</ButtonContact></Link>
                            <Link to="/"><ButtonAdd>Añadir</ButtonAdd></Link>
                        </ButtonsDetail>
                </ContainerInfoDetail>
            </ContainerDetail>

            <ContainerOtherProducts>
                <TitleOtherProducts>Otros Productos</TitleOtherProducts>
                    <ContainerImgOtherProducts>
                        <div>
                            <ImgOtherProducts src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                        <div>
                            <ImgOtherProducts src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                        <div>
                            <ImgOtherProducts src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                        <div>
                            <ImgOtherProducts src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                        </div>
                    </ContainerImgOtherProducts>
            </ContainerOtherProducts>
        </section>
    )
}