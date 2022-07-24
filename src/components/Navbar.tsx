import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StyledNavbar from "./styles/StyledNavbar"
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
        <NavLink to = '/'>
          <Icon icon="akar-icons:heart" className="btn icon-hear"/>
        </NavLink>

        <NavLink to = '/'>
          <Icon icon="akar-icons:book" className="btn icon-book"/>
        </NavLink>
        <NavLink to = '/'>
          <Icon icon="ic:baseline-computer" className="btn icon-computer"/>
        </NavLink>
        <Icon icon="arcticons:theme-store" className="btn theme" onClick={openThemeSelector}  />
        </div>
          {themeSelectorOpen 
          &&
            <ul className="dropdown-list" >
              <li className="theme-option" onClick={()=> changeTheme(Themes.darkTheme)}>Dark</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.lightTheme)}>Light</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.greenTheme)}>Green</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.fuschiaTheme)}>Fuschia</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.monoTheme)}>Mono</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.peachTheme)}>Peach</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.vividTheme)}>Vivid</li>




            </ul>
          
          }

    </StyledNavbar>
  )
}




export default Navbar