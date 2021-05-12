/* eslint-disable max-len */
import { css, createGlobalStyle, keyframes } from 'styled-components';

import Nunito200 from '../../assets/fonts/nunito-v16-latin-200.woff2';
import Nunito200Italic from '../../assets/fonts/nunito-v16-latin-200italic.woff2';
import Nunito300 from '../../assets/fonts/nunito-v16-latin-300.woff2';
import Nunito300Italic from '../../assets/fonts/nunito-v16-latin-300italic.woff2';
import NunitoRegular from '../../assets/fonts/nunito-v16-latin-regular.woff2';
import NunitoItalic from '../../assets/fonts/nunito-v16-latin-italic.woff2';
import Nunito600 from '../../assets/fonts/nunito-v16-latin-600.woff2';
import Nunito600Italic from '../../assets/fonts/nunito-v16-latin-600italic.woff2';
import Nunito700 from '../../assets/fonts/nunito-v16-latin-700.woff2';
import Nunito700Italic from '../../assets/fonts/nunito-v16-latin-700italic.woff2';
import Nunito800 from '../../assets/fonts/nunito-v16-latin-800.woff2';
import Nunito800Italic from '../../assets/fonts/nunito-v16-latin-800italic.woff2';
import Nunito900 from '../../assets/fonts/nunito-v16-latin-900.woff2';
import Nunito900Italic from '../../assets/fonts/nunito-v16-latin-900italic.woff2';

import { Settings } from '../../data/reducers/settings';

const fontFaces = css`
  /* nunito-200 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 200;
    src: local('Nunito'), url(${Nunito200}) format('woff2');
    font-display: swap;
  }
  /* nunito-200italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 200;
    src: local('Nunito'), url(${Nunito200Italic}) format('woff2');
    font-display: swap;
  }
  /* nunito-300 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    src: local('Nunito'), url(${Nunito300}) format('woff2');
    font-display: swap;
  }
  /* nunito-300italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 300;
    src: local('Nunito'), url(${Nunito300Italic}) format('woff2');
    font-display: swap;
  }
  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito'), url(${NunitoRegular}) format('woff2');
    font-display: swap;
  }
  /* nunito-italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 400;
    src: local('Nunito'), url(${NunitoItalic}) format('woff2');
    font-display: swap;
  }
  /* nunito-600 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: local('Nunito'), url(${Nunito600}) format('woff2');
    font-display: swap;
  }
  /* nunito-600italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 600;
    src: local('Nunito'), url(${Nunito600Italic}) format('woff2');
    font-display: swap;
  }
  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local('Nunito'), url(${Nunito700}) format('woff2');
    font-display: swap;
  }
  /* nunito-700italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 700;
    src: local('Nunito'), url(${Nunito700Italic}) format('woff2');
    font-display: swap;
  }
  /* nunito-800 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    src: local('Nunito'), url(${Nunito800}) format('woff2');
    font-display: swap;
  }
  /* nunito-800italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 800;
    src: local('Nunito'), url(${Nunito800Italic}) format('woff2');
    font-display: swap;
  }
  /* nunito-900 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    src: local('Nunito'), url(${Nunito900}) format('woff2');
    font-display: swap;
  }
  /* nunito-900italic - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: italic;
    font-weight: 900;
    src: local('Nunito'), url(${Nunito900Italic}) format('woff2');
    font-display: swap;
  }
`;

const translate = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 456px 456px;
  }
`;

export const GlobalStyle = createGlobalStyle<Settings>`
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
    background-color: #2c313d;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='456' height='456' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233c4454' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23474f63'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
    /* background by SVGBackgrounds.com */

    ${({ animations }) => (animations === 'on') && css`
      animation: ${translate} 16s linear infinite;
    `}

    margin: 0; padding: 0;

    & svg {
      fill: currentColor;
    }
  }
`;
