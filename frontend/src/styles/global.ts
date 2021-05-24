import { createGlobalStyle } from 'styled-components';

import backgroundImage from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${backgroundImage}) no-repeat 100% top;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins, sans-serif;
  }

  border-style, input, button {
    font: 16px Poppins, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
