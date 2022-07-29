import styled from "styled-components";
import { textOutline } from "../../../utils/mixins";

const StyledFavTab = styled.section`
padding: 0 10%;
display: flex;
flex-direction: column;
align-items: center;
  h1{
    font-size: 5rem;
    color: var(--fancyClr);
    ${textOutline(.125, .25, "var(--boringClr)")}
  }
  .favorites-container {
    background-color: var(--bgVariationClr);
    border-radius: 2rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: auto;
    gap: 1rem;
    padding: 0 1rem;

  }
`

export default StyledFavTab;