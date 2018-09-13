import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurantsReducer from './state/restaurants/reducers';
import detailPageReducer from './state/detailPage/reducers';

const rootReducer = combineReducers({
	detailPage: detailPageReducer,
	restaurants: restaurantsReducer,
	router: routerReducer,
});

export default rootReducer;