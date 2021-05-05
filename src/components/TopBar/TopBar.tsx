import React from 'react';

import * as S from './TopBar.styles';

export interface TopBarProps {}

const TopBar : React.FC<TopBarProps> = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default TopBar;
