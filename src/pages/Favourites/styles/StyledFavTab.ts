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
    width: 80%;
    height: 40vh;
    background-color: var(--bgVariationClr);
    border-radius: 2rem;

  }
`

export default StyledFavTab;