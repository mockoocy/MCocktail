import styled from "styled-components";
import { dropShadowOutline } from "../../utils/mixins";

const StyledInfoCard = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-around;
  padding: 0 1rem;
  @media (max-width: 820px){
    width: 100%;
  }

  .text-block {
    filter: ${dropShadowOutline(.0625, .125, 'var(--bgNestedClr)')};
    background-color: var(--bgVariationClr);
    border-radius: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: stretch;
    gap: 1rem;
    
    @media (max-width:820px){
      width: 100%;
    }
  }
  .big-text {
    font-size: 3rem;
    filter: 
    drop-shadow(.125rem .125rem 0 var(--boringClr));
    font-family: Lato;
    color: var(--fancyClr);
    font-weight: 400;
    text-align: center;
    @media (max-width:820px){
      font-size: 2rem;
    }
  }
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .svg {
    width: 50%;
    height: 50%;
    position: relative;
    filter: 
      saturate(calc(0.35 * var(--navSaturation) + 30%))
      hue-rotate(var(--hueRotateDeg));

  }
  .robot {
    width: 75%;
    height: 75%;
  }
  }

  .small-text {
    font-family: Lato, sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    color:  var(--boringClr);
    width: 20ch;
    @media (max-width:820px){
      width: 16ch;
      font-size: 1.25rem;
    }
  }

`

export default StyledInfoCard;