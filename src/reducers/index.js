import { combineReducers } from 'redux';

function defaultReducer1(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function defaultReducer2(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    defaultReducer1,
    defaultReducer2,
});