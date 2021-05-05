import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './Global.styles';

import { tick } from '../../reducers/game';
import useDispatch from '../../hooks/useDispatch';
import useSelector from '../../hooks/useSelector';

import TopBar from '../TopBar';
import SideMenu from '../SideMenu';

import HubPage from '../../pages/Hub';
import SettingsPage from '../../pages/Settings';

import * as S from './App.styles';
import Tooltip from '../Tooltip';
import Counter from '../Counter';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const tickSpeed = useSelector((state) => state.game.tickSpeed);

  const { energy, mass } = useSelector((state) => state.resources);
  const energyChange = useSelector((state) => state.buildings.generators * 10 - state.buildings.harvesters * 1);
  const massChange = useSelector((state) => state.buildings.harvesters);

  const onTimer = () => {
    let now,
      lastUpdate = Date.now();
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
          <SideMenu
            options={[
              { title: 'Status', icon: 'home-outline', path: '/' },
              { title: 'Research', icon: 'flask-outline', path: '/research' },
              {
                title: 'Database',
                icon: 'database-outline',
                path: '/database',
              },
              { title: 'Settings', icon: 'tune-variant', path: '/settings' },
            ]}
          />

          <TopBar>
            <Tooltip content={<><h1>Mass</h1><p>This is the resource used to construct buildings.</p></>}>
              <Counter name="Mass" icon="wall" iconColor="#c64756" value={mass} change={massChange} />
            </Tooltip>

            <Tooltip content={<><h1>Energy</h1><p>This is the resource used to power buildings.</p></>}>
              <Counter name="Energy" icon="lightning-bolt" iconColor="#ffe268" value={energy} change={energyChange} />
            </Tooltip>
          </TopBar>

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

          <S.IconLink icon="github" href={process.env.REACT_APP_GITHUB_URL} />
        </S.App>
      </Router>
    </>
  );
};

export default App;
