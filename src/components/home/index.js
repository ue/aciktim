import MainView from './mainView';
import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>

      </div>
    );
  }
}

export default (Home);
