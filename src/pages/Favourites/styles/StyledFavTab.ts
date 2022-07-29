import styled from "styled-components";
import { dropShadowOutline, textOutline } from "../../../utils/mixins";

const StyledFavTab = styled.section`
padding: 0 10%;
display: flex;
flex-direction: column;
align-items: center;

  @media (max-width: 820px) {
    padding: 12.5vh 2.5% 0 2.5%;
  }
  h1{
    font-size: 5rem;
    color: var(--fancyClr);
    ${textOutline(.125, .25, "var(--boringClr)")};
    text-align: center;

    @media (max-width: 820px){
      font-size: 2.5rem;
      ${textOutline(.0625, .125, "var(--boringClr)")};
    }
  }
  .favorites-container {
    background-color: var(--bgNestedClr);
    filter: ${dropShadowOutline(.125, .125, 'var(--bgVariationClr)')};
    border-radius: 2rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: auto;
    gap: 1rem;
    padding: 0 1rem;

    @media (max-width:820px){
      grid-template-columns: repeat(2,1fr);
      padding: 0 0.5rem;
    }

  }
`

export default StyledFavTab;