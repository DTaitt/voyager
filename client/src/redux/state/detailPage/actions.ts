import * as _ from 'lodash';

import { Business } from './../../../pages/ListPage'

export const actionType = {
    SET_DETAIL_PAGE_DATA: 'SET_DETAIL_PAGE_DATA',
    RESOLVED_SET_DETAIL_PAGE_DATA: 'RESOLVED_SET_DETAIL_PAGE_DATA',
    REJECTED_SET_DETAIL_PAGE_DATA: 'REJECTED_SET_DETAIL_PAGE_DATA', 
}

export const setDetailPageData = (business:Business) => {
    return (dispatch:any) => {
        dispatch({ type: actionType.SET_DETAIL_PAGE_DATA })
        
        _.isEmpty(business)
        ? dispatch({type: actionType.REJECTED_SET_DETAIL_PAGE_DATA})
        : dispatch({
            type: actionType.RESOLVED_SET_DETAIL_PAGE_DATA,
            payload: business,
        })
    }
}