import * as types from './actionTypes';
import * as readableAPI from '../api/readableAPI';

export const getCategoriesSuccess = (categories) => {
    return {type: types.GET_CATEGORIES, categories};
  }

export const getCategories = () => dispatch => {
  return readableAPI.getCategories().then((categories) => {
    dispatch(getCategoriesSuccess(categories));
  })
    .catch(error => {
      throw (error);
    });
}
//   export const loadCategories = () => dispatch => {
//     dispatch(loadingData(true))
//     return API.getCategories().then((categories) => {
//       dispatch({type: ACTIONS.CATEGORIES_LOADED, categories})
//       dispatch(loadingData(false))
//     })
// }

//   export function createCat(cat) {
//     return function (dispatch) {
//       return catApi.createCat(cat).then(responseCat => {
//         dispatch(createCatSuccess(responseCat));
//         return responseCat;
//       }).catch(error => {
//         throw(error);
//       });
//     };
//   }
  
//   export function deleteCat(cat) {
//     return function(dispatch) {
//       return catApi.deleteCat(cat).then(() => {
//         console.log(`Deleted ${cat.id}`)
//         dispatch(deleteCatSuccess(cat));
//         return;
//       }).catch(error => {
//         throw(error);
//       })
//     }
//   }
  
  
  
  
  
  
  
  