import React, { useState } from "react";
import StyledNavbar from "./styles/StyledNavbar";
import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import {ReactComponent as Logo} from '../assets/LogoDark.svg';
import {ReactComponent as LogoTextDark} from '../assets/MCocktailDark.svg';
import Themes from "../data/themes"
import {Theme} from "../types"
import useOuterClick from "../hooks/useOuterClick"

type Props = {
  changeTheme: (theme: Theme) => void
}

function Navbar({changeTheme}: Props){
  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);
  const themeSelectorRef = useOuterClick(closeThemeSelector)
  function openThemeSelector(){
    setThemeSelectorOpen(true)
  }

  function closeThemeSelector(){
    setThemeSelectorOpen(false)
  }


  return (
    <StyledNavbar >
      <Link to="/" className="logo-container">
        <LogoTextDark className="logo-text"/>
        <Logo className="logo"/>
      </Link>
      <SearchBar />
      <div className="button-container" >
        <NavLink to = '/thanks'>
          <Icon icon="akar-icons:heart" className="btn icon-hear"/>
        </NavLink>
        <NavLink to = '/'>
          <Icon icon="ic:baseline-computer" className="btn generate"/>
        </NavLink>
        <NavLink to = '/favs/'>
          <Icon icon="gis:globe-favorite" className="btn icon-favorite"/>
        </NavLink>
        <Icon icon="arcticons:theme-store" className="btn theme" onClick={openThemeSelector} ref={themeSelectorRef} />
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
              <li className="theme-option" onClick={()=> changeTheme(Themes.happyTheme)}>Happy</li>
              <li className="theme-option" onClick={()=> changeTheme(Themes.sunsetTheme)}>Sunset</li>



            </ul>
          
          }

    </StyledNavbar>
  )
}




export default Navbar