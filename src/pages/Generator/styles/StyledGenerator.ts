import styled from "styled-components";
import { textOutline } from "../../../utils/mixins";

const StyledGenerator = styled.section`
  padding: 0 10%;
  .info-cards {
    padding: 2.5% 10%;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    gap: 2rem;

    @media (max-width:820px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .generator-setup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
    
    @media (max-width:820px){
      flex-direction: column;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2.5% 0;
    width: 30vw;
    height: 80vh;  
    
    @media (max-width: 820px){
      width: 80vw;
      height: 60vh;
    }
    h1 {
      font-size: 3rem;
      color: var(--boringClr);
      text-align: center;
      font-family: Lato, Inter,  sans-serif;

      @media (max-width:820px){
        font-size: 1.5rem;
      }
    }
    .svg-container{
      display: flex;
      align-items: center;
      justify-content: center;
      .svg {
        height: 100%;
        width: 100%;
        filter: hue-rotate(var(--hueRotateDeg));
      }
    }
    .generate-btn{
      background-image: var(--gradientButtonClrs);
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      width: 18ch;
      height: 4rem;
      text-align: center;
      text-transform: uppercase;
      transition: 0.75s ease-in-out;
      background-size: 200% auto;
      color: var(--boringClr);            
      box-shadow: 
        0 .25rem var(--boringClr);
      border-radius: 1rem;
      cursor: pointer;
  
      &:hover {
            background-position: right center; /* change the direction of the change here */
            color: var(--boringClr);
            text-decoration: none;
            transform: translateY(.5rem);
            box-shadow: none;
          }
    }
  }

  #generated-drinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5%;
    
    h1 {
      font-size: 3rem; 
      color: var(--fancyClr);
      ${textOutline(.125, .125, 'var(--boringClr)')};
    }
  }

`

export default StyledGenerator;