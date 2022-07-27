//Global Imports
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyles from './components/styles/Global';
//Themes 
import { ThemeProvider } from 'styled-components';
import Themes from "./data/themes"
import { Theme } from './types';
//Pages
import Home from "./pages/Home/Home"
import SingleDrink from "./pages/SingleDrink/SingleDrink"
import Error from './pages/Error/Error';
import Thanks from './pages/Thanks/Thanks';


function App()  {
  const themeFromStorage = localStorage.getItem("theme");

  const [theme, setTheme] = useState(themeFromStorage ? JSON.parse(themeFromStorage) : Themes.darkTheme);



function changeTheme(theme: Theme){
  localStorage.setItem("theme", JSON.stringify(theme))
  setTheme(theme)
}

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar changeTheme={changeTheme}/>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='drink/:drinkId' element={<SingleDrink/>}/>
          <Route path="/thanks/" element={<Thanks/>}/>
          <Route path ='*' element={<Error/>}/>
        </Routes>

        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  ) 
}
export default App;