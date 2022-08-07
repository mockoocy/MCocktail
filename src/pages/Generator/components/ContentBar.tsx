import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { DebounceInput } from 'react-debounce-input';
import StyledContentBar from '../styles/StyledContentBar';
import { Link } from 'react-router-dom';

type Props = {
  allIngredients: any[];
  chooseIngredient: Function;
}

function ContentBar({allIngredients, chooseIngredient}: Props) {

  // TODO: Single Ingredient Page
  // TODO: implement ingredient type
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

  // strIngredient1 is just a name of the ingredient 
  const IngredientElements = displayedIngredients.map((ingredient,id) =>(
    <div className="ingredient" key={id}>
      <Link to={`../ingredient/${ingredient.strIngredient1}`} className='ingredient-link'>
        <h3 className="name">{ingredient.strIngredient1}</h3>
      </Link>
      <Icon className="check" icon="icon-park-outline:correct" onClick={()=>chooseIngredient(ingredient.strIngredient1)}/>
    </div>
  ))
  return (
    <StyledContentBar>
      <div className="info-container">
        <h1 className="info">Ingredient list</h1>
      </div>
        <div className="ingredients-container">
          {IngredientElements}
      </div>
      <div className="ingredient-filter">
      <DebounceInput
        type="text"
        minLength={1}
        placeholder="Filter..."
        id="filter"
        name="filterTerm"
        debounceTimeout={300}
        onChange={(e)=>handleFilterChange(e)}
        value={filterTerm }
      />
      </div>
    </StyledContentBar>
  )
}

export default ContentBar