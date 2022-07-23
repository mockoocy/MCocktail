import styled from "styled-components";

const StyledExplore = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  margin: 5% 10% 0  10%;
  background-color: var(--bgVariationClr);
  border-radius: 2rem;


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
    text-shadow: .125rem .125rem .125rem var(--boringClr),
    -.125rem -.125rem .5rem var(--boringClr);
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
      font-family: Lato, sans-serif;
      border: 1px solid var(--fancyClr);

      border-radius: 100vmax;
      width: auto;
      height: 2.5rem;
      background-color: var(--boringClr);
      color: var(--bgClr);

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        filter: 
        drop-shadow(.125rem .125rem 0.25rem var(--fancyClr));
      }
    }
  .clicked {
    background: var(--fancyClr);
    color: var(--boringClr);
    border-color: var(--boringClr);
    filter: 
      drop-shadow(.125rem .125rem 0.25rem var(--boringClr));
    
  }
  .carousel-container {
    padding: 0 10vw;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
  .carousel {
    display: grid;
    width: 100%;
    grid-auto-flow: column;
    grid-auto-columns: 25vw;
    gap: 1rem;
    overflow-x: auto;
    background-color: var(--bgNestedClr);
    border-radius: 2rem;
    padding: 0 1rem;
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
      background-color: var(--captionClr); //TODO CAPTION CLR
      color: var(--fancyClr);
      height: auto;
      font-size: 1.5rem;
      border-radius: 2rem;
      width: 80%;
      margin: 0 10%;
      text-align: center;
      position: absolute;
      bottom: 15%;
    }
  }
  



  @media (max-width: 820px){
    .options-container {
    display: grid;
    grid-template-columns: repeat(4, .20fr);
    gap: 0.5rem;
    grid-auto-rows: minmax(20%, auto);
      .option {
        justify-content: center;
        align-content   : center;
        width: auto;
        height: 2rem;
        font-size: 0.75rem;
      }
    }
    .carousel {
      margin: 0;
      grid-auto-columns: 33.33  vw;


    }
    .title {
      font-size: 2.5rem;
    }
  }
`
export default StyledExplore