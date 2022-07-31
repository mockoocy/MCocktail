import React from 'react';
import { useGlobalContext } from '../../../context';
import StyledFavTab from '../styles/StyledFavTab';
import Cocktail from '../../../components/Cocktail';
import { FavoriteDrink } from '../../../types';

function FavTab() {
  const {favoriteList} = useGlobalContext();

  const favElements = favoriteList.map((fav:FavoriteDrink,id: React.Key) => (
    <Cocktail
      key={id}
      idDrink={fav.idDrink}
      strDrinkThumb={fav.strDrinkThumb}
      strDrink={fav.strDrink}
    />
  ))

  return (
    <StyledFavTab>
      <h1>These are your favorites!</h1>
      <div className="favorites-container">
        {favElements}
      </div>
    </StyledFavTab>
  )
}

export default FavTab