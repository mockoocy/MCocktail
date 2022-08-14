import styled from "styled-components";
import { textOutline, dropShadowOutline } from "../../../../utils/mixins";

const StyledExplore = styled.section`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin: 2.5% 10%;
  background-color: var(--bgVariationClr);
  border-radius: 2rem;
  overflow-x: hidden;
  filter: ${dropShadowOutline(.0625, .0625, 'var(--bgNestedClr)')};

  @media (max-width:820px){
    overflow-x: auto;
  }

  .loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &>* {
      width: 50%;
      height: 50%;
      background-color: transparent;
      
    }
  }

  .title {
    font-family: Lato, sans-serif;
    font-size: 3.25rem;
    letter-spacing: 0.25rem;
    color: var(--fancyClr);
    ${textOutline(.0625, .0625, 'var(--boringClr)')}
  }
  .options-container {
    display: flex;
    flex-flow: row wrap;
    gap: 0.75rem;
  
    .option {
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      font-weight: 500;
      font-family: Inter, sans-serif;
      border: 1px solid var(--fancyClr);
      border-radius: 100vmax;
      width: auto;
      max-width: 28vw;
      height: auto;
      min-height: 2.5rem;
      background-color: var(--boringClr);
      color: var(--optionClr, --bgClr, --boringClr);

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        filter: 
        drop-shadow(.0625rem .0625rem 0.125rem var(--fancyClr));
      }
    }
  .clicked {
    background: var(--fancyClr);
    color: var(--boringClr);
    border-color: var(--boringClr);
    filter: 
      drop-shadow(.125rem .125rem 0.25rem var(--boringClr));
    
  }
}
.carousel-container {
  width: 100%;
  padding-bottom: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: ${dropShadowOutline(.0625, .0625, 'var(--bgNestedClr)')};
  }
  .carousel {
    padding: 0 1rem;
    display: grid;
    width: 100%;
    grid-auto-flow: column;
    grid-auto-columns: 25vw;
    gap: 1rem;
    overflow-x: auto;
    background-color: var(--bgNestedClr);
    border-radius: 2rem;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    scrollbar-color: var(--fancyClr) var(--captionClr);

    .img-container {
      position: relative;
      padding: 5% 0;
      scroll-snap-align: start;
      scroll-padding-inline: 1rem;
    }
    
    img {
      aspect-ratio: 1.5;
      flex: 0 1 auto;
      width: 100%;
      height: 100%;
      border-radius: 2rem;

    }
    img:hover {
        cursor: pointer;

        transform: scale(1.05);
        }
    .caption {
      background-color: var(--captionClr); 
      color: var(--fancyClr);
      height: auto;
      font-size: 1.5rem;
      font-family: Inter, sans-serif;
      border-radius: 2rem;
      width: 80%;
      margin: 0 10%;
      text-align: center;
      position: absolute;
      bottom: 15%;
    }
  }
  



  @media (max-width: 820px){
    margin-top: 10vh;
    .options-container {
      display: grid;
      grid-template-columns: repeat(3, .20fr);
      justify-content: space-around;
      grid-auto-rows: minmax(20%, auto);

      .option {
        text-align: center;
        justify-content: center;
        align-content: center;
        font-size: 0.75rem;

      }
    }
    .carousel {
      margin: 0;
      grid-auto-columns: 51vw;


    }
    .title {
      font-size: 2.5rem;
    }
  }
`
export default StyledExplore