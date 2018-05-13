import React from 'react';
import { connect } from 'react-redux';
import { SET_PAGE } from '../constants/actionTypes';

const mapDispatchToProps = dispatch => ({dispatch});

const ListPaginationView = props => {
  // I had to get pageCount instead of recipeCount becouse of the api urls seperate

  if (props.pageCount <= 10) {
    return null;
  }

  let pageCount = [];
  for (let i = 0; i < Math.ceil(props.pageCount / 10); ++i) {
    pageCount.push(i);
  }

  const setToPage = page => {
      props.dispatch({type: SET_PAGE, page})
  };

  return (
    <nav>
      <ul className="pagination">
        {
          pageCount.map(count => {
            const isCurrent = count === props.currentPage;
            const handleOnClick = event => {
              event.preventDefault();
              setToPage(count);
            };
            return (
              <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={handleOnClick}
                key={count}>
                <a href="">{count + 1}</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ListPaginationView);
