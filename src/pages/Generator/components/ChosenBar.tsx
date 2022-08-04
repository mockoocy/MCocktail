import { Icon } from "@iconify/react";
import React from "react";
import StyledChosenBar from "../styles/styledChosenBar";


type Props = {
  chosenIngredients: any[];
  ejectIngredient: Function;
}

function ChosenBar({chosenIngredients, ejectIngredient} : Props) {

  
  const IngredientElements = chosenIngredients.map((ingredient,id) =>(
    <div className="ingredient" key={id}>
      <h3 className="name">{ingredient.strIngredient1}</h3>
      <Icon className="cross" icon="akar-icons:cross" onClick={()=>ejectIngredient(ingredient.strIngredient1)}/>
    </div>
  ))
  
  return (
    <StyledChosenBar>
      <div className="info-container">
        <h1 className="info">Chosen Ingredients</h1>
      </div>
      <div className="ingredients-container">
      {IngredientElements.length > 0 
      ?
        IngredientElements
        : 
        <h1 className="info-empty">It's empty</h1>
      }
      </div>
    </StyledChosenBar>
  )
}

export default ChosenBar