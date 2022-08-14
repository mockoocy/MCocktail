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

  function handleSearchClick(){
    setShowResults(true);
    
  }

  function getMatchingDrinks(){
    fetch(`${urls.urlName}${searchTerm}`)
      .then(res => res.json())
      .then(data=>{
        if (searchTerm && data.drinks){
          setFoundDrinks(data.drinks);
        } else {
          setFoundDrinks([])
        }

      })
  }
  useEffect(()=>{
    if (searchTerm) getMatchingDrinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchTerm])
  const searchResultElements = foundDrinks.slice(0,10).map((drink,id) => (
    <li key={id} onClick={() => window.location.reload()}>
      {/* Done in order to refresh which drink is being displayed in 
      single drink page, because the change of urlParams doesnt't force a fetch request
      with new url while using useApiGet hook.   */}
      <Link to={`/drink/${drink.idDrink}`} className="link" >
        <img src={drink.strDrinkThumb} alt="" />
        <span>{drink.strDrink}</span>
        <span>{drink.strAlcoholic}</span>
      </Link>
    </li>
  
  ))
      console.log(foundDrinks)
  return (
    <StyledSearchBar onClick={handleSearchClick} ref={resultsRef} className={`${showResults? "open" : ''}`}>
      <Icon icon="fe:search" id="search-icon"/>
      <DebounceInput 
        type="text" 
        minLength={1}
        placeholder="Search!" 
        id="search"
        name="searchTerm"
        debounceTimeout={200}
        onChange={e => handleSearchChange(e)}
        value={searchTerm}
        />
          {showResults && <div id="result-container" >
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