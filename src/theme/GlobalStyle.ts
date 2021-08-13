import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: #ffffff;
      z-index: 5;
      overflow-x: hidden;
      font-size: .9rem;
   }
  @media screen and (min-width: 920px) {
    html {
      font-size: 1rem;

    }
  }
  @media screen and (min-width: 1400px) {
    html {
      font-size: 1.07rem;

    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,h2,h3,h4 {
    margin: 0;
  }
  a {
    color: currentColor;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }
  .next-link__button {
    a {
      padding: 8px 18px;
    border: 1px solid black;
    border-radius: 4px;
    }
  }
  @font-face {
    font-family: Volkhov;
    src: url(/static/fonts/Volkhov-Bold.ttf);
  }
  @font-face {
    font-family: Poppins;
    src: url(/static/fonts/Poppins-Medium.ttf);
  }
  /* @font-face {
    font-family: 'Open Sans';
    src: url(/static/fonts/OpenSans-Light.ttf);
  } */
  @font-face {
    font-family: OpenSans;
    src: url(/static/fonts/OpenSans-SemiBold.ttf);
  }
`
export default GlobalStyle
