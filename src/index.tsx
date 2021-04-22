import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';


process.env.STUFF = 'x';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
