import React from 'react';

import Icon from '../Icon';
import Tooltip from '../Tooltip';
import Button from '../Button';

import * as S from './BuildingList.styles';

type Item = {
  name: string;
  description: string;
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
      { items.map(({ name, description, price, count, onBuy, canBuy, onSell, canSell }, i) => (
        <Tooltip key={i} content={<>
          <h1>{name}</h1>
          <p>{description}</p>
        </>}>
          <S.Item>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemPrice>{price}<Icon name="wall" /></S.ItemPrice>
            <S.ItemCount>{count} units</S.ItemCount>
            <Button onClick={onBuy} disabled={!canBuy}>Build</Button>
            <Button onClick={onSell} disabled={!canSell}>Recycle</Button>
          </S.Item>
        </Tooltip>
      ))}
    </S.List>
  );
};

BuildingList.defaultProps = {

};

export default BuildingList;
