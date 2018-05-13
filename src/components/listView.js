import React from 'react';
import { ListItemView } from './listItemView';
import ListPaginationView from './listPaginationView';

export const ListView = props => {
  const {
    recipes,
    pager,
    currentPage,
    recipesCount,
    pageCount
  } = props;

  if (!recipes) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  if (!recipes.length) {
    return (
      <div>
        There is no data.
      </div>
    );
  }

  return (
    <div className="container">
        <ul className="cards">
          {
            recipes.map(recipe => {
              return (
                <ListItemView
                  recipe={recipe}
                  key={recipe.slug}
                />
              );
            })
          }
        </ul>
      <ListPaginationView
        pageCount={pageCount}
        recipesCount={recipesCount}
        currentPage={currentPage} />
    </div>
  );
};

export default ListView;
