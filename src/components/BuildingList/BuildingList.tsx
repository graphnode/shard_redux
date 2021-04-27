import React from 'react';

import Icon from '../Icon';

import * as S from './BuildingList.styles';

type Item = {
  name: string;
  price: string | number;
  count: number;
  onBuy?: () => void;
  canBuy?: boolean;
  onSell?: () => void;
  canSell?: boolean;
}

export interface BuildingListProps {
  items: Item[]
}

const BuildingList : React.FC<BuildingListProps> = ({ items }) => {
  return (
    <S.List>
      { items.map(({ name, price, count, onBuy, canBuy, onSell, canSell }, i) => (
        <S.Item key={i}>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemPrice>{price}<Icon name="wall" /></S.ItemPrice>
          <S.ItemCount>{count} units</S.ItemCount>
          <button onClick={onBuy} disabled={!canBuy}>Build</button>
          <button onClick={onSell} disabled={!canSell}>Recycle</button>
        </S.Item>
      ))}
    </S.List>
  );
};

BuildingList.defaultProps = {

};

export default BuildingList;
