import { ADD_USER, SET_SEARCH_TEXT } from '../actions/actionTypes';

const initialState = {
    users: [],
    refreshing: false,
    searchText: '',
    refresh: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            {console.log("action",action);
                return {
                ...state,
                users:action.users
            }}
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state;
    }
};

export default reducer;