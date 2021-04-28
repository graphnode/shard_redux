import React, { useState } from 'react';
import Tooltip from '../Tooltip';

import * as S from './SpectrumChart.styles';

export interface SpectrumChartPoint {
  position: number;
  strength: number;
  color: string;
  description: React.ReactNode;
}

export interface SpectrumChartProps {
  defaultDescription: React.ReactNode;
  points: SpectrumChartPoint[];
}

const SpectrumChart : React.FC<SpectrumChartProps> = ({ points, defaultDescription }) => {
  const [lineVisible, setLineVisible] = useState(false);
  const [linePosition, setLinePosition] = useState(0);

  const onMouseOver = (e : React.MouseEvent) => setLineVisible(true);
  const onMouseMove = (e : React.MouseEvent<HTMLDivElement>) => setLinePosition(e.pageX - e.currentTarget.offsetLeft);
  const onMouseLeave = (e : React.MouseEvent) => setLineVisible(false);

  const getTooltipDescription = () => {
    const p = (linePosition / 674) * 100;
    for(var i = 0; i < points.length; i++) {
      const point = points[i];
      if (p > point.position - point.strength / 2 && p < point.position + point.strength / 2)
        return point.description;
    }
    return defaultDescription;
  };

  return (
    <Tooltip content={getTooltipDescription()}>
      <S.Container points={points} {...{ onMouseOver, onMouseMove, onMouseLeave }}>
        {lineVisible && <S.VerticalLine style={{ left: linePosition }} />}
      </S.Container>
    </Tooltip>
  );
};

export default SpectrumChart;
