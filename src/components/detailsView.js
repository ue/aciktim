import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { RECIPES_PAGE_LOADED, RECIPES_PAGE_UNLOADED } from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.recipe,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: RECIPES_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: RECIPES_PAGE_UNLOADED })
});

class Recipe extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Recipes.getDetail()
    ]));
    console.log(agent.Recipes.getDetail());

  }
  
  componentWillUnmount() {
    this.props.onUnload();
  }


  createMarkup = () => {
    return {__html: this.props.recipe.Content};
  }

  render() {
    const { recipe } = this.props;
    if (!recipe) {
      return null;
    }

    return (
      <div className="recipe-page">
        <div className="title container">
          <h1>{recipe.Title}</h1>
          <span className="date">
              {new Date(recipe.CreatedAt).toDateString()}
          </span>
        </div>
        <div className="container">
            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
          <hr />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
