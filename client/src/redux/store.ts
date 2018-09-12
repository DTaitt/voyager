import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootReducer from './rootReducer';

const history = createBrowserHistory();
export function initializeStore() {
	const middleware = applyMiddleware(
		thunk, routerMiddleware(history)
	);
	const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		connectRouter(history)(rootReducer),
		// initialState,
		composeEnhancers(middleware)
	);
	return store;
}


const store = initializeStore();

export default store;