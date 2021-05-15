import React from 'react';
import styled from 'styled-components';

import Feed from '../components/Feed';

import useSelector from '../hooks/useSelector';

const StyledPage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  grid-template-rows: repeat(8, 10rem);
  gap: 1rem;

  padding: 1rem;
`;

const ThumbColor = '#4C566B';
const TrackColor = '#fff';

const StyledBox = styled.div`
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  padding: 1rem;

  color: #42444F;

  overflow: auto;

  display: flex;
  
  scrollbar-color: ${ThumbColor} ${TrackColor};
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${TrackColor};
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${ThumbColor};
    border-radius: 1rem;
  }
`;

const HomePage : React.FC = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <StyledPage>
      <StyledBox style={{ gridColumn: '1 / 3', gridRow: '1 / 6' }}>
        <Feed messages={messages} />
      </StyledBox>
    </StyledPage>
  );
};

export default HomePage;
