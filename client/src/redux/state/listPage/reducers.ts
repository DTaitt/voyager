import { combineReducers } from 'redux';
import { actionType } from './actions';

// interface DetailPageAction {
//     type: string,
//     payload: Object,
// }

const listPageDataReducer = (listPageData = {}, action:any) => {
    switch (action.type) {
        case actionType.RESOLVED_SET_LIST_PAGE_DATA:
            return action.payload;
        // case actionType.REJECTED_SET_LIST_PAGE_DATA:
        default:
            return listPageData;
    }
}

const isListPageDataSetReducer = (isListPageDataSet = false, action:any) => {
    switch (action.type) {
        case actionType.RESOLVED_SET_LIST_PAGE_DATA:
            return true;
        // case actionType.REJECTED_SET_LIST_PAGE_DATA:
        default:
            return isListPageDataSet;
    }
}

const listPageReducer = combineReducers({
    data: listPageDataReducer,
    isDataSet: isListPageDataSetReducer,
})

export default listPageReducer;