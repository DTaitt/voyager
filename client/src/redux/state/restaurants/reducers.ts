import { combineReducers } from 'redux';
import { actionType } from './actions';

interface RestaurantAction {
    type: string,
    payload?: []
}

const restaurantsDataReducer = (restaurants = [], action:RestaurantAction) => {
    switch (action.type) {
        case actionType.RESOLVED_GET_RESTAURANTS:
            return action.payload
        case actionType.REJECTED_GET_RESTAURANTS:
        default:
            return restaurants;
    }
}

const isDataLoadedReducer = (isDataLoaded = false, action:RestaurantAction) => {
    switch (action.type) {
        case actionType.RESOLVED_GET_RESTAURANTS:
            return isDataLoaded = true;
        case actionType.REJECTED_GET_RESTAURANTS:
        default:
            return isDataLoaded;
    }
}

const restaurantsReducer = combineReducers({
    data: restaurantsDataReducer,
    isDataLoaded: isDataLoadedReducer,
})

export default restaurantsReducer;