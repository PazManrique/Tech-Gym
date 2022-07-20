import styled from "styled-components";

export const GridSearch = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 15em);
    justify-content: center;
    align-items: center;
    place-items: center;
    column-gap: 6em;
    row-gap: 5em;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 4em;
    margin-right: 4em;

    
    @media (max-width: 1200px) {
        &{
            grid-template-rows: repeat(2, 100%);
            grid-template-columns: repeat(2, 15em);
            column-gap: 6em;
        }
    }

    @media (max-width: 700px) {
        &{
            grid-template-rows: repeat(1, 100%);
            grid-template-columns: repeat(1, 15em);
        }
    }   
  
`

export const ContainerImg = styled.section`
    position: relative;
    text-align: center;
    width: 249px; 
    height: 381px;
    margin-bottom: 1em;

    &:hover{
        background-color: var(--hover-secondary);
    }
` 

export const ImgExp = styled.img`
    width: 249px; 
    height: 381px;
    opacity: 1;
    transition: opacity .5s;

    &:hover {
        opacity: 0.5;
    }
`

export const TitleExp = styled.h4`
    color: var(--font-color-2);
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`

export const ContainerExp = styled.section`
    width: 15.55em;  
`

export const TagsExp = styled(FlexRow)`
    justify-content: space-between;

    h5{
        color: var(--font-color-1)
    }

    p{
        opacity: 0.5;
    }

    .link{
        color: var(--font-color-3);
        text-decoration: none;

        &:hover{
            color: var(--hover-secondary)
        }
    }
`

export const ContainerBtExp = styled.section`
    display: flex;
    gap: 0.5em;
    
    button{
        width: 6em;
        border-radius: 2em;
        border: 0.1em solid var(--font-color-1);
        background: white;
        color: var(--font-color-1);
    };

    button.selectedButton{
        border: 0.2em solid var(--font-color-read);;
        color: var(--font-color-read);
        font-weight: bold;
    }
`

export const FilterExp = styled(FlexRow)`
    justify-content: center;
    margin: 2em;

    .link{
        color: var(--font-color-3);
        text-decoration: none;

        &:hover{
            opacity: 0.5;
            text-decoration: underline  0.1em;
            text-underline-offset: 0.5em;
        }
    }
`

