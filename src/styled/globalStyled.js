import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:'Roboto', sans-serif;
    font-size: 16px;
    line-height: 24px;
  }
`

export default GlobalStyle
