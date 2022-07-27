import styled from "styled-components";

const StyledThanks = styled.section`
padding-top: 2.5%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

  h1 {
    color: var(--fancyClr);
    font-size: 6rem;
    font-family: Lato, sans-serif;
  }

  .love-container {
    display: flex;    
    .svg {
      filter: hue-rotate(var(--hueRotateDeg));
      width: 40vw;
      height: 60vh;
    }
    ul {
      color: var(--boringClr);
      font-size: 3rem;
      font-family: Inter, sans-serif;

      li {
        font-size: 1.5rem;
      }
    }
    li::marker{
      content: '💚';
      
    }
  }
    
  @media (max-width: 820px){
    padding: 0 10%;

    padding-top: 12.5vh;
    h1 {
      font-size: 3rem;
    }
    .love-container {
      flex-direction: column;
      .svg {
        width: 100%;
        height: 50vh;
      }
      ul {
        font-size: 2rem;
        
        li {
          font-size: 1rem;
        }
      }
    }
  }
`

export default StyledThanks;