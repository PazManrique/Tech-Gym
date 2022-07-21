import styled from "styled-components";

export const HomeContainerStyle = styled.section`
display: flex;
flex-wrap:wrap; 
`
export const SectionCategories = styled.section `
display: flex;
justify-content:space-around;
flex-flow: row wrap;
padding: 5%;

`;

export const Categoria = styled.section `

/* background-color: red; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
width: 20em;
height: 12em;

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
display: flex;
justify-content: center;
align-items: centeR;

    color:#f5be30;
    

`
export const ImageImg = styled.img`
display: flex;
width:25em;
height:12em;
padding: 1% 1% 1% 1%;
`;