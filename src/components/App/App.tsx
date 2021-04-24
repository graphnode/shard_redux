import SideMenu from '../SideMenu';
import Draggable from '../Draggable';

import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

import * as S from './App.styles';

const App = () => (
  <S.App>
    <S.GlobalStyle />

    <SideMenu />
    <Draggable />

    <S.GitHubLink href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
      <GitHubIcon />
    </S.GitHubLink>
  </S.App>
);

export default App;
