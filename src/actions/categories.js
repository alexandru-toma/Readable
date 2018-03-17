import * as types from './actionTypes';
import * as readableAPI from '../api/readableAPI';

export const getCategoriesSuccess = (categories) => {
    return { type: types.GET_CATEGORIES, categories };
}

export const getCategories = () => dispatch => {
    return readableAPI.getCategories().then((categories) => {
        dispatch(getCategoriesSuccess(categories));
    })
        .catch(error => {
            throw (error);
        });
}
