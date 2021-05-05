import React from 'react';

import * as S from './Counter.styles';

export interface CounterProps {
  /** The type of counter. */
  name: string;
  /** The value of the counter. */
  value: number;
  /** The change in the counter. */
  change?: number;
  /** Icon used for this resource. */
  icon: string;
  /** Icon color. */
  iconColor?: string;
}

const Counter : React.FC<CounterProps> = ({ name, value, change, icon, iconColor, ...props }) => {
  return (
    <S.Container {...props}>
      <S.Icon name={icon} style={{ color: iconColor }} />
      <S.Values>
        <S.Value>{value}</S.Value>
        <S.Change change={change}>
          { change && change > 0 && '+'}{change || ' '}
        </S.Change>
      </S.Values>
    </S.Container>
  );
};

export default Counter;
