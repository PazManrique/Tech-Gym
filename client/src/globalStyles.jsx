import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    --bg-nav: #596277;
    --bg-ft: #596277;
  }

  * {
    box-sizing: border-box; 
  } 

  body{
    margin: 0;
    padding: 0;
  }
`

/*--- Global ---*/ 
export const FlexRow = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export default  GlobalStyle