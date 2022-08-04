import React, { useEffect, useState } from 'react';
import InfoCard from '../../components/InfoCard';
import {ReactComponent as Search} from "../../assets/search.svg";
import {ReactComponent as Select} from "../../assets/select.svg";
import {ReactComponent as Factory} from "../../assets/factory.svg";
import StyledGenerator from './styles/StyledGenerator';
import ContentBar from './components/ContentBar';
import urls from "../../data/urls.json";
import Loader from '../../components/Loader';
import ChosenBar from './components/ChosenBar';
import { Icon } from '@iconify/react';


function Generator() {
  const [allIngredients, setAllIngredients] = useState<any[]>([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(false);
  const [chosenIngredients, setChosenIngredients] = useState<any[]>([]);

  function chooseIngredient(ingredient: string){
    const currIngredient = allIngredients.find(ingr => ingr.strIngredient1 === ingredient);
    setChosenIngredients(prevChosenIngredients => [...prevChosenIngredients, currIngredient]);
    setAllIngredients(prevAllIngredients => prevAllIngredients.filter(ingr => ingr !== currIngredient))
  }

  function ejectIngredient(ingredient: string){
    const currIngredient = chosenIngredients.find(ingr=>ingr.strIngredient1 === ingredient);
    setChosenIngredients(prevChosenIngredients => prevChosenIngredients.filter(ingr=> ingr!==currIngredient));
    setAllIngredients(prevAllIngredients => [currIngredient, ...prevAllIngredients])
  }

  useEffect(()=>{
    async function fetchIngredients(){
      setIngredientsLoading(true);
      try {
        const response = await fetch(urls.urlListIngredientsV2)
        const data = await response.json();
        setAllIngredients(data.drinks)
    } catch(error){
      console.log(error);
    } finally {
      setIngredientsLoading(false)
    }
  }
  fetchIngredients();
  },[]);

  const IngredientElements = chosenIngredients.map((ingredient,id) =>(
    <div className="ingredient" key={id}>
      <h3 className="name">{ingredient.strIngredient1}</h3>
      <Icon className="cross" icon="akar-icons:cross" onClick={()=>ejectIngredient(ingredient.strIngredient1)}/>
    </div>
  ))
  
  return (
    <StyledGenerator>
      <div className="info-cards">
        <InfoCard 
        bigText="Search for ingredients that you have"
        smallText="You can search for them using the search bar below"
        >
          <Search className="svg search"/>
        </InfoCard>
        <InfoCard
        bigText='Select Ingredients that you wish to have'
        smallText='We will find out what you can do with these'
        >
          <Select className="svg select"/>
        </InfoCard>
        <InfoCard
        bigText='Select Ingredients that you wish to have'
        smallText='We will find out what you can do with these'
        >
          <Factory className="svg factory"/>
        </InfoCard>
      </div>  
      {ingredientsLoading
        ? <Loader text="loading ingredients" />
        :
        <div className="generator-setup">
          <ContentBar 
            allIngredients={allIngredients}
            chooseIngredient={chooseIngredient}
          />
          <ChosenBar
            chosenIngredients={chosenIngredients}
            ejectIngredient={ejectIngredient}
          />
        </div>
      }
    </StyledGenerator>
  )
}

export default Generator