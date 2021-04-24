import SideMenu from '../SideMenu';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as HomeIcon } from '../../assets/home-outline.svg';
import { ReactComponent as DatabaseIcon } from '../../assets/database-outline.svg';
import { ReactComponent as ChatIcon } from '../../assets/chat-outline.svg';

import HomePage from '../../pages/Home';
import DatabasePage from '../../pages/Database';
import ChatPage from '../../pages/Chat';

import * as S from './App.styles';

const App : React.FC = () => (
  <S.App>
    <S.GlobalStyle />

    <Router hashType="noslash">
      <SideMenu options={[
        { title: 'Home', icon: HomeIcon, path: '/' },
        { title: 'Database', icon: DatabaseIcon, path: '/database' },
        { title: 'Chat', icon: ChatIcon, path: '/chat' },
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
    </Router>

    <S.GitHubLink href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
      <GitHubIcon />
    </S.GitHubLink>
  </S.App>
);

export default App;
