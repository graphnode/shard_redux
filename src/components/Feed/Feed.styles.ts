import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Message = styled.div`
  margin-top: 0.5rem;
  flex-direction: row;
  color: #42444F;

  &:nth-child(1) ~ & {
    color: #a4a8bd;
  }

  &:nth-child(6) ~ & {
    color: #b8bbcc;
  }

  &:nth-child(12) ~ & {
    color: #c4c6d4;
  }
`;

export const BottomAnchor = styled.div`
  display: block;
  width: 0; height: 0;
`;
