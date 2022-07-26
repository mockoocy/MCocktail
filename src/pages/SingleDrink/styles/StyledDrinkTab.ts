import styled from "styled-components";
import { textOutline } from "../../../utils/mixins";



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
        ${textOutline(.125, .125, 'var(--captionClr)')}

      }
      .category {
        font-size: 2rem;
        color: var(--fancyClr);
        mix-blend-mode: luminosity;
        ${textOutline(.125, .125, 'var(--captionClr)')}
      }
      .less-important-info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2ch;
        * {
          font-size: 2rem;
        }
        
        .main-ingredient, .iba{
          color: var(--fancyClr);
          mix-blend-mode: luminosity;
          font-size: 2rem;
          ${textOutline(.125, .125, 'var(--captionClr)')}

      }

      }
      .main-ingredient-container{
        display: flex;
        justify-content: center;
        align-items: center;


      img {
          height: 2rem;
        }

      }

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
      ${textOutline(.125, .125, 'var(--captionClr)')}

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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 2.5%;
      .instruction{
        font-size: 1.25rem;
        text-align: center;
      }
    }
  }

  @media (max-width:820px){
    flex-direction: column; 
    margin-top: 12.5vh;

    .img-container {
      width: 100%;
      height: 40%;
    }
    .info-container{
      width: 100%;

      .ingredients-glass {
        flex-direction: column;
      }

      .subtitle {
        font-size: 1.5rem;
      }
      .type {
        font-size: 0.75rem;
      }

      .ingredients-list{
        font-size: 1rem;
      }

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      .glass-alcohol {
        flex-direction: column;
      }
    }
  }

`
export default StyledDrinkTab;