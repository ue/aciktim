import {
  RECIPES_PAGE_LOADED,
  RECIPES_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case RECIPES_PAGE_LOADED:
      return {
        ...state,
        recipe: action.payload[0].Data
      };
    case RECIPES_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
