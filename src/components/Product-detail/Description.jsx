import React from "react";
import { Link } from "react-router-dom";
import { FlexRow } from "../../globalStyles";
import { ButtonAdd, ButtonContact, ButtonsDetail, ContainerDescription, ContainerDetail, ContainerImgDetail, ContainerImgPrincipal, ContainerImgSelect, ContainerInfo, ContainerInfoDetail, ImgProduct, ImgSelect, TitleProduct} from "../styles/DetailPageStyle";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { ContainBack } from "../styles/Product-detail.styled";

export default function Description(){
    return(
        <ContainerDetail>
            <ContainBack>
            <Link className="btnAtras" to="/"><BsArrowLeftSquareFill/></Link>
            </ContainBack>
                <ContainerImgDetail>
                <ContainerImgPrincipal>
                    <div>
                    <ImgProduct src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWplcmNpY2lvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
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
                    <TitleProduct>YOGA</TitleProduct>
                    <ContainerDescription>
                        <p>
                        <h4>Description:</h4>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                        </p>
                        <p>
                            <h4>Precio: 10€</h4>
                        </p>
                    </ContainerDescription>
                </ContainerInfo>
                <ButtonsDetail>
                    <ButtonContact>Contactar</ButtonContact>
                    <ButtonAdd>Añadir</ButtonAdd>
                </ButtonsDetail>
                </ContainerInfoDetail>
        </ContainerDetail>
    )
}