import React from 'react'
import styled from 'styled-components';
import Cocktail from '../../components/Cocktail';
import IngredientPreview from '../../components/IngredientPreview';
import { useGlobalContext } from '../../context';
import { FavoriteDrink, Ingredient } from '../../types';
import DrinkGallery from '../../components/DrinkGallery';
import { textOutline } from '../../utils/mixins';

const StyledFavourites = styled.section`
  padding: 2.5% 10%;

  @media (max-width:820px){
    margin-top: 10vh;
  }

  h1{
  font-size: 5rem;
  color: var(--fancyClr);
  ${textOutline(.125, .25, "var(--boringClr)")};
  text-align: center;
  margin-bottom: 2rem;

    @media (max-width: 820px){
      font-size: 2.5rem;
      ${textOutline(.0625, .125, "var(--boringClr)")};
    }
  }
`

function Favourites() {
  const {favoriteList, favoriteIngredients} = useGlobalContext();

  const favElements = favoriteList.map((fav:FavoriteDrink,id: React.Key) => (
    <Cocktail
      key={id}
      idDrink={fav.idDrink}
      strDrinkThumb={fav.strDrinkThumb}
      strDrink={fav.strDrink}
    />
  ))

  const favIngredientsElements = favoriteIngredients.map((ingredient: Ingredient, id: number) => (
    <IngredientPreview
    key={`favoriteIngredient-${id}`}
    ingredient={ingredient}
    />

  ))
  return (
    <StyledFavourites>
      <h1>These are your favourite drinks</h1>
      <DrinkGallery
        children={favElements}/>
      <h1>These are your favourite ingredients</h1>
      <DrinkGallery
        children={favIngredientsElements}/>
    </StyledFavourites>

  )
}

export default Favourites