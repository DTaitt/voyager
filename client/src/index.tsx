import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import store from './redux/store'

const history = createBrowserHistory();

const ConnectedApp = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)
const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(ConnectedApp, root);
registerServiceWorker();
