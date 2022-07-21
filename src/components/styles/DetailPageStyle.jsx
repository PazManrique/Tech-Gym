import styled from "styled-components";

export const ContainerDetail = styled.section`
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 1vw;
` 

export const ContainerImgDetail = styled.section`
    position: relative;
` 

export const ContainerImgPrincipal = styled.div `
    display:flex;
    width:15%;
    height: 15%;
` 

export const ImgProduct = styled.img `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin:1vw;
    opacity: 1;
    transition: opacity .5s
` 

export const ContainerImgSelect = styled.section `
    position: absolute;
    top: 80%;
    left: 60%;
    transform: translate(-50%, -50%);
` 

export const ImgSelect = styled.img `
    width: 10vw;
    margin: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
` 

export const ContainerInfoDetail = styled.section`
    display:flex;
    justify-content: center;
    flex-direction: column;
`
export const ContainerInfo = styled.section`
    background: rgba(172, 131, 24, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    margin: 3%;
    padding-bottom:5%;
    width: 40vw;
    border: 1px solid #000000;
    border-radius: 10px;
`

export const ContainerDescription = styled.section`
   margin: 1vw;
`

export const TitleProduct = styled.h2`
    color: rgba(70, 161, 190, 1);
    text-align: center;
`

export const ContainerOtherProducts = styled.section`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    margin: 2vw;
`
export const ButtonsDetail = styled.section`
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin-top: 1vw;
`
export const ButtonAdd = styled.button`
    background: rgba(70, 161, 190, 1);
    width: 100px;
    height: 40px;
    left: 1758px;
    top: 1118px;
    border:none;
    color: white;
    front-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 23.5052px;
`

export const ButtonContact = styled.button`
    background: rgba(209, 154, 13, 1);
    border:none;
    width: 100px;
    height: 40px;
    left: 1758px;
    top: 1118px;
    color: white;
    front-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 23.5052px;
`

export const ContainerImgOtherProducts = styled.section`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-flow: row wrap;
` 

export const TitleOtherProducts = styled.h2`
    color: rgba(70, 161, 190, 1);
`

export const ImgOtherProducts = styled.img `
    width: 20vw;
    height:20vh;
    margin: 1vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
` 