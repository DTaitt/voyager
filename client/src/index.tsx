import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <App />,
  root
);

registerServiceWorker();
