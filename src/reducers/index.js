import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categoryReducer from './category';
import postReducer from './post';
import commentReducer from './comment';

export default combineReducers({
    categoryReducer,
    postReducer,
    commentReducer,
    routing: routerReducer
});