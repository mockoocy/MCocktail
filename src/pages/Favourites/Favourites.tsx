import React from 'react'
import styled from 'styled-components';
import Cocktail from '../../components/Cocktail';
import { useGlobalContext } from '../../context';
import { FavoriteDrink } from '../../types';
import DrinkGallery from '../../components/DrinkGallery';
import { textOutline } from '../../utils/mixins';

const StyledFavourites = styled.section`
  padding: 2.5% 10%;

  h1{
  font-size: 5rem;
  color: var(--fancyClr);
  ${textOutline(.125, .25, "var(--boringClr)")};
  text-align: center;

    @media (max-width: 820px){
      font-size: 2.5rem;
      ${textOutline(.0625, .125, "var(--boringClr)")};
    }
  }
`

function Favourites() {
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
    <StyledFavourites>
      <h1>These are your favourites!</h1>
      <DrinkGallery
        children={favElements}/>
    </StyledFavourites>
  )
}

export default Favourites