import styled, { createGlobalStyle } from 'styled-components';

import NunitoRegularWoff from '../../assets/fonts/nunito-v16-latin-regular.woff';
import NunitoRegularWoff2 from '../../assets/fonts/nunito-v16-latin-regular.woff2';
import NunitoBoldWoff from '../../assets/fonts/nunito-v16-latin-700.woff';
import NunitoBoldWoff2 from '../../assets/fonts/nunito-v16-latin-700.woff2';

export const GlobalStyle = createGlobalStyle`
  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${NunitoRegularWoff2}) format('woff2'),
        url(${NunitoRegularWoff}) format('woff');
    font-display: block;
  }

  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${NunitoBoldWoff2}) format('woff2'),
        url(${NunitoBoldWoff}) format('woff');
    font-display: block;
  }

  body {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: white;

    margin: 0; padding: 0;
  }
`;

export const App = styled.div`
  background-color: #2C313D;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: columm;
  flex-wrap: nowrap;

  main {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  & svg {
    fill: currentColor;
  }
`;

export const GitHubLink = styled.a`
  display: flex;
  position: absolute;
  top: 0; right: 0;
  justify-content: center;
  align-items: center;
  color: #76819e;
  padding: 0.5rem;
  z-index: 1;

  &:hover {
    color: white;
  }

  & svg {
    width: 2.5rem; height: 2.5rem;
  }
`;
