import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { DebounceInput } from 'react-debounce-input';
import StyledContentBar from '../styles/StyledContentBar';
import urls from "../../../data/urls.json"
import Loader from '../../../components/Loader';

function ContentBar() {

  // TODO: Single Ingredient Page
  const [ingredientsLoading, setIngredientsLoading] = useState(false);
  const [allIngredients, setAllIngredients] = useState<any[]>([]);
  const [displayedIngredients, setDisplayedIngredients] = useState<any[]>([]);
  const [filterTerm, setFilterTerm] = useState('');

  function filterIngredients(term: string, ingredients: any[]) {
    return ingredients.filter(ingredient => {
      const regex = new RegExp(term, 'gi');
      return ingredient.strIngredient1.match(regex);
    })
  }

  function handleFilterChange( e: React.ChangeEvent<HTMLInputElement>){
    setFilterTerm(e.target.value);
  }

  useEffect(()=>{
    const newIngredientsArray = filterIngredients(filterTerm, allIngredients);
    setDisplayedIngredients(newIngredientsArray);
  },[filterTerm, allIngredients]);

  useEffect(()=>{
    setIngredientsLoading(true);
    try {
      fetch(urls.urlListIngredientsV2)
        .then(res => res.json())
        .then(data => {
          setAllIngredients(data.drinks);
          setDisplayedIngredients(data.drinks);
        })
      } catch(error){
        console.log(error);
      } finally {
        setIngredientsLoading(false)
      }
    },[]);
  const IngredientElements = displayedIngredients.map((ingredient,id) =>(
    <div className="ingredient" key={id}>
      <h3 className="name">{ingredient.strIngredient1}</h3>
      <Icon className="check" icon="icon-park-outline:correct" />
    </div>
  ))
  return (
    <StyledContentBar>
      <div className="info-container">
        <h1 className="info">Ingredient list</h1>
      </div>
      {ingredientsLoading
        ? <Loader text="Loading ingredients"/>
        :
        <div className="ingredients-container">
          {IngredientElements}
      </div>
      }
      <div className="ingredient-filter">
      <DebounceInput
        type="text"
        minLength={1}
        placeholder="Filter..."
        id="filter"
        name="filterTerm"
        debounceTimeout={500}
        onChange={(e)=>handleFilterChange(e)}
        value={filterTerm }
      />
      </div>
    </StyledContentBar>
  )
}

export default ContentBar