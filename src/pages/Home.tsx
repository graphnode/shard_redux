import React from 'react';
import styled from 'styled-components';

import BuildingList from '../components/BuildingList';
import Counter from '../components/Counter';
import Feed from '../components/Feed';
import Tooltip from '../components/Tooltip';

import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

import { buyBuilding, sellBuilding } from '../reducers/buildings';

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
  const { energy, mass } = useSelector((state) => state.resources);
  const { generators, harvesters } = useSelector((state) => state.buildings);

  const energyChange = useSelector((state) => state.buildings.generators * 10 - state.buildings.harvesters * 1);
  const massChange = useSelector((state) => state.buildings.harvesters);

  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  return (
    <StyledPage>
      <Tooltip content={<>
        <h1>Mass</h1>
        <p>This is the resource used to construct buildings.</p>
        <hr />
        <figure>
          <blockquote>"Energy is liberated matter, matter is energy waiting to happen."</blockquote>
          <figcaption>
            &mdash; Bill Bryson, <cite>A Short History of Nearly Everything</cite>
          </figcaption>
        </figure>
      </>}>
        <StyledBox>
          <Counter name="Mass" icon="wall" value={mass} change={massChange} />
        </StyledBox>
      </Tooltip>

      <Tooltip content={<>
        <h1>Energy</h1>
        <p>This is the resource used to power buildings.</p>
        <hr />
        <figure>
          <blockquote>"Energy is liberated matter, matter is energy waiting to happen."</blockquote>
          <figcaption>
            &mdash; Bill Bryson, <cite>A Short History of Nearly Everything</cite>
          </figcaption>
        </figure>
      </>}>
        <StyledBox>
          <Counter name="Energy" icon="lightning-bolt" value={energy} change={energyChange} />
        </StyledBox>
      </Tooltip>

      <StyledBox style={{ gridColumn: '3 / 5', gridRow: '1 / 6' }}>
        <Feed messages={messages} />
      </StyledBox>

      <StyledBox style={{ gridColumn: '1 / 3', gridRow: '2 / 6', flexDirection: 'column' }}>
        <BuildingList items={[
          { name: 'Generator', description: 'Generates energy.', price: 100, count: generators,
            onBuy:() => dispatch(buyBuilding({ building: 'generators', price: 100 })),
            canBuy: mass >= 100,
            onSell:() => dispatch(sellBuilding({ building: 'generators', price: 100 })),
            canSell: generators !== 0,
          },
          { name: 'Harvester', description: 'Harvests mass.', price: 50, count: harvesters,
            onBuy:() => dispatch(buyBuilding({ building: 'harvesters', price: 50 })),
            canBuy: mass >= 50,
            onSell:() => dispatch(sellBuilding({ building: 'harvesters', price: 50 })),
            canSell: harvesters !== 0,
          },
        ]} />
      </StyledBox>

    </StyledPage>
  );
};

export default HomePage;
