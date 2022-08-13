import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Themes from '../data/themes';
import { Theme } from '../types';
import useOuterClick from '../hooks/useOuterClick';
import StyledThemeSelector from './styles/StyledThemeSelector';


type Props = {
  changeTheme: (theme: Theme) => void
}

function ThemeSelector({changeTheme}: Props) {
  const [open, setOpen] = useState(false);
  const themeSelectorRef = useOuterClick(closeThemeSelector);


  function openThemeSelector(){
    setOpen(true);
  }

  function closeThemeSelector(){
    setOpen(false)
  }

  const themeOptionsElements = Object.values(Themes).map((theme: Theme,id) =>(
    <li
    key={`themeOption-${id}`}
    className="theme-option"
    onClick={()=> changeTheme(theme)}>
      <div className="icon-container" style={{background:theme.colors.bgClr}}>

      <Icon className="theme-marker"
      icon="line-md:marker"
      color={theme.colors.fancyClr}
      />
      </div>
      {theme.name}
    </li>
  ))

  return (
    <StyledThemeSelector>
      <Icon icon="arcticons:theme-store" className="btn theme" onClick={openThemeSelector} ref={themeSelectorRef}/>
      {
        open &&
        <ul>
          {themeOptionsElements}
        </ul>
      }
    </StyledThemeSelector>
  )
}

export default ThemeSelector