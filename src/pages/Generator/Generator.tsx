import React, { useEffect, useState } from 'react';
import InfoCard from '../../components/InfoCard';
import {ReactComponent as Search} from "../../assets/search.svg";
import {ReactComponent as Select} from "../../assets/select.svg";
import {ReactComponent as Factory} from "../../assets/factory.svg";
import {ReactComponent as Omega} from "../../assets/omega.svg"
import StyledGenerator from './styles/StyledGenerator';
import ContentBar from './components/ContentBar';
import urls from "../../data/urls.json";
import Loader from '../../components/Loader';
import ChosenBar from './components/ChosenBar';


function Generator() {
  const [allIngredients, setAllIngredients] = useState<any[]>([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(false);
  const [chosenIngredients, setChosenIngredients] = useState<any[]>([]);
  const [generatedDrinks, setGeneratedDrinks] = useState<any[]>([]);


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

  async function fetchMachingDrinks(){
    const ingredients = chosenIngredients.map(ingr=>ingr.strIngredient1)
    const params = ingredients.join();    
    const fetchUrl = `${urls.urlmultiIngredient}${params}`
    console.log(fetchUrl);
    
    const response = await fetch(fetchUrl);
    const data = await response.json();
    setGeneratedDrinks(data.drinks);
    console.log(data.drinks);
    
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

  
  return (
    <StyledGenerator>
      <div className="info-cards">
        <InfoCard 
        bigText="Search for ingredients that you want"
        smallText="You can search for them using the search bar below"
        >
          <Search className="svg search"/>
        </InfoCard>
        <InfoCard
        bigText='Select ingredients that you want to see in your drink'
        smallText='We will find out what you can do with these'
        >
          <Select className="svg select"/>
        </InfoCard>
        <InfoCard
        bigText='Enjoy a drink that we will recommend you!'
        smallText='Have fun mixing and making it!'
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
          <div className="btn-container">
            <h1>We're finally here!   </h1>
            <div className="svg-container">
              <Omega className="svg omega" />
            </div>
            <button className="generate-btn" onClick={()=> fetchMachingDrinks()
            }>LET'S GO!</button>
          </div>  
        </div>
      }

    </StyledGenerator>
  )
}

export default Generator;