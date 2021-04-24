import styled, { css } from 'styled-components';

export const Container = styled.nav`
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

export const OptionList = styled.ol`
  margin: 0;
  padding: 0;
`;

export const Option = styled.li<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0; padding: 0;
  width: 5rem; height: 5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 0.9rem;
  color: #484F61;

  cursor: pointer;
    
  &:hover {
    background-color: #323846;
  }

  ${({ active }) => active && css`
    color: white;
    background-color: #4c566b;

    & span {
      font-weight: bold;
    }
  `}

  & svg {
    fill: currentColor;
    width: 2rem; height: 2rem;
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 2rem; bottom: 2rem;
  right: 0;
  width: 0.05rem;
  background-color: #484F61;
`;
