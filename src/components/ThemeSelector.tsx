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
    min-width: 25ch;
    background: var(--bgClr);
    border: 3px solid var(--boringClr);
    border-radius: 1rem;
    padding: 0 .5rem;

    @media (max-width:820px){
      width: 100%;
      right: 0;
      font-size: 0.875rem;
    }

    &>li{
      cursor: pointer;
      width: 100%;
      height: 3rem;
      font-family: Lato, sans-serif;
      font-size: 1.25rem;
      color: var(--boringClr);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 .25rem;

      @media (max-width:820px){
        height: 2rem;
      }

      :not(:last-child){
        border-bottom: 1px solid var(--boringClr);
      }

      :hover{
        transform: scale(1.1);
      }

      ::marker {
        content: '';
      }
      .theme-marker {
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;

        @media (max-width:820px){
          width: 1.5rem;
          height: 1.5rem;
        }

      }
    }
  }
`

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
      <Icon className="theme-marker"
      icon="line-md:marker"
      color={theme.colors.fancyClr}
      />
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