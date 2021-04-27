import React from 'react';

import Icon from '../Icon';

import * as S from './Counter.styles';

export interface CounterProps {
  /** The type of counter. */
  name: string;
  /** The value of the counter. */
  value: number;
  /** The change in the counter. */
  change?: number;
  /** Icon used for this resource. */
  icon?: string;
}

const Counter : React.FC<CounterProps> = ({ name, value, change, icon }) => {
  return (
    <S.Container>
      <S.Type>{icon && <Icon name={icon} />}{name}</S.Type>
      <S.Value>{value}</S.Value>
      { !!change && (
        <S.Change change={change}>
          { change > 0 && '+'}{change}
        </S.Change>
      )}
    </S.Container>
  );
};

export default Counter;
