import React from 'react';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from "./pages/Home/Home"

type Colors = {
  bgClr: string;
  fancyClr: string;
  boringClr: string;
  selectionClr ?: string;
}

type Theme = {
  colors : Colors
}

const darkTheme: Theme = {
  colors: {
    bgClr: 'rgb(15, 15, 15)',
    fancyClr: 'rgb(127, 255, 212)',
    boringClr: 'rgb(235, 255, 251)',
    selectionClr: '#5f5f5f'
  }
}

const lightTheme: Theme = {
  colors: {
    bgClr: 'rgb(235, 255, 251)',
    fancyClr: 'rgb(2, 141, 113)',
    boringClr: 'rgb(15, 15, 15)',
    selectionClr: '#83f1d0'
  }
}



function App()  {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Home />
      </>
    </ThemeProvider>
  ) 
}
export type {Theme};
export default App;