import styled from "styled-components";

const StyledExplore = styled.section`
padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  margin: 0 10%;

  .title {
    font-family: Lato, sans-serif;
    font-size: 4rem;
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
      filter: 
        drop-shadow(.125rem .125rem 0.25rem var(--fancyClr));
      border-radius: 100vmax;
      width: auto;
      height: 2.5rem;
      background-color: var(--boringClr);
      color: var(--bgClr);
    }
  .clicked {
    background: var(--fancyClr);
    border-color: var(--boringClr);
    filter: 
      drop-shadow(.125rem .125rem 0.25rem var(--boringClr));
    
  }
  }
  .carousel {
    min-width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    .img-container {
      position: relative;
    }
    
    img {
      aspect-ratio: 0.5;
      min-width: 9rem;
      min-height: 6rem;
      border-radius: 2rem;
      mix-blend-mode: screen;
      filter: drop-shadow(.25rem .25rem .5rem var(--fancyClr));
    }
    .caption {
      background-color: #0f0f0fa0;
      color: var(--fancyClr);
      height: auto;
      font-size: 1.5rem;
      border-radius: 2rem;
      width: 80%;
      margin: 0 10%;
      text-align: center;
      position: absolute;
      bottom: 0;
    }
  }
  



  @media (max-width: 784px){
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
    grid-auto-rows: minmax(20%, auto);
      img {
        aspect-ratio: 1.5;
        min-width: 35vw;
        height: auto;
      }
  } 
    .title {
      font-size: 2.5rem;
    }
  }
`
export default StyledExplore