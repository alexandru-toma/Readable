import * as types from '../actions/actionTypes';

export default function categoryReducer(state = [], action) {
    const { categories } = action
    switch (action.type) {
        case types.GET_CATEGORIES:
            return [...categories];
        default:
            return state;
    }
}