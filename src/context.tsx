import React, {useContext, useEffect, useState} from "react";
import { FavoriteDrink, Ingredient } from "./types";

type Props = {
  children: JSX.Element;
}


export const AppContext = React.createContext<any>({favoriteList: []});

export function AppProvider({children}: Props) {
  
  const localFavoriteList = localStorage.getItem('favoriteList');
  const localFavoriteIngredients = localStorage.getItem('favoriteIngredients');


  const [favoriteList, setFavoriteList] = useState<FavoriteDrink[]>(localFavoriteList 
    ? JSON.parse(localFavoriteList) : []);
    
  const [favoriteIngredients, setFavoriteIngredients] = useState<Ingredient[]>(localFavoriteIngredients 
    ? JSON.parse(localFavoriteIngredients) : []);
    
  function updateFavoriteList({idDrink, strDrinkThumb, strDrink} : FavoriteDrink){
    const currentDrink = {idDrink, strDrinkThumb, strDrink};
    setFavoriteList(prevList => {
      return prevList.some(drink => drink.idDrink === idDrink) 
      ? prevList.filter(drink => drink.idDrink !== idDrink) 
      : [...prevList, currentDrink]
    })
  }

  function updateFavoriteIngredients({idIngredient, strIngredient,
    strDescription, strType, strABV, strAlcohol} : Ingredient){
    const currentIngredient = {idIngredient, strIngredient,
      strDescription, strType, strABV, strAlcohol}; 
    setFavoriteIngredients(prevList => {
      return prevList.some(ingredient => ingredient.idIngredient === idIngredient) 
      ? prevList.filter(ingredient => ingredient.idIngredient !== idIngredient) 
      : [...prevList, currentIngredient]
    })
  }


  useEffect(()=> {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList])
  useEffect(()=> {
    localStorage.setItem("favoriteIngredients", JSON.stringify(favoriteIngredients));
  }, [favoriteIngredients])

  return (
    <AppContext.Provider value={{
      updateFavoriteList,
      favoriteList,
      updateFavoriteIngredients,
      favoriteIngredients
    }}>
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}