import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyles from './components/styles/Global';
import Home from "./pages/Home/Home"

import { ThemeProvider } from 'styled-components';
import Themes from "./data/themes"
import { Theme } from './types';

import {BrowserRouter, Routes, Route} from "react-router-dom"


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
        </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  ) 
}
export default App;