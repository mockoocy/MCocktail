//Global Imports
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyles from './components/styles/Global';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
//Themes 
import { ThemeProvider } from 'styled-components';
import Themes from "./data/themes"
import { Theme } from './types';
//Pages
import Home from "./pages/Home/Home"
import SingleDrink from "./pages/SingleDrink/SingleDrink"
import Error from './pages/Error/Error';
import Thanks from './pages/Thanks/Thanks';
import Favourites from './pages/Favourites/Favourites';
import Generator from './pages/Generator/Generator';
import SingleIngredient from './pages/SingleIngredient/SingleIngredient';


function App()  {
  const themeFromStorage = localStorage.getItem("theme");

  const [theme, setTheme] = useState(themeFromStorage ? JSON.parse(themeFromStorage) : Themes.darkTheme);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

function changeTheme(theme: Theme){
  localStorage.setItem("theme", JSON.stringify(theme));
  setTheme(theme);
}

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar changeTheme={changeTheme}/>
          <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path ='drink/:drinkId' element={<SingleDrink/>}/>
            <Route path="/thanks/" element={<Thanks/>}/>
            <Route path ="/favs/" element={<Favourites/>}/>
            <Route path ='ingredient/:ingredientName' element={<SingleIngredient/>}/>
            <Route path="/generate/" element={<Generator/>}>
            </Route>
            <Route path ='*' element={<Error/>}/>
          </Routes>
          <Footer/>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  ) 
}
export default App;