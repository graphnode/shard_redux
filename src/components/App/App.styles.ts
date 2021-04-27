import styled from 'styled-components';

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
