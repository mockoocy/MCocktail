import React from 'react'
import StyledDrinkTab from '../styles/StyledDrinkTab'
import {Drink} from "../../../types"

type Props = {
  drink: Drink;
}

function DrinkTab({drink}: Props) {
  
  return (
    <StyledDrinkTab>
      <div className="drink-info-container">
        <img src="" alt="" className="drink-image" />
        <div className="main-info">
          <h1 className="drink-name"></h1>
          <h3 className="category"></h3>
          <h4 className="main-ingredient"></h4>
          <div className="less-important-info">
            <h5 className="alcohol"></h5>
            <h5 className="iba"></h5>
          </div>
        </div>
        <div className="preparation-info">
          <ul className="ingredients-list">
            <li>ingr1</li>
            <li>ingr2</li>
            <li>ingr3</li>
          </ul>
          <h3 className="glass-type"></h3>
          <h2 className="instructions"></h2>
        </div>
      </div>
    </StyledDrinkTab>
  )
}

export default DrinkTab