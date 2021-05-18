import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './Global.styles';

import useSelector from '../../hooks/useSelector';

import TopBar from '../TopBar';
import SideMenu from '../SideMenu';
import HubPage from '../../pages/Hub';
import LogsPage from '../../pages/Logs';
import SettingsPage from '../../pages/Settings';

import * as S from './App.styles';

const App: React.FC = () => {
  const settings = useSelector((state) => state.settings);

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
