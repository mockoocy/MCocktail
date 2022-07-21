import React, { useState } from 'react';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home/Home"
import Themes from "./data/Themes"
import { Theme } from './types';

function App()  {
  const [theme, setTheme] = useState(Themes.darkTheme);

function changeTheme(theme: Theme){
  setTheme(theme)
}

  return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar changeTheme={changeTheme}/>
          <Home />
          <Footer/>
        </>
      </ThemeProvider>
  ) 
}
export default App;