export const url = {
    RESTAURANTS: '/api/restaurants',
    BARS: '/api/bars',
    MENSCLOTH: '/api/menscloth',
    WOMENSCLOTH: '/api/womenscloth',
}

export const formatUrl = (url:string):string => {
    return url.split(' ').join('-').toLowerCase();
}