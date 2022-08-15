import React, { useEffect, useState} from "react";
import Loader from "../../../components/Loader";
import StyledExplore from "./styles/StyledExplore";
import Cocktail from "../../../components/Cocktail";
import randomSample from "../../../utils/randomSample"
import {Option} from "../../../types";
import urls from "../../../data/urls.json";
import {  useQuery } from "@tanstack/react-query";

const COCKTAIL_AMOUNT = 10;
const RANDOM_INGREDIENTS_AMOUNT =8;

const DEFAULT_OPTIONS: Option[] = [
  {
    value: "Random",
    clicked: false,
    url: urls.urlDefault,
    id: 1
  },
  {
    value: "Popular",
    clicked: false,
    url: `${urls.urlAlcoholic}optional_alcohol`,
    id: 2
  },
  {
    value: "Alcoholic",
    clicked: false,
    url: `${urls.urlAlcoholic}Alcoholic`,
    id: 0
  },
  {
    value: "Non-Alcoholic",
    clicked: false,
    url: `${urls.urlAlcoholic}Non_Alcoholic`,
    id: 3
  },
]


function Explore() {
  const [urlSelected, setUrlSelected] = useState(urls.urlDefault);
  const [cocktailsLoading, setCocktailsLoading] = useState(true);
  const [cocktails, setCocktails] = useState<any[]>([]);
  const [options, setOptions] = useState<Option[]>(DEFAULT_OPTIONS);
  // Can't put it in useEffect, so we call it there. [options, cocktails] is the only
  // deps array that forces re-render, so there is no excess data being fetched, no worries

  const ingredientsQuery = useQuery(['ingredients'],fetchIngredients);
  const isIngredientsLoading = ingredientsQuery.isLoading;
  const ingredients = ingredientsQuery.data?.drinks;

  async function fetchIngredients(){
    const response = await fetch(urls.urlListIngredients);
    const data = await response.json();
    shuffleOptions(data?.drinks, RANDOM_INGREDIENTS_AMOUNT)
    return data
  }

  // const drinksQuery = useQuery(['drinks', urlSelected], fetchDrinks);
  // const areDrinksLoading = drinksQuery.isLoading;

  // async function fetchDrinks(){
  //   const response = await fetch(urlSelected);
  //   const data = await response.json();
  //   const drinksSample = await randomSample(data.drinks, COCKTAIL_AMOUNT);
  //   setCocktails(drinksSample);
  //   return data;
  // }
  // Will leave it for now, because traditional useEffect is more performant

  function handleOptionClick(id: number){
    setOptions(options => {
      return options.map(option => {
        if (option.id === id){
          option.clicked ? setUrlSelected(urls.urlDefault) : setUrlSelected(option.url)
          return {...option, clicked: !option.clicked};
        }
        return {...option, clicked: false};
      })
    })
  };

  async function shuffleOptions(ingredients: any[], amount: number){
    const ingredientOptions = await randomSample(ingredients, amount);
    const newOptions: Option[] = ingredientOptions.map((ingredient, id) => {
      return {
        value: ingredient.strIngredient1,
        clicked: false,
        url: `${urls.urlIngredient}${ingredient.strIngredient1}`,
        id: DEFAULT_OPTIONS.length + id

      }
    })
    setOptions([...DEFAULT_OPTIONS, ...newOptions])
  }


  useEffect(()=>{
    async function fetchCocktails(){
      setCocktailsLoading(true)
      try {
        const response = await fetch(urls.urlDefault);
        const data = await response.json();
        const drinksSample = await randomSample(data.drinks, COCKTAIL_AMOUNT);
        setCocktails(drinksSample);
      } catch (error) {
        console.log(error);
      } finally {
        setCocktailsLoading(false);
      }
    }
    fetchCocktails();
    },[options, urlSelected])


  const optionElements = options.map(option =>{
    return <div key={`option${option.id}`}
      id={option.id.toString()}
      className={`option ${option.clicked? 'clicked': ''}`}
      onClick={()=> handleOptionClick(option.id)}
      >{option.value}</div>
  })
  
  const cocktailElements = cocktails.map((cocktail,id) =>{
    return (
      <Cocktail 
        key={`cocktailPreview-${id}`}
        strDrinkThumb={cocktail.strDrinkThumb}
        strDrink={cocktail.strDrink}
        idDrink={cocktail.idDrink}
      />
    )

  })
  return (
    <StyledExplore >
      <h1 className="title">Some drinks for you</h1>
      <div className="options-container">
        {!isIngredientsLoading && <div className="option" onClick={() => shuffleOptions(ingredients, RANDOM_INGREDIENTS_AMOUNT)}>Shuffle ingredients</div>}
        {optionElements}
      </div>
      {
        cocktailsLoading
          ? <div className="loading-container">
            <Loader text="Loading..."/>
          </div>
          : <div className="carousel-container">
            <div className="carousel">
              {cocktailElements}
            </div>
          </div>
      }
    </StyledExplore>
  )
}

export default Explore