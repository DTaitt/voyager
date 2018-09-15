import { actionType } from './actions';
import { Restaurant } from './../../../pages/ListPage';

interface FavoriteAction {
    type:string,
    payload:{
        id:string
    },
}

const handleFavoriteReducer = (favorites = [], action:FavoriteAction) => {
    switch (action.type) {
        case actionType.ADD_FAVORITE:
            return [
                ...favorites,
                action.payload,
            ]  
        case actionType.DELETE_FAVORITE:
            return favorites.filter((fav:Restaurant) => {
                return fav.id !== action.payload.id;
            })  
        default:
            return favorites;
    }
}

export default handleFavoriteReducer;