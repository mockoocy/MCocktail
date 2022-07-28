import React from 'react';
import { useGlobalContext } from '../../../context';
import StyledFavTab from '../styles/StyledFavTab';

function FavTab() {
  const {favoriteList} = useGlobalContext();
  return (
    <StyledFavTab>
      <h1>These are your favorites!</h1>
      <div className="favorites-container">
        {favoriteList}
      </div>
    </StyledFavTab>
  )
}

export default FavTab