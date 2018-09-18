import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import restaurantsReducer from './state/restaurants/reducers';
import barsReducer from './state/bars/reducers';
import detailPageReducer from './state/detailPage/reducers';
import handleFavoriteReducer from './state/favorites/reducers';
import listPageReducer from './state/listPage/reducers';
import sidebarReducer from './state/sidebar/reducers';

const rootReducer = combineReducers({
	bars: barsReducer,
	detailPage: detailPageReducer,
	favorites: handleFavoriteReducer,
	listPage: listPageReducer,
	restaurants: restaurantsReducer,
	router: routerReducer,
	sidebar: sidebarReducer,
});

export default rootReducer;