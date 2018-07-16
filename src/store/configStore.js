import { createStore, combineReducers } from 'redux';

import usersReducers from './reducers/usersReducer';

const rootReducer = combineReducers({
    users: usersReducers
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;