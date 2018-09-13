import axios from 'axios';

import { url } from './../../../utils/url'

export const actionType = {
    GET_RESTAURANTS: 'GET_RESTAURANTS',
    RESOLVED_GET_RESTAURANTS: 'RESOLVED_GET_RESTAURANTS',
    REJECTED_GET_RESTAURANTS: 'REJECTED_GET_RESTAURANTS',
}

export const getRestaurants = () => {
    return async (dispatch:any) => {
        dispatch({ type: actionType.GET_RESTAURANTS })
        try {
            const res = await axios.get(url.RESTAURANTS)
            dispatch({
                type: actionType.RESOLVED_GET_RESTAURANTS,
                payload: res.data.businesses,
            })
        } catch (error) {
            dispatch({ type: actionType.REJECTED_GET_RESTAURANTS })
            console.log(error)
        }
    }
}