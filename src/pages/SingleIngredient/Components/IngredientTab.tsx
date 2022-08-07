import React from 'react'
import { Ingredient } from '../../../types'
import urls from "../../../data/urls.json"

type Props = {
  ingredient: Ingredient;
}

function IngredientTab({ingredient}: Props) {
  return (
    <section>
      <img src={`${urls.urlImageByIngredient}${ingredient.strIngredient}.png`} alt="" id="ingredient-image" />
      <div id="info-section">
        <h1 id="name">{ingredient.strIngredient}</h1>
        <div id="side-info">
          <h3 id="type">{ingredient.strType}</h3>
          <h3 id="abv">{ingredient.strABV}</h3>
        </div>
        <div id="description-container">
          <p id="description">{ingredient.strDescription}</p>
        </div>
      </div>
    </section>
  )
}

export default IngredientTab