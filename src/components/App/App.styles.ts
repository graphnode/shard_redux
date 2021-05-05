import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

export const App = styled.div`
  height: 100%;

  display: flex;
  flex-direction: columm;
  flex-wrap: nowrap;

  main {
    display: flex;
    flex: 1;
    margin: 4rem 0 0 6rem;
  }
`;

export const IconLink = styled('a').attrs<{ icon: string }>(({ icon }) => ({
  target: '_blank',
  rel: 'noreferrer',
  children: React.createElement(Icon, { name: icon }),
}))<{ icon: string }>`
  position: fixed;
  top: 0; right: 0;
  display: flex;
  color: #76819e;
  padding: 0.75rem;
  z-index: 100;

  &:hover {
    color: white;
  }

  & svg {
    width: 2.5rem; height: 2.5rem;
  }
`;
