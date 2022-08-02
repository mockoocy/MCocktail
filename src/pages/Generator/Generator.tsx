import React from 'react';
import InfoCard from '../../components/InfoCard';
import {ReactComponent as Search} from "../../assets/search.svg";
import {ReactComponent as Select} from "../../assets/select.svg";
import {ReactComponent as Factory} from "../../assets/factory.svg";
import StyledGenerator from './styles/StyledGenerator';
import ContentBar from './components/ContentBar';
function Generator() {
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
      <ContentBar/>
    </StyledGenerator>
  )
}

export default Generator