import React from 'react'
import { Ingredient } from '../../../types'
import urls from "../../../data/urls.json"
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../../../context';
import StyledIngredientTab from './styles/StyledIngredientTab';


type Props = {
  ingredient: Ingredient;
}



function IngredientTab({ingredient}: Props) {
  const {favoriteIngredients, updateFavoriteIngredients} = useGlobalContext();
  const isFavorite = favoriteIngredients.some((ingr: Ingredient) => ingredient.idIngredient === ingr.idIngredient);
  const displayABV = ingredient.strABV ? ingredient.strABV : "0";
  const displayDescription = ingredient.strDescription ? ingredient.strDescription : "Sadly, there is no description provided for this ingredient"
  return (
    <StyledIngredientTab>
      <div id="image-container">
        <img src={`${urls.urlImageByIngredient}${ingredient.strIngredient}.png`} alt="" id="ingredient-image" />
        <Icon icon="carbon:star-filled" id="star"
        onClick={()=> updateFavoriteIngredients(ingredient)}
        className={isFavorite ? "active" : ""} />
      </div>
      <div id="info-section">
        <h1 id="name">{ingredient.strIngredient}</h1>
        <div id="side-info">
          <h3 id="type">Type: {ingredient.strType}</h3>
          <h3 id="abv">ABV: {displayABV}%</h3>
        </div>
        <div id="description-container">
          <p id="description">{displayDescription}</p>
        </div>
      </div>
    </StyledIngredientTab>
  )
}

export default IngredientTab