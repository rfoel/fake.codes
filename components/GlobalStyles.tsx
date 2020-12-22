import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    align-items: center;
    display: flex;
    font-size: 24px;
    justify-content: center;
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  body {
    font-family: monospace;
  }
`

export default GlobalStyles
