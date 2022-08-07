import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import urls from "../../data/urls.json";
import { Ingredient } from '../../types';
import IngredientTab from './Components/IngredientTab';

function SingleIngredient() {
  const [ingredientData, setIngredientData] = useState<Ingredient>({
    idIngredient: "",
    strIngredient: "",
    strDescription: "",
    strType: "",
    strAlcohol: "", 
    strABV: "",
  })
  const {ingredientName} = useParams();

  useEffect(()=>{
    async function fetchIngredientInfo(){
      const response = await fetch(`${urls.urlIngredientByName}${ingredientName}`)
      const data = await response.json();
      data.ingredients && setIngredientData(data.ingredients[0]);
    }
  fetchIngredientInfo();
  },[ingredientName])
  console.log(ingredientData)
  return (
    <IngredientTab ingredient={ingredientData}/>
  )
}

export default SingleIngredient