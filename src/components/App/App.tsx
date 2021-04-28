
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import useDispatch from '../../hooks/useDispatch';
import { tick } from '../../reducers/game';

import SideMenu from '../SideMenu';
import Icon from '../Icon';

import HubPage from '../../pages/Hub';

import * as S from './App.styles';


const App : React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setInterval(
      () => { dispatch(tick()); },
      1000,
    );

    return () => clearInterval(timerId);
  });

  return (
    <S.App>
      <SideMenu options={[
        { title: 'Hub', icon: 'home-outline', path: '/' },
        { title: 'Research', icon: 'flask-outline', path: '/research' },
        { title: 'Database', icon: 'database-outline', path: '/database' },
        { title: 'Settings', icon: 'tune-variant', path: '/settings' },
      ]} />

      <main role="main">
        <Switch>
          <Route path="/" exact>
            <HubPage />
          </Route>
        </Switch>
      </main>

      <S.GitHubLink href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
        <Icon name="github" />
      </S.GitHubLink>
    </S.App>
  );
};

export default App;
