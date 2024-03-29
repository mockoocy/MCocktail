import React from 'react';
import StyledDrinkTab from '../styles/StyledDrinkTab';
import {Drink} from "../../../types";
import urls from "../../../data/urls.json";
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../../../context';
import { Link } from 'react-router-dom';
const {urlImageByIngredient} = urls;

type Props = {
  drink: Drink;
}


function DrinkTab({drink}: Props) {
  const {updateFavoriteList, favoriteList} = useGlobalContext();
  const {
    idDrink,
    strDrink,
    strCategory,
    strIBA,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    strIngredient1,
    ingredientsWithMeasures} = drink

    const isFavorite = favoriteList.some((drink:Drink) => drink.idDrink === idDrink) ? true : false;
    const ingredients = Object.keys(ingredientsWithMeasures);
    const ingredientElements = ingredients.map((ingredient, id) => (
      <li className="ingredient"
      key={id}>
        <Link to={`../ingredient/${ingredient}`}><span className="ingredient-name">{ingredient}</span></Link>
        <span className="ingredient-measure">{ingredientsWithMeasures[ingredient]}</span>
      </li>
      )
    )

  return (
    <StyledDrinkTab>
      <div className="img-container">
          <img src={strDrinkThumb} alt={strDrink} className="drink-image" />
          <Icon icon="carbon:star-filled" id="star" 
          onClick={() => updateFavoriteList(drink)}
          className={isFavorite ? "active" : ""}/> 
      </div>
        
        <div className="info-container">
          <div className="main-info">
            <h1 className="drink-name">{strDrink} {`${isFavorite ? '✨' : ''}`}</h1>
              <h3 className="category">{strCategory}</h3>
            <div className="less-important-info">
              <div className="main-ingredient-container">
                <h4 className="main-ingredient">{strIngredient1}</h4>
                <img src={`${urlImageByIngredient}${strIngredient1}-small.png`}  alt=""  className="main-ingredient-image" />
              </div>
                <h5 className="iba">{strIBA}</h5>
            </div>
          </div>
          <div className="preparation-info">
            <div className="ingredients-glass">
              <div className="ingredients-container">
                <h3 className="ingredients-title subtitle">Ingredients:</h3>
                <ul className="ingredients-list">
                  {ingredientElements}
                </ul>
              </div>
              <div className="glass-alcohol container">

                <div className="container glass-container">
                  <h3 className="glass-title subtitle">Glass type:</h3>
                  <h4 className="glass-type type">{strGlass}</h4>
                </div>
                <div className="container alcoholic-container">
                  <h3 className="alcoholic-title subtitle">Alcoholic:</h3>
                  <h4 className="alcoholic-type type">{strAlcoholic}</h4>
                </div>
              </div>
            </div>
            <div className="instructions-container">
              <h2 className="instructions subtitle">Instructions:</h2>
              <p className="instruction">{strInstructions}</p>
            </div>
          </div>
        </div>
    </StyledDrinkTab>
  )
}

export default DrinkTab