
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import useDispatch from '../../hooks/useDispatch';
import { tick } from '../../reducers/game';

import SideMenu from '../SideMenu';
import Icon from '../Icon';

import HomePage from '../../pages/Home';
import DatabasePage from '../../pages/Database';
import ChatPage from '../../pages/Chat';

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
        { title: 'Home', icon: 'home-outline', path: '/' },
        { title: 'Database', icon: 'database-outline', path: '/database' },
        { title: 'Chat', icon: 'chat-outline', path: '/chat' },
      ]} />

      <main role="main">
        <Switch>
          <Route path="/database">
            <DatabasePage />
          </Route>
          <Route path="/chat">
            <ChatPage />
          </Route>
          <Route path="/">
            <HomePage />
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
