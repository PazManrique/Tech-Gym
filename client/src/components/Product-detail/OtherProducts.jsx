import React from "react";
import { ContainerImgOtherProducts, ContainerOtherProducts, ImgOtherProducts, TitleOtherProducts } from "../styles/DetailPageStyle";

export default function OtherProducts(){
    return(
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
    )
}