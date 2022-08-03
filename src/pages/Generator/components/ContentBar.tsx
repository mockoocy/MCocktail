import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { DebounceInput } from 'react-debounce-input';
import StyledContentBar from '../styles/StyledContentBar';
import urls from "../../../data/urls.json"
import Loader from '../../../components/Loader';

function ContentBar() {
  const [ingredientsLoading, setIngredientsLoading] = useState(false);

  useEffect(()=>{
    setIngredientsLoading(true);
    try {
      fetch(urls.urlListIngredientsV2)
        .then(res => res.json())
        .then(data => console.log(data))
    } catch(error){
      console.log(error);
    } finally {
      setIngredientsLoading(false)
    }
  },[])

  return (
    <StyledContentBar>
      <div className="info-container">
        <h1 className="info">Ingredient list</h1>
      </div>
      {ingredientsLoading
        ? <Loader text="Loading ingredients"/>
        :
        <div className="ingredients-container">
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <img src="http://www.thecocktaildb.com/images/ingredients/gin-small.png" alt="eerweqrewq" />
          <Icon icon="icon-park-outline:correct" />
        </div>
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <img src="http://www.thecocktaildb.com/images/ingredients/gin-small.png" alt="eerweqrewq" />
          <Icon icon="icon-park-outline:correct" />
        </div>        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <img src="http://www.thecocktaildb.com/images/ingredients/gin-small.png" alt="eerweqrewq" />
          <Icon icon="icon-park-outline:correct" />
        </div>        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <img src="http://www.thecocktaildb.com/images/ingredients/gin-small.png" alt="eerweqrewq" />
          <Icon icon="icon-park-outline:correct" />
        </div>        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <img src="http://www.thecocktaildb.com/images/ingredients/gin-small.png" alt="eerweqrewq" />
          <Icon icon="icon-park-outline:correct" />
        </div>        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <img src="http://www.thecocktaildb.com/images/ingredients/gin-small.png" alt="eerweqrewq" />
          <Icon icon="icon-park-outline:correct" />
        </div>
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
        onChange={()=>console.log('dupa')}
      />
      </div>
    </StyledContentBar>
  )
}

export default ContentBar