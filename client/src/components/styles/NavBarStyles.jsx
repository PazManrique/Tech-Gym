import styled from 'styled-components'
import {FlexRow} from "../../globalStyles"

export const NavStyle = styled(FlexRow)`
    display: flex;
    flex-flow: row wrap;
    background-color: var(--bg-nav);
    padding: 0.1em;
    margin: 3vw;
    
    h2{
        color:white;
        width: 30vw;
        text-align: center;
    }
    img{
        height: 4em;
        width: 10em;
    }
    
    input{
    width: 20em;
    }

    button {
        border: none;
        background: none;
    }
`