import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import urls from "../../data/urls.json";
import { Ingredient } from '../../types';
import IngredientTab from './Components/IngredientTab';

const StyledSingleIngredient = styled.section`
  padding: 2.5% 10%;
`

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
  return (
    <StyledSingleIngredient>
      <IngredientTab ingredient={ingredientData}/>
    </StyledSingleIngredient>
  )
}

export default SingleIngredient