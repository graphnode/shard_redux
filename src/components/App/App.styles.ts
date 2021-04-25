import styled, { createGlobalStyle } from 'styled-components';

import FontFaces from './FontFaces.styles';

export const GlobalStyle = createGlobalStyle`
  ${FontFaces}
  
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
  }
`;

export const App = styled.div`
  height: 100%;

  display: flex;
  flex-direction: columm;
  flex-wrap: nowrap;

  main {
    display: flex;
    flex: 1;
    margin-left: 6rem;
  }

  & svg {
    fill: currentColor;
  }

  box-sizing: border-box;
`;

export const GitHubLink = styled.a`
  display: flex;
  position: fixed;
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
