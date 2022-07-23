import React, {useContext} from "react";

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