import styled from 'styled-components'
import { FlexColumn, FlexRow } from '../../globalStyles'

export const FormContainer =styled(FlexColumn)`
    height: 83.2vh;  

    h2{
        color: #46A1BE;
    }
`

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    width: 80em;
    height: 30em;
    background-color: var(--bg-form);
    border-radius: 0.5em;

    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        label{
            margin-bottom: 0.5em;
        }

        input{
            width: 50em;
            border-radius: 0.8em;
            text-indent: 0.5em;  
            padding: 0.5em;
            border: solid 0.15em #5D657C;
        }

        textarea{
            width: 51.2em;
            border-radius: 1em;
            text-indent: 1em;  
            padding: 0.5em;
            border: solid 0.15em #5D657C;
        }
    }
`

export const BtnForm = styled(FlexRow)`
    gap: 13.5em;

    button{
        height: 2.5em;
        width: 6em;
        border-radius: 1.2em;
        border: none;
        font-weight: bold;
        box-shadow: 0em 0.2em 0.2em  rgba(0, 0, 0, 0.25);
    }

    .bt1{
        background-color: var(--bg-bt1);
    }

    .bt2{
        background-color: var(--bg-bt2);

        .link{
            text-decoration: none;
            color: black;
        }
    }

    .bt3{
        background-color: var(--bg-bt3);
    }
`