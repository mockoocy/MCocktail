import StyledNavbar from "./styles/StyledNavbar"
import React from "react";
import { Icon } from '@iconify/react';

import {ReactComponent as Logo} from '../assets/LogoDark.svg';
import {ReactComponent as LogoTextDark} from '../assets/MCocktailDark.svg';
import {ReactComponent as ThemeSwitcher} from '../assets/ThemeSwitch.svg';


function Navbar(){
  return (
    <StyledNavbar>
      <div className="logo-container">
        <LogoTextDark className="logo-text"/>
        <Logo className="logo"/>
      </div>
      <div className="button-container">
        <button className="btn browse">Browse</button>
        <button className=" btn generate">Generate</button>
        <Icon icon="arcticons:theme-store" className="btn theme" />
      </div>
    </StyledNavbar>
  )
}




export default Navbar