import React from "react";
import StyledNavbar from "./styles/StyledNavbar";
import SearchBar from "./SearchBar";
import ThemeSelector from "./ThemeSelector";
import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {Theme} from "../types"

type Props = {
  changeTheme: (theme: Theme) => void
}

function Navbar({changeTheme}: Props){

  return (
    <StyledNavbar >
      <Link to="/" className="logo-container">
      <Logo className="logo"/>
      </Link>
      <SearchBar />
      <div className="button-container" >
        <ThemeSelector changeTheme={changeTheme}/>
        <NavLink to = '/thanks'>
          <Icon icon="akar-icons:heart" className="btn icon-hear"/>
        </NavLink>
        <NavLink to = '/generate/'>
          <Icon icon="ic:baseline-computer" className="btn generate"/>
        </NavLink>
        <NavLink to = '/favs/'>
          <Icon icon="gis:globe-favorite" className="btn icon-favorite"/>
        </NavLink>
        </div>
    </StyledNavbar>
  )
}




export default Navbar