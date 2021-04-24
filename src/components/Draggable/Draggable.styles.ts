import styled, { css } from 'styled-components';
import { animated } from '@react-spring/web';

export const Draggable = styled(animated.div)<{ dragging: boolean }>`
  display: inline-block;

  background: #91c9f9;
  border: 3px solid #335C81;
  border-radius: 1rem;
  height: 3rem;
  width: 3rem;

  touch-action: none;
  will-change: transform;
  user-select: none;

  ${({ dragging }) => dragging ? css`
    /* pointer-events: none; */
    cursor: grabbing;
  ` : css`
    cursor: grab;
  `}
`;

export const DropTarget = styled.div<{ over: boolean; drop: boolean }>`
  border: 3px solid #c0c0c0;
  
  ${({ over }) => !over ? css`
    background: repeating-linear-gradient(
      45deg,
      #606dbc,
      #606dbc 10px,
      #465298 10px,
      #465298 20px
    );
  ` : css`
    background: repeating-linear-gradient(
      45deg,
      #60bc68,
      #60bc68 10px,
      #4f9b55 10px,
      #4f9b55 20px
    );
  `}

  ${({ drop }) => drop && css`
    background: #6e3774;
  `}
`;
