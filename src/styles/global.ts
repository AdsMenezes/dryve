import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  :root {
    --white: #ffffff;
    --primary: #0065FF;
    --secondary: #1D2C4B;
    --info: #CCE8FE;
    --warning: #FFAB00;
    --danger: #FF5630;
    --gray-40: #F9F9F9;
    --gray-50: #F7F7F7;
    --gray-60: #EFEFEF;
    --gray-70: #E5E5E5;
    --gray-80: #D1D1D1;
    --gray-100: #A3A3A3;
  }
  body {
    color: var(--secondary);
    background-color: var(--gray-40);
    overflow-y: scroll;
  }

  body, input, textarea, select, button {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .container-fluid {
    padding-left: 24px;
    padding-right: 24px;
  }
`
