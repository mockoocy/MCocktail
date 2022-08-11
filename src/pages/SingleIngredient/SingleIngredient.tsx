import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import urls from "../../data/urls.json";
import { Ingredient } from '../../types';
import IngredientTab from './Components/IngredientTab';
import { useQuery } from '@tanstack/react-query';

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

  async function fetchIngredientInfo(){
    const response = await fetch(`${urls.urlIngredientByName}${ingredientName}`);
    return response.json();
  }

  const {data} = useQuery(["fetchIngredient"],fetchIngredientInfo);
  useEffect(()=>{
    if (data) setIngredientData(data?.ingredients[0])
  },[data])

  return (
    <StyledSingleIngredient>
      <IngredientTab ingredient={ingredientData}/>
    </StyledSingleIngredient>
  )
}

export default SingleIngredient