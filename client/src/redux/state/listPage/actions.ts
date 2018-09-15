import * as _ from 'lodash';

export const actionType = {
    SET_LIST_PAGE_DATA: 'SET_LIST_PAGE_DATA',
    RESOLVED_SET_LIST_PAGE_DATA: 'RESOLVED_SET_LIST_PAGE_DATA',
}

export const setListPageData = (listPageData:any) => {
    return (dispatch:any) => {
        dispatch({ type: actionType.SET_LIST_PAGE_DATA })

        dispatch({
            type: actionType.RESOLVED_SET_LIST_PAGE_DATA,
            payload: listPageData,
        })
    }
}