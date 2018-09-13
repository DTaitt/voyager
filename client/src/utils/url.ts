export const url = {
    RESTAURANTS: '/api/restaurants',
}

export const formatUrl = (url:string):string => {
    return url.split(' ').join('-').toLowerCase();
}