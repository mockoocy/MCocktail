import styled from "styled-components";
import {dropShadowOutline } from "../../utils/mixins";

const StyledFavTab = styled.section`
display: flex;
flex-direction: column;
align-items: center;

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