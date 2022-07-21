import styled from 'styled-components'
import {FlexRow} from "../../globalStyles"

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