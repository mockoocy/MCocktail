import React, { useState } from 'react'
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Themes from '../data/themes';
import { Theme } from '../types';
import useOuterClick from '../hooks/useOuterClick';

const StyledThemeSelector = styled.div`
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    width: 25%;
    background: var(--resultsClr);
    border: 2px solid var(--boringClr);
    border-radius: 1rem;
    padding: .5rem 0;

    @media (max-width:820px){
      width: 100%;
      left: 5%;
    }

    &>li{
      cursor: pointer;
      font-family: Lato, sans-serif;

      :not(:last-child){
        border-bottom: 1px solid var(--boringClr);
      }

      :hover{
        transform: scale(1.1);
      }

      ::marker {
        content: '';
      }
    }
  }
`

type Props = {
  changeTheme: (theme: Theme) => void
}

function ThemeSelector({changeTheme}: Props) {
  const [open, setOpen] = useState(false);
  const themeSelectorRef = useOuterClick(closeThemeSelector)

  function openThemeSelector(){
    setOpen(true);
  }

  function closeThemeSelector(){
    setOpen(false)
  }

  return (
    <StyledThemeSelector>
      <Icon icon="arcticons:theme-store" className="btn theme" onClick={openThemeSelector} ref={themeSelectorRef}/>
      {
        open &&
        <ul>
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
    </StyledThemeSelector>
  )
}

export default ThemeSelector