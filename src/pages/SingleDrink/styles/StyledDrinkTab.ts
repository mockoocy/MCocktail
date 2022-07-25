import styled from "styled-components";

const StyledDrinkTab = styled.section`
  background-color: var(--bgVariationClr);
  color: var(--boringClr);  
  display: flex;
  gap: 2rem;
  width: 80%;
  margin: 2.5% 10%;
  padding: 2.5%;
  border-radius: 2.5rem;
  font-family: Lato, sans-serif;


  .img-container {
      min-width: 35%;
      width: 60%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4rem;
    }
  }

  .info-container {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .main-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    
      
      .drink-name {
        color: var(--fancyClr);
        font-size: 4rem;
        text-shadow: .125rem .125rem .125rem var(--captionClr),
      -.125rem -.125rem .5rem var(--captionClr);
      }
      .category {
        font-size: 2rem;
        color: var(--fancyClr);
        mix-blend-mode: luminosity;
        text-shadow: .125rem .125rem .125rem var(--captionClr),
      -.125rem -.125rem .5rem var(--captionClr);
      }
      .main-ingredient-container{
        display: flex;
        justify-content: center;
        align-items: center;
        .main-ingredient{
          font-size: 1.5rem;
          color: var(--fancyClr);
          mix-blend-mode: luminosity;
          text-shadow: .125rem .125rem .125rem var(--captionClr),
        -.125rem -.125rem .5rem var(--captionClr);
      }
      img {
          height: 2rem;
        }

        * {
          font-size: 1rem;
        }
      }

    }

    .less-important-info {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 2ch;
    }
  }
  .preparation-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .ingredients-glass {
      display: flex;
      justify-content: space-between;
      padding-right: 10%;
      align-items: top;
      
    }


    .subtitle {
      color: var(--fancyClr);
      font-size: 2.25rem;
      text-shadow: .125rem .125rem .125rem var(--captionClr),
      -.125rem -.125rem .5rem var(--captionClr);
    }
    .ingredients-title {
      font-size: 2.5rem;
    }
    .type {
      font-size: 1.25rem;
    }
    .ingredients-list{
      padding: 0;
      font-size: 1.25rem;
      color: var(--boringClr);
      
      >li {
        display: flex;
        justify-content: space-between;

      }

      *::marker {
        content: '';
      }
    }
    .instructions-container {
      padding-top: 2.5%;
      .instruction{
        font-size: 1rem;
      }
    }
  }

`
export default StyledDrinkTab;