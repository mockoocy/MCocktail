import styled from "styled-components";
import {dropShadowOutline} from "../../../../utils/mixins"

const StyledIngredientTab = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 3rem;
  background: var(--bgVariationClr);
  height: 100vh;

  @media (max-width:820px){
    margin-top: 12.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #image-container{
    height: 100%;
    position: relative;
    
    img {
      height: 100%;
      width: 100%;
    }
    #star {
      height: 4rem;
      width: 4rem;
      filter: ${dropShadowOutline(.0625, .0625, '#000')};
      color: #ddd; 
      position: absolute;
      margin: 0 10%;
      top: 2.5%;
      right: 0;
      transition: all 450ms linear;

      &:hover {
        transform: scale(1.15);
        color: var(--fancyClr);
      }
      &.active {
        color: var(--fancyClr);
      }
    }
  }
  #info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media (max-width:820px){
      width: 90%;
      overflow-y: scroll;

    }

    
    #name {
      color: var(--fancyClr);
      font-size: 3rem;
      text-align: center;
      font-family: Lato, Inter, sans-serif;
    }
    #side-info {
      display: flex;
      justify-content: space-around;
      color: var(--boringClr);
      font-size: 1.5rem;
      width: 100%;
      text-align: center;
      font-family: Lato, Inter, sans-serif;


    }
    #description-container{
      height: 100%;
      width: 100%;
      overflow-y: scroll;


      #description {
        color: var(--boringClr);
        font-size: 1rem;
        font-family: Inter, sans-serif;
      }
    }
  }

  `

export default StyledIngredientTab;