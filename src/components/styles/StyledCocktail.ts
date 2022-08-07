import styled from "styled-components";

const StyledCocktail = styled.div`
  position: relative;
  padding: 5% 0;
  scroll-snap-align: start;
  scroll-padding-inline: 1rem;
  
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
    border-radius: 2rem;
    width: 80%;
    margin: 0 10%;
    text-align: center;
    position: absolute;
    bottom: 15%;

    @media (max-width: 820px) {
      font-size: 1rem;
      width: 90%;
      margin: 0 5%;
    }
  }
  
`
export default StyledCocktail;