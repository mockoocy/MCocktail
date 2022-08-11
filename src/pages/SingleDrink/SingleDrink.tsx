import React, { useEffect, useState } from "react";
import DrinkTab from "./components/DrinkTab";
import { useParams } from "react-router-dom";
import urls from "../../data/urls.json"
import Loader from "../../components/Loader";
import {Drink, IngredientsWithMeasures } from "../../types"
import { useQuery } from "@tanstack/react-query";

export default function SingleDrink(){
  const MAX_INGREDIENT_NUMBER = 16;

  const [drink, setDrink] = useState<Drink>({
  idDrink: '',
  strDrink: '',
  strCategory: '',
  strIBA: '',
  strAlcoholic: '',
  strGlass: '',
  strInstructions: '',
  strDrinkThumb: '',
  strIngredient1: '',
  ingredientsWithMeasures: {}
  });

  const {drinkId} = useParams();

  const {urlDetailsById} = urls;
  const fetchUrl = `${urlDetailsById}${drinkId}`

  const {data, isLoading} = useQuery(["drinkInfo"],fetchDrinkInfo);
  const drinkData = data?.drinks[0];

  async function fetchDrinkInfo(){
    const response = await fetch(fetchUrl);
    return response.json();
  }

  useEffect(()=>{
  let ingredientsWithMeasures : IngredientsWithMeasures = {}
  if (drinkData){
  const drinkInfo : any = drinkData;

    for (let i=1;i<MAX_INGREDIENT_NUMBER; i++){
      const ingredient = drinkInfo[`strIngredient${i}`];
      const measure = drinkInfo[`strMeasure${i}`] 
      ? drinkData[`strMeasure${i}`]
      : "As much as you wish" ;
      if (ingredient) ingredientsWithMeasures[ingredient] = measure;

    }
  }

    if (drinkData){
      const {idDrink,
        strDrink,
        strCategory,
        strIBA,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1} = drinkData 
      setDrink({idDrink,
        strDrink,
        strCategory,
        strIBA,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1,
        ingredientsWithMeasures});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[drinkData])
  return (
    <>
      {isLoading
        ? <Loader text="Loading..."/>
        : <DrinkTab drink={drink}/>
      }
    </>
  )
}