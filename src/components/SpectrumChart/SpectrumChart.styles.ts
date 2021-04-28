/* eslint-disable max-len */

import styled, { css } from 'styled-components';

import { SpectrumChartPoint } from './SpectrumChart';

export const Container = styled.div<{ points: SpectrumChartPoint[] }>`
  position: relative;
  border: 1px solid #f8f8f8;
  width: 42rem;
  height: 8rem;

  background-repeat: no-repeat;
  background-color: black;

  ${({ points }) => points && css`
    background:
    ${points.map((p) => `linear-gradient(to right, transparent, transparent ${p.position - p.strength/2}%, ${p.color} ${p.position}%, transparent ${p.position + p.strength/2}%, transparent)`).join(', ')}
    black;
  `}

  overflow: hidden;
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 0.1rem; height: 100%;  
  background-color: #fff;
`;
