import React from 'react';

import useSelector from '../../hooks/useSelector';

import Tooltip from '../Tooltip';
import Counter from '../Counter';

import * as S from './TopBar.styles';

export interface TopBarProps {}

const TopBar : React.FC<TopBarProps> = ({ children }) => {
  const { energy, mass } = useSelector((state) => state.resources);
  const energyChange = useSelector((state) => state.buildings.generators * 10 - state.buildings.harvesters * 1);
  const massChange = useSelector((state) => state.buildings.harvesters);

  return (
    <S.Container>
      <Tooltip content={<><h1>Mass</h1><p>This is the resource used to construct buildings.</p></>}>
        <Counter name="Mass" icon="wall" iconColor="#c64756" value={mass} change={massChange} />
      </Tooltip>

      <Tooltip content={<><h1>Energy</h1><p>This is the resource used to power buildings.</p></>}>
        <Counter name="Energy" icon="lightning-bolt" iconColor="#ffe268" value={energy} change={energyChange} />
      </Tooltip>
    </S.Container>
  );
};

export default TopBar;
