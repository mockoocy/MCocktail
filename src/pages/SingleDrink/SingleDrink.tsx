import React, { useEffect, useState } from "react";
import DrinkTab from "./components/DrinkTab";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/useApiGet";
import { TApiResponse } from "../../types";
import urls from "../../data/urls.json"
import Loader from "../../components/Loader";
import {Drink, IngredientsWithMeasures } from "../../types"

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

  const fetchData : TApiResponse = useApiGet(`${urlDetailsById}${drinkId}`);
  let drinkInfo: any = fetchData.data?.drinks[0];

  useEffect(()=>{
  let ingredientsWithMeasures : IngredientsWithMeasures = {}
  if (fetchData.data?.drinks[0]){
  const drinkData : any = fetchData.data.drinks[0];

    for (let i=1;i<MAX_INGREDIENT_NUMBER; i++){
      const ingredient = drinkData[`strIngredient${i}`];
      const measure = drinkData[`strMeasure${i}`] 
      ? drinkData[`strMeasure${i}`]
      : "As much as you wish" ;
      if (ingredient) ingredientsWithMeasures[ingredient] = measure;

    }
  }

    if (drinkInfo){
      console.log(drinkInfo)
      const {idDrink,
        strDrink,
        strCategory,
        strIBA,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1} = drinkInfo 
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
  },[drinkInfo])
  return (
    <>
      {fetchData.loading
        ? <Loader text="Loading..."/>
        : <DrinkTab drink={drink}/>
      }
    </>
  )
}