import React from 'react'
import StyledCocktail from './styles/StyledCocktail'
import { Link } from 'react-router-dom'
import { FavoriteDrink } from '../types'

type Props = FavoriteDrink

function Cocktail({idDrink, strDrinkThumb, strDrink}: Props) {
  return (
    <StyledCocktail>
      <Link to={`/drink/${idDrink}`} >
        <img src={strDrinkThumb} alt={strDrink} />
        <span className="caption">{strDrink}</span>
      </Link>

    </StyledCocktail>
  )
}

export default Cocktail