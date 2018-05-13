import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import recipe from './reducers/recipe';
import recipes from './reducers/recipeList';

export default combineReducers({
  recipe,
  recipes,
  router: routerReducer
});
