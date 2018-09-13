export const actionType = {
    SET_DETAIL_PAGE_DATA: 'SET_DETAIL_PAGE_DATA',
}

export const setDetailPageData = (restaurantData:any) => {
    return (dispatch:any) => {
        dispatch({
            type: actionType.SET_DETAIL_PAGE_DATA,
            payload: restaurantData,
        })
    }
}