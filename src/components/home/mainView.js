import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { GET_DATA } from '../../constants/actionTypes';
import { ListView } from '../listView';

class MainView extends Component {
  constructor() {
    super();
    this.state = {
      activePage: null,
    };
  }

  // Life cycle functions
  componentWillMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    const { page } = this.props;
    if (page !== nextProps.page){
      this.setState({
        activePage: nextProps.page
      }, () => {
        this.getData();
      });
    }
  }

  // Component functions
  getData = () => {
    const { activePage } = this.state;
    const { onLoad } = this.props;
    const setPage = activePage || 0;
    const getRecipesPromise = agent.Recipes.all(setPage);

    onLoad(getRecipesPromise);
  }

  render () {
    const {
      pager,
      recipes,
      loading,
      recipeCount,
      pageCount,
      page
    } = this.props;

    return (
      <div className="">
        <ListView
          pager={pager}
          recipes={recipes}
          loading={loading}
          recipesCount={recipeCount}
          pageCount={pageCount}
          currentPage={page}
        />
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  ...state.recipes,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({ type: GET_DATA, payload })
});


export default connect(mapStateToProps, mapDispatchToProps)(MainView);
