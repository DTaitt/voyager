import { combineReducers } from 'redux';
import { actionType } from './actions';

interface restaurantAction {
    type: string,
    payload?: []
}

const restaurantsDataReducer = (restaurants = [], action:restaurantAction) => {
    switch (action.type) {
        case actionType.RESOLVED_GET_RESTAURANTS:
            return action.payload
        case actionType.REJECTED_GET_RESTAURANTS:
        default:
            return restaurants;
    }
}

const isRestaurantsDataLoaded = (isRestaurantsDataLoaded = false, action:restaurantAction) => {
    switch (action.type) {
        case actionType.RESOLVED_GET_RESTAURANTS:
            return isRestaurantsDataLoaded = true;
        case actionType.REJECTED_GET_RESTAURANTS:
        default:
            return isRestaurantsDataLoaded = false;
    }
}

const restaurantsReducer = combineReducers({
    restaurantsDataReducer,
    isRestaurantsDataLoaded,
})

export default restaurantsReducer;