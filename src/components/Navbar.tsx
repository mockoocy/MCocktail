import StyledNavbar from "./styles/StyledNavbar"
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import {ReactComponent as Logo} from '../assets/LogoDark.svg';
import {ReactComponent as LogoTextDark} from '../assets/MCocktailDark.svg';
import Themes from "../data/themes"
import {Theme} from "../types"
type Props = {
  changeTheme: (theme: Theme) => void
}

function Navbar({changeTheme}: Props){
  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);

  function openThemeSelector(){
    setThemeSelectorOpen(true)
  }

  function closeThemeSelector(){
    setThemeSelectorOpen(false)
  }


  return (
    <StyledNavbar onClick={themeSelectorOpen ? closeThemeSelector : undefined} >
      <div className="logo-container">
        <LogoTextDark className="logo-text"/>
        <Logo className="logo"/>
      </div>
      <div className="button-container" >
        <Icon icon="akar-icons:heart" className="btn icon-hear"/>
        <Icon icon="akar-icons:book" className="btn icon-book"/>
        <Icon icon="ic:baseline-computer" className="btn icon-computer"/>
        <Icon icon="arcticons:theme-store" className="btn theme" onClick={openThemeSelector}  />
        </div>
          {themeSelectorOpen 
          &&
            <ul className="dropdown-list" >
              <li className="theme-option" onClick={()=> changeTheme(Themes.darkTheme)}>Dark</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.lightTheme)}>Light</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.greenTheme)}>Green</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.FuschiaTheme)}>Fuschia</li>

            </ul>
          
          }

    </StyledNavbar>
  )
}




export default Navbar