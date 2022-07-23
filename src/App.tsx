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


function App()  {
  const [theme, setTheme] = useState(Themes.darkTheme);

function changeTheme(theme: Theme){
  setTheme(theme)
}

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar changeTheme={changeTheme}/>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='single' element={<SingleDrink/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  ) 
}
export default App;