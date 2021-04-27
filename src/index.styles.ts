import { css, createGlobalStyle } from 'styled-components';

import Nunito200 from './assets/fonts/nunito-v16-latin-200.woff2';
import Nunito200Italic from './assets/fonts/nunito-v16-latin-200italic.woff2';
import Nunito300 from './assets/fonts/nunito-v16-latin-300.woff2';
import Nunito300Italic from './assets/fonts/nunito-v16-latin-300italic.woff2';
import NunitoRegular from './assets/fonts/nunito-v16-latin-regular.woff2';
import NunitoItalic from './assets/fonts/nunito-v16-latin-italic.woff2';
import Nunito600 from './assets/fonts/nunito-v16-latin-600.woff2';
import Nunito600Italic from './assets/fonts/nunito-v16-latin-600italic.woff2';
import Nunito700 from './assets/fonts/nunito-v16-latin-700.woff2';
import Nunito700Italic from './assets/fonts/nunito-v16-latin-700italic.woff2';
import Nunito800 from './assets/fonts/nunito-v16-latin-800.woff2';
import Nunito800Italic from './assets/fonts/nunito-v16-latin-800italic.woff2';
import Nunito900 from './assets/fonts/nunito-v16-latin-900.woff2';
import Nunito900Italic from './assets/fonts/nunito-v16-latin-900italic.woff2';

const fontFaces = css`
  /* nunito-200 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 200;
    src: local('Nunito'), url(${Nunito200}) format('woff2');
  }
  /* nunito-200italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 200;
    src: local('Nunito'), url(${Nunito200Italic}) format('woff2');
  }
  /* nunito-300 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    src: local('Nunito'), url(${Nunito300}) format('woff2');
  }
  /* nunito-300italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 300;
    src: local('Nunito'), url(${Nunito300Italic}) format('woff2');
  }
  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito'), url(${NunitoRegular}) format('woff2');
  }
  /* nunito-italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 400;
    src: local('Nunito'), url(${NunitoItalic}) format('woff2');
  }
  /* nunito-600 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: local('Nunito'), url(${Nunito600}) format('woff2');
  }
  /* nunito-600italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 600;
    src: local('Nunito'), url(${Nunito600Italic}) format('woff2');
  }
  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local('Nunito'), url(${Nunito700}) format('woff2');
  }
  /* nunito-700italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 700;
    src: local('Nunito'), url(${Nunito700Italic}) format('woff2');
  }
  /* nunito-800 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    src: local('Nunito'), url(${Nunito800}) format('woff2');
  }
  /* nunito-800italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 800;
    src: local('Nunito'), url(${Nunito800Italic}) format('woff2');
  }
  /* nunito-900 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    src: local('Nunito'), url(${Nunito900}) format('woff2');
  }
  /* nunito-900italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 900;
    src: local('Nunito'), url(${Nunito900Italic}) format('woff2');
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  
  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;

    color: white;
    background-color: #2C313D;

    margin: 0; padding: 0;

    & svg {
      fill: currentColor;
    }
  }
`;
