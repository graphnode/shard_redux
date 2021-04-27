import React from 'react';
import Icon from '../Icon';

import * as S from './SideMenu.styles';

type OptionItem = {
  title?: string;
  icon?: string;
  path?: string;
};

export interface SideMenuProps {
  /** The options of the menu. */
  options?: OptionItem[]
}

const SideMenu : React.FC<SideMenuProps> = ({ options }) => {
  if (!options)
    return null;

  return (
    <S.Container>
      <S.OrderedList>
        { options.map((option, i) => (
          <S.ListItem key={i}>
            <S.NavLink to={option.path || ''} exact={true} activeClassName="active">
              {option.icon && <Icon name={option.icon} />}
              {option.title && <span>{option.title}</span>}
            </S.NavLink>
          </S.ListItem>
        ))}
      </S.OrderedList>
    </S.Container>
  );
};

export default SideMenu;
