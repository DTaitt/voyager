import { combineReducers } from 'redux';

const isOpenReducer = (isOpen = false, action:any) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR_OPEN_STATUS':
            return !isOpen;
        default:
            return isOpen;
    }
}

const sidebarReducer = combineReducers({
    isOpen: isOpenReducer,
})

export default sidebarReducer;