import React from 'react'
import { Ingredient } from '../../../types'
import urls from "../../../data/urls.json"
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import {dropShadowOutline} from "../../../utils/mixins"
import { useGlobalContext } from '../../../context';

type Props = {
  ingredient: Ingredient;
}

const StyledIngredientTab = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 3rem;
  background: var(--bgVariationClr);
  height: 100vh;

  @media (max-width:820px){
    margin-top: 12.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #image-container{
    height: 100%;
    position: relative;
    
    img {
      height: 100%;
      width: 100%;
    }
    #star {
      height: 4rem;
      width: 4rem;
      filter: ${dropShadowOutline(.0625, .0625, '#000')};
      color: #ddd; 
      position: absolute;
      margin: 0 10%;
      top: 2.5%;
      right: 0;
      transition: all 450ms linear;

      &:hover {
        transform: scale(1.15);
        color: var(--fancyClr);
      }
      &.active {
        color: var(--fancyClr);
      }
    }
  }
  #info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media (max-width:820px){
      width: 90%;
      overflow-y: scroll;

    }

    
    #name {
      color: var(--fancyClr);
      font-size: 3rem;
      text-align: center;
    }
    #side-info {
      display: flex;
      justify-content: space-around;
      color: var(--boringClr);
      font-size: 1.5rem;
      width: 100%;
      text-align: center;


    }
    #description-container{
      height: 100%;
      width: 100%;
      overflow-y: scroll;


      #description {
        color: var(--boringClr);
        font-size: 1rem;
      }
    }
  }

  `

function IngredientTab({ingredient}: Props) {
  const {favoriteIngredients, updateFavoriteIngredients} = useGlobalContext();
  const isFavorite = favoriteIngredients.some((ingr: Ingredient) => ingredient.idIngredient === ingr.idIngredient);
  const displayABV = ingredient.strABV ? ingredient.strABV : "0"
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
          <p id="description">{ingredient.strDescription}</p>
        </div>
      </div>
    </StyledIngredientTab>
  )
}

export default IngredientTab