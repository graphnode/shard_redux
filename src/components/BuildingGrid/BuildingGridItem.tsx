import React from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring } from '@react-spring/web';

import * as S from './BuildingGridItem.styles';

export interface BuildingGridItemProps {}

const BuildingGridItem : React.FC<BuildingGridItemProps> = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 64, y: 64 }));

  const bind = useDrag(({ event, last, movement: [mx, my] }) => {
    event.stopPropagation();

    let x = mx, y = my;

    if (last) {
      x = Math.round(x / 32) * 32;
      y = Math.round(y / 32) * 32;
    }

    api.start({
      x, y,
      config: { tension: 250 },
    });
  }, {
    initial: () => [Math.round(x.get() / 32) * 32, Math.round(y.get() / 32) * 32],
  });

  return (
    <S.Container {...bind()} style={{ x, y }} />
  );
};

BuildingGridItem.defaultProps = {};

export default BuildingGridItem;
