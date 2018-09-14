export const url = {
    RESTAURANTS: '/api/restaurants',
}

export const formatUrl = (url:string):string => {
    return url.split(' ').join('-').toLowerCase();
}

export const parseRestaurantIdFromUrl = (url:string):string => {
    const split = url.split('/');
    return split[split.length - 1];
} 