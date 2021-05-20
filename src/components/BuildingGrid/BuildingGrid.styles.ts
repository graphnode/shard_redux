import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  display: inline-block;
  position: relative;
  overflow: hidden;

  width: 512px;
  height: 512px;
  border: 1px solid #c0c0c0;

  background-image: linear-gradient(45deg, #fcbdbe 25%, #f8f8f8 25%, #f8f8f8 50%, #fcbdbe 50%, #fcbdbe 75%, #f8f8f8 75%, #f8f8f8 100%);
  background-size: 28.28px 28.28px;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const ForbiddenBorder = styled.div<{ x: number, y: number, width: number, height: number }>`
  position: absolute;
  ${({ x, y, width, height }) => css`left: ${x * 32}px; top: ${y * 32}px; width: ${width * 32}px; height: ${height * 32}px;` }
  box-sizing: border-box;
  border: 5px solid #fcbdbe;
`;

export const SafeZone = styled.div<{ x: number, y: number, width: number, height: number }>`
  position: absolute;
  ${({ x, y, width, height }) => css`left: ${x * 32}px; top: ${y * 32}px; width: ${width * 32}px; height: ${height * 32}px;` }
	background-image: radial-gradient(#807d7d 6%, #F8F8F8 8%);
  background-size: 32px 32px;
  background-position: 16px 16px;
`;
