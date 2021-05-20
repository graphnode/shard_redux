import React from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring } from '@react-spring/web';

import * as S from './BuildingGridItem.styles';

export interface BuildingGridItemProps {}

const BuildingGridItem : React.FC<BuildingGridItemProps> = () => {
  const [styles, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ event, last, offset: [ox, oy] }) => {
    event.stopPropagation();

    let x = ox - 16, y = oy - 16;

    if (last) {
      x = Math.round(x / 32) * 32;
      y = Math.round(y / 32) * 32;
    }

    api.start({ x, y, config: { tension: 250 } });
  });

  return (
    <S.Container style={styles} {...bind()} />
  );
};

BuildingGridItem.defaultProps = {};

export default BuildingGridItem;
