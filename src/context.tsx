import React, {useContext, useState} from "react";

type Props = {
  children: JSX.Element;
}


export const AppContext = React.createContext<any>({});

export function AppProvider({children}: Props) {
  
  const localFavoriteList = localStorage.getItem('favoriteList')

  const [favoriteList, setFavoriteList] = useState<string[]>(localFavoriteList 
    ? JSON.parse(localFavoriteList) : []);

  function updateFavoriteList(idDrink: string){
    setFavoriteList(prevList => prevList.includes(idDrink) ? prevList.filter(id => id !== idDrink) : [...prevList, idDrink]
    );
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList))
    
  }

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