import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './Global.styles';

import { tick } from '../../data/reducers/game';

import useInterval from '../../hooks/useInterval';
import useDispatch from '../../hooks/useDispatch';
import useSelector from '../../hooks/useSelector';

import TopBar from '../TopBar';
import SideMenu from '../SideMenu';
import HubPage from '../../pages/Hub';
import LogsPage from '../../pages/Logs';
import SettingsPage from '../../pages/Settings';

import * as S from './App.styles';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const tickSpeed = useSelector((state) => state.game.tickSpeed);

  const updateRate = Math.min(Math.max(33, settings.updateRate), 200);
  let now, lastUpdate = Date.now();
  let sum = 0;

  useInterval(() => {
    now = Date.now();
    sum += now - lastUpdate;

    if (sum > tickSpeed) {
      sum -= tickSpeed;
      dispatch(tick({ delta: now - lastUpdate }));
    }

    lastUpdate = now;
  }, updateRate);

  return (
    <>
      <GlobalStyle {...settings} />
      <Router hashType="noslash">
        <S.App>
          <SideMenu />
          <TopBar />

          <main role="main">
            <Switch>
              <Route path="/" exact>
                <HubPage />
              </Route>
              <Route path="/logs" exact>
                <LogsPage />
              </Route>
              <Route path="/settings" exact>
                <SettingsPage />
              </Route>
            </Switch>
          </main>

          <S.IconLink icon="github" href={process.env.REACT_APP_GITHUB_URL} />
        </S.App>
      </Router>
    </>
  );
};

export default App;
