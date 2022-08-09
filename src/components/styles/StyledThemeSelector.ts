import styled from "styled-components";
import { textOutline } from "../../utils/mixins";


const StyledThemeSelector = styled.div`
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    min-width: 25ch;
    background: var(--resultsClr);
    border: 3px solid var(--boringClr);
    border-radius: 1rem;
    padding: 0 .5rem;

    @media (max-width:820px){
      width: 100%;
      right: 0;
      font-size: 0.875rem;
    }

    &>li{
      cursor: pointer;
      width: 100%;
      height: 3rem;
      font-family: Lato, sans-serif;
      font-size: 1.25rem;
      color: var(--boringClr);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 .25rem;
      ${textOutline(.0625, 0.125, "var(--optionClr)")};

      @media (max-width:820px){
        height: 2rem;
      }

      :not(:last-child){
        border-bottom: 1px solid var(--boringClr);
      }

      :hover{
        transform: scale(1.1);
      }

      ::marker {
        content: '';
      }
      .theme-marker {
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;

        @media (max-width:820px){
          width: 1.5rem;
          height: 1.5rem;
        }

      }
    }
  }
`

export default StyledThemeSelector;