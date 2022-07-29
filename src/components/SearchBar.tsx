import React, { useState } from 'react';
import StyledSearchBar from './styles/StyledSearchBar';
import {Icon} from '@iconify/react'

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log(searchTerm);
  
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>){
    setSearchTerm(e.target.value)
  }

  return (
    <StyledSearchBar>
      <Icon icon="fe:search" id="search-icon"/>
      <input 
        type="text" 
        placeholder="Search!" 
        id="search-value"
        name="searchTerm"
        onChange={e => handleSearchChange(e)}
        value={searchTerm}
        />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
    </StyledSearchBar>
  )
}

export default SearchBar;