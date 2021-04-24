import styled, { css, keyframes } from 'styled-components';
import { animated } from '@react-spring/web';

const firstColor = 'rgba(230, 46, 0, 0.4)';
const secondColor = 'rgba(255, 104, 77, 0.4)';

const glow = keyframes`
  from {
    text-shadow: 
      0 0 1px #fff, 
      0 0 2px #fff, 
      0 0 3px ${firstColor}, 
      0 0 4px ${firstColor}, 
      0 0 5px ${firstColor}, 
      0 0 6px ${firstColor}, 
      0 0 7px ${firstColor};
  }

  to {
    text-shadow: 
      0 0 2px #fff, 
      0 0 3px ${secondColor}, 
      0 0 4px ${secondColor}, 
      0 0 5px ${secondColor}, 
      0 0 6px ${secondColor}, 
      0 0 7px ${secondColor},
      0 0 8px ${secondColor};
  }
`;

export const Word = styled(animated.span)<{ active: boolean }>`
  display: inline-block;
  white-space: nowrap;

  font-weight: bold;

  text-transform: uppercase;

  position: relative;
  cursor: grab;
  touch-action: none;

  ${({ active }) => active && css`
    animation: ${glow} 1s ease-in-out infinite alternate;
  `}
`;
