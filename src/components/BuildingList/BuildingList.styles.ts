import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0; margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style: none;
  gap: 1rem;
  margin: 0.5rem 0;

  button {
    width: 4rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const ItemName = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ItemPrice = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 21px;

  svg {
    margin-left: 0.2rem;
    margin-bottom: 0.35rem;
  }
`;

export const ItemCount = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
