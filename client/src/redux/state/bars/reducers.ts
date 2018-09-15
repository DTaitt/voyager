import { combineReducers } from 'redux';
import { actionType } from './actions';

interface BarAction {
    type: string,
    payload?: []
}

const barsDataReducer = (bars = [], action:BarAction) => {
    switch (action.type) {
        case actionType.RESOLVED_GET_BARS:
            return action.payload
        case actionType.REJECTED_GET_BARS:
        default:
            return bars;
    }
}

const isDataLoadedReducer = (isDataLoaded = false, action:BarAction) => {
    switch (action.type) {
        case actionType.RESOLVED_GET_BARS:
            return isDataLoaded = true;
        case actionType.REJECTED_GET_BARS:
        default:
            return isDataLoaded;
    }
}

const barsReducer = combineReducers({
    data: barsDataReducer,
    isDataLoaded: isDataLoadedReducer,
})

export default barsReducer;