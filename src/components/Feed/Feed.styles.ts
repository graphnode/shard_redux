import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;

  padding: 1rem;
  overflow: hidden auto;

  border: 1px solid #335C81;

  display: flex;
  flex: 1;
  flex-direction: column;

  scrollbar-color: #477ba8 #252832;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #252832;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #477ba8;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #386388;
  }
`;

export const Message = styled.div`
  display: block;
  margin-top: 0.5rem;

  &:first-child {
    margin-top: 0;
  }
  
  &:hover {
    background-color: rgba(51, 93, 129, 0.2);
  }
`;

export const BottomAnchor = styled.div`
  display: block;
  width: 0; height: 0.5rem;
`;
