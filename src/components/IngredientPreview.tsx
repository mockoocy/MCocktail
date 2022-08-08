import React from 'react';
import { Link } from 'react-router-dom';
import { Ingredient } from '../types';
import urls from '../data/urls.json';
import StyledIngredientPreview from "./styles/StyledIngredientPreview"
type Props = {
  ingredient: Ingredient
}



function IngredientPreview({ingredient}: Props ) {
  return (
    <StyledIngredientPreview>
      <Link to={`../ingredient/${ingredient.strIngredient}`}>
        <img src={`${urls.urlImageByIngredient}${ingredient.strIngredient}-Medium.png`} alt="" />
        <span className="caption">{ingredient.strIngredient}</span>
      </Link>
    </StyledIngredientPreview>
  )
}

export default IngredientPreview;