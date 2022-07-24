import React, { useEffect, useState} from "react";
import Loader from "../../../components/Loader";
import StyledExplore from "./styles/StyledExplore";
import randomSample from "../../../utils/randomSample"
import {Option} from "../../../types";
import { TApiResponse } from "../../../types";
import {useApiGet} from "../../../hooks/useApiGet"
import urls from "../../../data/urls.json";

const COCKTAIL_AMOUNT = 8;
const RANDOM_INGREDIENTS_AMOUNT =8;



const DEFAULT_OPTIONS: Option[] = [
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
    id: 1
  },
  {
    value: "Optional",
    clicked: false,
    url: `${urls.urlAlcoholic}optional_alcohol`,
    id: 2
  }
]


function Explore() {
  const [urlSelected, setUrlSelected] = useState(urls.urlDefault);
  const [cocktailsLoading, setCocktailsLoading] = useState(true);
  const [cocktails, setCocktails] = useState<any[]>([]);
  const [options, setOptions] = useState<Option[]>(DEFAULT_OPTIONS);

  // Can't put it in useEffect, so we call it there. [options, cocktails] is the only
  // deps array that forces re-render, so there is no excess data being fetched, no worries
  const ingredients : TApiResponse = useApiGet(urls.urlListIngredients);

  function handleOptionClick(id: number){
    setOptions(options => {
      return options.map(option => {
        if (option.id === id){
          option.clicked ? setUrlSelected(urls.urlDefault) : setUrlSelected(option.url)
          console.log(option.url)
          return {...option, clicked: !option.clicked};
        }
        return {...option, clicked: false};
      })
    })
  };

  async function shuffleOptions(ingredients: TApiResponse["data"]["drinks"], amount: number){
    console.log(ingredients)
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
        const response = await fetch(urlSelected);
        console.log(urlSelected)
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
    return <div key={option.id}
      id={option.id.toString()}
      className={`option ${option.clicked? 'clicked': ''}`}
      onClick={()=> handleOptionClick(option.id)}
      >{option.value}</div>
  })
  
  const cocktailElements = cocktails.map((cocktail,id) =>{
    return (
      <div className="img-container" key={id}  data-drinkid={cocktail.idDrink}>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <span className="caption">{cocktail.strDrink}</span>
      </div>
    )

  })
  return (
    <StyledExplore >
      <h1 className="title">Some drinks for you</h1>
      <div className="options-container">
        {optionElements}
        {!ingredients.loading && <div className="option" onClick={() => shuffleOptions(ingredients.data.drinks, RANDOM_INGREDIENTS_AMOUNT)}>Shuffle and get Ingredients!🔀 </div>}
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