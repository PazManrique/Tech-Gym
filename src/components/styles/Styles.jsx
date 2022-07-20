import styled from 'styled-components'

/*--- Global ---*/ 
export const FlexRow = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

/*--- Navbar ---*/
export const NavStyle = styled(FlexRow)`
    background-color: var(--bg-nav);
    padding: 0.1em;

    img{
        height: 4em;
        width: 10em;
    }
    
    input{
    width: 20em;
    }
   
`