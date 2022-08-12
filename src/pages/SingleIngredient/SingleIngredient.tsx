import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import urls from "../../data/urls.json";
import { Ingredient } from '../../types';
import IngredientTab from './Components/IngredientTab';
import { useQuery } from '@tanstack/react-query';
import randomSample from '../../utils/randomSample';
import DrinkGallery from '../../components/DrinkGallery';
import Cocktail from '../../components/Cocktail';

const StyledSingleIngredient = styled.section`
  padding: 2.5% 10%;
  h3 {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    color: var(--boringClr);
    margin: 5% 0;
  }
`
const SAMPLE_DRINKS_AMOUNT = 8;

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
  },[data]);

  const sampleDrinksQuery = useQuery(["fewDrinks"], getFewDrinks);
  const drinksSample = sampleDrinksQuery.data ? sampleDrinksQuery.data : []
  async function getFewDrinks(){
    const response = await fetch(`${urls.urlIngredient}${ingredientName}`);
    const data = await response.json();
    if (data.drinks !== "None Found"){
      const randomDrinksSample = await randomSample(data.drinks, SAMPLE_DRINKS_AMOUNT);
      return randomDrinksSample
    }
    return [];
  }

  const drinksSampleElements = drinksSample.map(drink => (
    <Cocktail 
      idDrink={drink.idDrink}
      strDrinkThumb={drink.strDrinkThumb}
      strDrink={drink.strDrink}    
    />
  ))


  return (
    <StyledSingleIngredient>
      <IngredientTab ingredient={ingredientData}/>
      <h3>Here are some drinks you can make using this ingredient</h3>
      <DrinkGallery children={drinksSampleElements}/>
    </StyledSingleIngredient>
  )
}

export default SingleIngredient