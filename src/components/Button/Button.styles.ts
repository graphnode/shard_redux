import styled, { css } from 'styled-components';

export const Container = styled.div<{ disabled?: boolean }>`
  display: inline-block;
  margin: 0;
  padding: 0.0625rem 0.375rem;

  display: inline-flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;

  box-sizing: border-box;

  color: #000;
  background-color: #F2F2F2;
  border: 1px solid #127A20;
  border-radius: 0.2rem;
  
  user-select: none;
  cursor: pointer;

  transition: background-color 0.1s linear;

  &:hover {
    background-color: #5AC467;
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    border-color: #B84B5F;
    background-color: #A3A3A3;

    &:hover {
      background-color: #B84B5F;
    }
  `}
`;
