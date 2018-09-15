import * as _ from 'lodash';

import { Restaurant } from './../../../pages/ListPage'

export const actionType = {
    SET_DETAIL_PAGE_DATA: 'SET_DETAIL_PAGE_DATA',
    RESOLVED_SET_DETAIL_PAGE_DATA: 'RESOLVED_SET_DETAIL_PAGE_DATA',
    REJECTED_SET_DETAIL_PAGE_DATA: 'REJECTED_SET_DETAIL_PAGE_DATA', 
}

export const setDetailPageData = (restaurantData:Restaurant) => {
    return (dispatch:any) => {
        dispatch({ type: actionType.SET_DETAIL_PAGE_DATA })
        
        _.isEmpty(restaurantData)
        ? dispatch({type: actionType.REJECTED_SET_DETAIL_PAGE_DATA})
        : dispatch({
            type: actionType.RESOLVED_SET_DETAIL_PAGE_DATA,
            payload: restaurantData,
        })
    }
}