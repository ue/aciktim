import {
  SET_PAGE,
  GET_DATA,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page
      };
    case GET_DATA:
      return {
        ...state,
        recipes: action.payload.Data,
        recipeCount: action.payload.Data.length,
        pageCount: 30,
      };
    default:
      return state;
  }
};
