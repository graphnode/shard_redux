import React from 'react';

import * as S from './Counter.styles';

export interface CounterProps {
  /** The type of counter. */
  type: string;
  /** The value of the counter. */
  value: string;
  /** The change in the counter. */
  change?: string;
  /** Change the color of the change. */
  changeStatus?: 'positive' | 'negative';
}

const Counter : React.FC<CounterProps> = ({ type, value, change, changeStatus }) => {
  return (
    <S.Container>
      <S.Type>{type}</S.Type>
      <S.Value>{value}</S.Value>
      <S.Change status={changeStatus}>{change}</S.Change>
    </S.Container>
  );
};

export default Counter;
