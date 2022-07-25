import React from 'react'
import StyledDrinkTab from '../styles/StyledDrinkTab'
import {Drink} from "../../../types"
import urls from "../../../data/urls.json"

const {urlImageByIngredient} = urls;

type Props = {
  drink: Drink;
}

function DrinkTab({drink}: Props) {
  const {
    strDrink,
    strCategory,
    strIBA,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    ingredientsWithMeasures} = drink

  return (
    <StyledDrinkTab>
      <div className="img-container">
          <img src={strDrinkThumb} alt={strDrink} className="drink-image" />
      </div>
        
        <div className="info-container">
          <div className="main-info">
            <h1 className="drink-name">{strDrink}</h1>
            <h3 className="category">{strCategory}</h3>
            <div className="main-ingredient-container">
              <h4 className="main-ingredient">{strIngredient1}</h4>
              <img src={`${urlImageByIngredient}${strIngredient1}.png`}  className="main-ingredient-image" />
            </div>
            <div className="less-important-info">
              <h5 className="alcohol">{strAlcoholic}</h5>
              <h5 className="iba">{strIBA}</h5>
            </div>
          </div>
          <div className="preparation-info">
            <div className="ingredients-glass">
              <div className="ingredients-container">
                <h3 className="ingredients-title">Ingredients:</h3>
                <ul className="ingredients-list">
                  <li className="ingredient">ingr1</li>
                  <li className="ingredient">ingr221434231</li>
                  <li className="ingredient">ingr3</li>
                </ul>
              </div>
                <div className="glass-container">
                  <h3 className="glass-title">Glass type:</h3>
                  <h4 className="glass-type">{strGlass}</h4>
                </div>
            </div>
            <div className="instructions-container">
              <h2 className="instructions">Instructions:</h2>
              <p className="instruction">{strInstructions}</p>
            </div>
          </div>
        </div>
    </StyledDrinkTab>
  )
}

export default DrinkTab