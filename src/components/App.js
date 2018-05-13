import React, { Component } from 'react';
import Header from './headerView';
import { connect } from 'react-redux';
import { APP_LOAD } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Details from '../components/detailsView';
import Home from '../components/home';

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: APP_LOAD, payload }),
});

class App extends Component {

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/recipe/:id" component={Details} />
          </Switch>
      </div>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(App);
