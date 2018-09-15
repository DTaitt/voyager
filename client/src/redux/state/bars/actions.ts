import axios from 'axios';

import { url } from './../../../utils/url'

export const actionType = {
    GET_BARS: 'GET_BARS',
    RESOLVED_GET_BARS: 'RESOLVED_GET_BARS',
    REJECTED_GET_BARS: 'REJECTED_GET_BARS',
}

export const getBars = () => {
    return async (dispatch:any) => {
        dispatch({ type: actionType.GET_BARS })
        try {
            const res = await axios.get(url.BARS)
            dispatch({
                type: actionType.RESOLVED_GET_BARS,
                payload: res.data.businesses,
            })
        } catch (error) {
            dispatch({ type: actionType.REJECTED_GET_BARS })
        }
    }
}