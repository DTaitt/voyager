import { combineReducers } from 'redux';
import { actionType } from './actions';

interface DetailPageAction {
    type: string,
    payload: Object,
}

const detailPageDataReducer = (detailPageData = {}, action:DetailPageAction) => {
    switch (action.type) {
        case actionType.SET_DETAIL_PAGE_DATA:
            return action.payload;
        default:
            return detailPageData;
    }
}

const isDetailPageDataSetReducer = (isDetailPageDataSet = false, action:DetailPageAction) => {
    switch (action.type) {
        case actionType.SET_DETAIL_PAGE_DATA:
            return true
        default:
            return isDetailPageDataSet;
    }
}

const detailPageReducer = combineReducers({
    data: detailPageDataReducer,
    isDataSet: isDetailPageDataSetReducer,
})

export default detailPageReducer;