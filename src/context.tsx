import React, {useContext, useEffect, useState} from "react";
import { Drink, FavoriteDrink } from "./types";

type Props = {
  children: JSX.Element;
}


export const AppContext = React.createContext<any>({favoriteList: []});

export function AppProvider({children}: Props) {
  
  const localFavoriteList = localStorage.getItem('favoriteList')

  const [favoriteList, setFavoriteList] = useState<FavoriteDrink[]>(localFavoriteList 
    ? JSON.parse(localFavoriteList) : []);

  async function updateFavoriteList({idDrink, strDrinkThumb, strDrink} : FavoriteDrink){
    const currentDrink = {idDrink, strDrinkThumb, strDrink};
    setFavoriteList(prevList => {
      return prevList.some(drink => drink.idDrink === idDrink) 
      ? prevList.filter(drink => drink.idDrink !== idDrink) 
      : [...prevList, currentDrink]
    })
  }

  useEffect(()=> {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList])

  return (
    <AppContext.Provider value={{
      updateFavoriteList,
      favoriteList
    }}>
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}