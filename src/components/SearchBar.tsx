import React, { useEffect, useState } from 'react';
import StyledSearchBar from './styles/StyledSearchBar';
import {Icon} from '@iconify/react';
import { DebounceInput } from 'react-debounce-input';
import urls from "../data/urls.json"
import { Link } from 'react-router-dom';
import useOuterClick from '../hooks/useOuterClick';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [foundDrinks, setFoundDrinks] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);  
  const resultsRef = useOuterClick(() => setShowResults(false))


  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>){
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
  }

  function getMatchingDrinks(){
    fetch(`${urls.urlName}${searchTerm}`)
      .then(res => res.json())
      .then(data=>{
        (searchTerm && data.drinks) ? setFoundDrinks(data.drinks) : setFoundDrinks([0]);
        setShowResults(true)
      })
  }
  useEffect(()=>{
    getMatchingDrinks();

  },[searchTerm])

  const searchResultElements = foundDrinks.splice(0,10).map((drink,id) => (
    <li key={id}>
      <Link to={`/drink/${drink.idDrink}`} className="link" >
        <img src={drink.strDrinkThumb} alt="" />
        <span>{drink.strDrink}</span>
        <span>{drink.strAlcoholic}</span>
      </Link>
    </li>
  
  ))
  return (
    <StyledSearchBar onClick={()=> setShowResults(true)} ref={resultsRef}>
      <Icon icon="fe:search" id="search-icon"/>
      <DebounceInput 
        type="text" 
        minLength={0}
        placeholder="Search!" 
        id="search"
        name="searchTerm"
        debounceTimeout={500}
        onChange={e => handleSearchChange(e)}
        value={searchTerm}
        />
          {showResults  &&
        <div id="result-container" >
          <ul>
            {foundDrinks.length > 0 
            ? searchResultElements
            : <h1>IT'S EMPTY!</h1>
          }
          </ul>
        </div>
          }
    </StyledSearchBar>
  )
}

export default SearchBar;