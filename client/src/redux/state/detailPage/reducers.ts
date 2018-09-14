import { combineReducers } from 'redux';
import { actionType } from './actions';

interface DetailPageAction {
    type: string,
    payload: Object,
}

const detailPageDataReducer = (detailPageData = {}, action:DetailPageAction) => {
    switch (action.type) {
        case actionType.RESOLVED_SET_DETAIL_PAGE_DATA:
            return action.payload;
        case actionType.REJECTED_SET_DETAIL_PAGE_DATA:
        default:
            return detailPageData;
    }
}

const isDetailPageDataSetReducer = (isDetailPageDataSet = false, action:DetailPageAction) => {
    switch (action.type) {
        case actionType.RESOLVED_SET_DETAIL_PAGE_DATA:
            return true;
        case actionType.REJECTED_SET_DETAIL_PAGE_DATA:
        default:
            return isDetailPageDataSet;
    }
}

const detailPageReducer = combineReducers({
    data: detailPageDataReducer,
    isDataSet: isDetailPageDataSetReducer,
})

export default detailPageReducer;