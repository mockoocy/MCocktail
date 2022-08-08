import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ingredient } from '../types';
import urls from '../data/urls.json';

type Props = {
  ingredient: Ingredient
}

const StyleIngredientPreview = styled.div`
  position: relative;
  padding: 5% 0;
  background-color: var(--captionClr);
  border-radius: 2rem;
  img {
    aspect-ratio: 1.5;
    flex: 0 1 auto;
    width: 100%;
    height: 100%;
    border-radius: 2rem;

    &:hover {
    cursor: pointer;
    transform: scale(1.05);
    }
  }
  .caption {
    background-color: var(--captionClr); 
    color: var(--fancyClr);
    height: auto;
    font-size: 1.5rem;
    border-radius: 2rem;
    width: 80%;
    margin: 0 10%;
    text-align: center;
    position: absolute;
    bottom: 15%;

    @media (max-width: 820px) {
      font-size: 1rem;
      width: 90%;
      margin: 0 5%;
    }
  }
`

function IngredientPreview({ingredient}: Props ) {
  return (
    <StyleIngredientPreview>
      <Link to={`../ingredient/${ingredient.strIngredient}`}>
        <img src={`${urls.urlImageByIngredient}${ingredient.strIngredient}-Medium.png`} alt="" />
        <span className="caption">{ingredient.strIngredient}</span>
      </Link>
    </StyleIngredientPreview>
  )
}

export default IngredientPreview;