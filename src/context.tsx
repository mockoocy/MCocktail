import React, {useState, useContext, SetStateAction} from "react";
import Themes from "./data/Themes";
import { Theme } from "./types";

type Props = {
  children: JSX.Element;
}


export const AppContext = React.createContext<{}>({});

export function AppProvider({children}: Props) {


  return (
    <AppContext.Provider value={{
    }}>
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}