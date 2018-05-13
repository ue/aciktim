import React from 'react';
import { Link } from 'react-router-dom';

export const ListItemView = props => {
  const { recipe } = props;

  return (
    <li key={recipe.Id} className="cards_item">
        <div className="card">
        <Link to={`/recipe/${Math.floor(Math.random() * recipe.Id)}`}>
            <div className="card_image">
                <img alt={recipe.Title} src={recipe.ImageUrl} />
            </div>
            <div className="card_content">
                <h2 className="card_heading">{recipe.Title}</h2>
                <div className="profile">
                    <img alt={recipe.Author.DisplayName} className="user-avatar" src={recipe.Author.AvatarImageUrl}/>
                    <p>{recipe.Author.DisplayName}</p>
                </div>
            </div>
        </Link>
        </div>
    </li>
  );
}

export default ListItemView;
