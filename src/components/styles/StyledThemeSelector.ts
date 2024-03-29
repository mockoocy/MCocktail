import styled from "styled-components";


const StyledThemeSelector = styled.div`
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    min-width: 25ch;
    background: var(--resultsClr);
    border: 2px solid var(--boringClr);
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
      transition: all 250ms ease-in-out;

      @media (max-width:820px){
        height: 2rem;
      }

      :not(:last-child){
        border-bottom: 1px solid var(--boringClr);
      }

      :hover{
        transform: scale(1.1);
        filter: brightness(1.2) ;
      }

      ::marker {
        content: '';
      }

      .icon-container{
        border-radius: 100vmax;

        .theme-marker {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`

export default StyledThemeSelector;