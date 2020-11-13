import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

function time() {
  const element = (
      <span>{new Date().toLocaleTimeString()}</span>
  );
  ReactDOM.render(element, document.getElementById('time'));
}

setInterval(time, 1000);
