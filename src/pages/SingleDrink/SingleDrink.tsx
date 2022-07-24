import React, { useEffect, useState } from "react";
import DrinkTab from "./components/DrinkTab";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/useApiGet";
import { TApiResponse } from "../../types";
import urls from "../../data/urls.json"
import Loader from "../../components/Loader";
export default function SingleDrink(){

  type Drink = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strDrinkThumb: string;
    ingredientsWithMeasures: ingredientsAndMeasures;
    // For a shortcut I have assigned some other attributes to the drink state. 
    // I won't throw it away anyway, because of the suggestion I will get tahnks to this type 

  }

  interface ingredientsAndMeasures  {
    [key: string]: string;
  }

 // DRINK TO TYPES.TS, USEFETCH -> ASYNC FUNCTION INSTEAD OF useApiGet

  const [drink, setDrink] = useState<undefined | Drink>();
  const {drinkId} = useParams();
  const {urlDetailsById} = urls;

  const fetchData : TApiResponse = useApiGet(`${urlDetailsById}${drinkId}`);
  let drinkInfo = fetchData.data?.drinks[0]
  let ingredientsWithMeasures : ingredientsAndMeasures = {}

  if (fetchData.data?.drinks[0]){
    const drinkData : any = fetchData.data.drinks[0];

    for (let i=1;i<16; i++){
      const ingredient = drinkData[`strIngredient${i}`];
      const measure = drinkData[`strMeasure${i}`] 
      ? drinkData[`strMeasure${i}`]
      : "As much as you wish" ;
      if (ingredient) ingredientsWithMeasures[ingredient] = measure;

    }
  }

  useEffect(()=>{
    if (drinkInfo){
      setDrink({...drinkInfo, ingredientsWithMeasures});
      console.log(drink)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[drinkInfo])
  return (
    <>
      {fetchData.loading
        ? <Loader text="Loading..."/>
        : <DrinkTab/>
      }
    </>
  )
}