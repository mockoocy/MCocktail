import styled from "styled-components";

const StyledTextBs = styled.div`
margin: 2.5% 10%;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;


h1 {
  color: var(--fancyClr);
  font-size: 4rem;
  font-family: "Rubik Moonrocks", Lato, sans-serif;
  filter:
    drop-shadow(.25rem .25rem 0 var(--boringClr))
    drop-shadow(.25rem .25rem .25rem var(--boringClr));
  }

  .info-cards {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    width: 100%;
    height: 100%;

    @media (max-width:820px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 820px){
    * {
    text-align: center;
    }
    .motto-container{ 
      h1 {
      margin: 5%;
      font-size: 2rem;
      }
    }
  }

`


export default StyledTextBs