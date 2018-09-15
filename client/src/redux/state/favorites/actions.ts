import * as _ from 'lodash';

import { Restaurant } from './../../../pages/ListPage'

export const actionType = {
    HANDLE_FAVORITE: 'HANDLE_FAVORITE',
    ADD_FAVORITE: 'ADD_FAVORITE',
    DELETE_FAVORITE: 'DELETE_FAVORITE', 
}

export const handleFavorites = (restaurant:Restaurant) => {
    return (dispatch:any, getState:any) => {
        dispatch({type: actionType.HANDLE_FAVORITE})

        const { favorites } = getState();
        const isInFav = favorites.some(((fav:Restaurant) => {
            return fav.id === restaurant.id
        }))

        !isInFav || _.isEmpty(favorites)
        ? dispatch({
            type: actionType.ADD_FAVORITE,
            payload: restaurant,
        })
        : dispatch({
            type: actionType.DELETE_FAVORITE,
            payload: restaurant,
        })
    }
}