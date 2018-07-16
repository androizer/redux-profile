import { ADD_USER, SET_SEARCH_TEXT } from './actionTypes';

export const addUser = (users) => {
    console.log("user",users);
    return {
        type: ADD_USER,
        users
    };
};

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        searchText
    };
}