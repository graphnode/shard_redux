import React from 'react';
import { useDrag } from 'react-use-gesture';
import { animated, useSpring } from '@react-spring/web';

import * as S from './BuildingGrid.styles';

export interface BuildingGridProps {}

const BuildingGrid : React.FC<BuildingGridProps> = ({ children }) => {
  const [containerStyle, containerApi] = useSpring(() => ({ backgroundPositionX: -16, backgroundPositionY: -16 }));
  const [holderStyle, holderApi] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [ox, oy] }) => {
    containerApi.start({ backgroundPositionX: ox - 16, backgroundPositionY: oy - 16, config: { tension: 250 } });
    holderApi.start({ x: ox, y: oy, config: { tension: 250 } });
  }, {
    bounds: { top: 32 * -2, right: 32 * 2, bottom: 32 * 2, left: 32 * -2 },
    rubberband: true,
  });

  return (
    <S.Container style={containerStyle} {...bind()}>
      <animated.div style={holderStyle}>
        <S.SafeZone x={2} y={2} width={12} height={12} />
        <S.ForbiddenBorder x={2} y={2} width={12} height={12} />
        {children}
      </animated.div>
    </S.Container>
  );
};

BuildingGrid.defaultProps = {};

export default BuildingGrid;
