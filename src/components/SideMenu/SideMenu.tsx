import React from 'react';
import Icon from '../Icon';

import * as S from './SideMenu.styles';

const SideMenu : React.FC = () => {
  const options = [
    { title: 'Status', icon: 'home-outline', path: '/' },
    { title: 'Research', icon: 'flask-outline', path: '/research' },
    {
      title: 'Database',
      icon: 'database-outline',
      path: '/database',
    },
    { title: 'Settings', icon: 'tune-variant', path: '/settings' },
  ];

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
