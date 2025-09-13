import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FuturaICG';
    src: url('/fonts/futuraicg-webfont.woff2') format('woff2'),
         url('/fonts/futuraicg-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'FuturaICG', sans-serif;
  }

  body {
    background-color: #fff;
    color: #000;
  }
`;

export default GlobalStyles;
