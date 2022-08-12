import React from "react";
import StyledNavbar from "./styles/StyledNavbar";
import SearchBar from "./SearchBar";
import ThemeSelector from "./ThemeSelector";
import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {Theme} from "../types"
import smokebook from "../assets/smokebook.png"

type Props = {
  changeTheme: (theme: Theme) => void
}

function Navbar({changeTheme}: Props){
  return (
    <StyledNavbar>
      <div className="background-image-container">
        <img src={smokebook} alt="eeeewqeqwrqwevdsmkmddkskfds" />
      </div>
      <Link to="/" className="logo-container">
      <Logo className="logo"/>
      </Link>
      <SearchBar />
      <div className="button-container" >
        <ThemeSelector changeTheme={changeTheme}/>
        <NavLink to="/" className={({isActive})=> isActive ? "active-btn" : ''}>
          <Icon icon="ant-design:home-outlined" className="btn icon-home" />
        </NavLink>
        <NavLink to='/thanks' className={({isActive})=> isActive ? "active-btn" : ''}>
          <Icon icon="akar-icons:heart" className="btn icon-heart"/>
        </NavLink>
        <NavLink to='/generate/' className={({isActive})=> isActive ? "active-btn" : ''}>
          <Icon icon="ic:baseline-computer" className="btn icon-generate"/>
        </NavLink>
        <NavLink to='/favs/' className={({isActive})=> isActive ? "active-btn" : ''}>
          <Icon icon="gis:globe-favorite" className="btn icon-favorite"/>
        </NavLink>
        </div>
    </StyledNavbar>
  )
}




export default Navbar