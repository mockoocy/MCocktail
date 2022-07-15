import React, {useCallback, useEffect, useState} from "react";
import StyledExplore from "./styles/StyledExplore";
import {useFetch, ApiResponse} from "../../../hooks/useFetch"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


type Option = {
  value: string;
  clicked: boolean;
}



function Explore() {
  const [cocktails, setCocktails] = useState<any[]>([]);
  const [options, setOptions] = useState<Option[]>([
    {
      value: "Alcoholic",
      clicked: false
    },
    {
      value: "Non-Alcoholic",
      clicked: false
    },
    {
      value: "Vodka",
      clicked: false
    },
    {
      value: "Gin",
      clicked: false
    },
    {
      value: "Cider",
      clicked: false
    },
    {
      value: "Whiskey",
      clicked: false
    },
  ]);
  
  useEffect(()=>{
    async function fetchCocktails(){
      const response = await fetch(url)
      const data = await response.json()
      setCocktails(data.drinks.slice(0,8))
      }
    fetchCocktails();
    },[])
  const optionElements = options.map((option, id) =>{
    return <div key={id} className={`option ${option.clicked? 'clicked': ''}`}>{option.value}</div>
  })
  
  const cocktailElements = cocktails.map((cocktail,id) =>{
    return (
      <div className="img-container" key={id}>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <span className="caption">{cocktail.strDrink}</span>
      </div>
    )

  })
  return (
    <StyledExplore >
      <h1 className="title">Explore drinks</h1>
      <div className="options-container">
        {optionElements}
      </div>
      <div className="carousel">
        {cocktailElements}
      </div>
    </StyledExplore>
  )
}

export default Explore