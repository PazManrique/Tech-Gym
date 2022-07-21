import styled from "styled-components";

export const HomeContainerStyle = styled.section`
display: flex;
flex-wrap:wrap;
padding: 5%;  
margin: 5%;
`
export const Categoria = styled.section `
display: flex;
justify-content:space-around;
padding: 5%;
/* background-color: red; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
width: 30em;
height: 15em;
/* &:hover{

background-color: blue;


} */

`;
export const ContainerCategoria = styled.div `
    justify-content: space-between;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:#f5be30;

   
    
`;


export const TextCategoria = styled.h3 `
position: absolute;
top: 99%;
left:99%;

    color:#f5be30;
    

`
export const ImageImg = styled.img`
display: flex;
width:30em;
height:20em;
margin: 10%;
`;