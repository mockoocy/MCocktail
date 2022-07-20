import React from 'react';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home/Home"
import Themes from './data/themes';





function App()  {
  return (
    <ThemeProvider theme={Themes.darkTheme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Home />
        <Footer/>
      </>
    </ThemeProvider>
  ) 
}
export default App;