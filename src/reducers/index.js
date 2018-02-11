import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

function categoryReducer(state = [], action) {
    switch (action.type) {
        case  types.GET_CATEGORIES:
            return Object.assign([], state, action.categories)
        default:
            return state;
    }
}

function postReducer(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    categoryReducer,
    postReducer,
});