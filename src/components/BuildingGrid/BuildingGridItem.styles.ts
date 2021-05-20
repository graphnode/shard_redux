import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  position: absolute;
  top: 0; left: 0;
  width: 64px; height: 64px;

  border: 3px solid #a0a0a0;
  background-color: #c0c0c0;

  box-sizing: border-box;

  &:active {
    opacity: 0.5;
  }
`;

