import React from "react";
import StyledTextBs from "./styles/StyledTextBs";
import {ReactComponent as Barista} from "../../../assets/barista-lime.svg"
import {ReactComponent as Drink} from "../../../assets/drink-lime.svg"
import {ReactComponent as Robot} from "../../../assets/robot-lime.svg"
import InfoCard from "../../../components/InfoCard";


function TextBs() {
  return (
        <StyledTextBs>
    <div className="motto-container">
        <h1>A little drink never killed nobody</h1>
      </div>
      <div className="info-cards">

      <InfoCard
        bigText="Don't know what to drink?"
        smallText="Just tell us what’s in your bar,
        we will handle the rest for you ">
        <Drink className="svg drink"/>
      </InfoCard>      <InfoCard
        bigText="Use our generator"
        smallText="In a matter of seconds you’ll
        find an inspiring drink">
        <Robot className="svg robot"/>
      </InfoCard>      <InfoCard
        bigText="Learn something new"
        smallText="With our instructions, you’ll become
        equipped with abilities to craft 
        something new">
        <Barista className="svg barista"/>
      </InfoCard>
          </div>
    </StyledTextBs>
  )
}


export default TextBs;