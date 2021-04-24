import SideMenu from '../SideMenu';
import Draggable from '../Draggable';

import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

import './Fonts.css';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <SideMenu />
    <Draggable />

    <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer" className={styles.GitHubLink}>
      <GitHubIcon />
    </a>
  </div>
);

export default App;
