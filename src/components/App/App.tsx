
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './Global.styles';

import { tick } from '../../reducers/game';
import useDispatch from '../../hooks/useDispatch';
import useSelector from '../../hooks/useSelector';

import SideMenu from '../SideMenu';
import Icon from '../Icon';

import HubPage from '../../pages/Hub';
import SettingsPage from '../../pages/Settings';

import * as S from './App.styles';

const App : React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const tickSpeed = useSelector((state) => state.game.tickSpeed);

  const onTimer = () => {
    let now, lastUpdate = Date.now();
    let sum = 0;
    return () => {
      now = Date.now();
      sum += now - lastUpdate;

      if (sum > tickSpeed) {
        sum -= tickSpeed;
        dispatch(tick(now - lastUpdate));
      }

      lastUpdate = now;
    };
  };

  useEffect(() => {
    const updateRate = Math.min(Math.max(33, settings.updateRate), 200);
    const timerId = setInterval(onTimer(), updateRate);
    return () => clearInterval(timerId);
  });

  return (
    <>
      <GlobalStyle {...settings} />
      <Router hashType="noslash">
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
              <Route path="/settings" exact>
                <SettingsPage />
              </Route>
            </Switch>
          </main>

          <S.GitHubLink href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
            <Icon name="github" />
          </S.GitHubLink>
        </S.App>
      </Router>
    </>
  );
};

export default App;
