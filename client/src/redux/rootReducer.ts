import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurantsReducer from './state/restaurants/reducers';

const rootReducer = combineReducers({
	restaurants: restaurantsReducer,
	router: routerReducer,
});

export default rootReducer;