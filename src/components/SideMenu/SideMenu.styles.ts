import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 6rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const Option = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem; height: 5rem;
  color: #484F61;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #323846;
  }

  ${({ active }) => active && css`
    color: white;
    background-color: #4c566b;
  `}

  & svg {
    fill: currentColor;
    width: 3rem; height: 3rem;
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 2rem; bottom: 2rem;
  right: 0;
  width: 0.05rem;
  background-color: #484F61;
`;
