import styled from "styled-components";


const StyledTextBs = styled.div`

margin-top: 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
align-items: center;
h1 {
  color: var(--fancyClr);
  font-size: 5rem;
  font-family: "Dancing Script", Lato, sans-serif;
  filter:
    drop-shadow(.25rem .25rem 0 var(--boringClr))
    drop-shadow(.5rem .5rem .25rem var(--boringClr));
}
.more-text {
    width: 80%;
    margin: 0 10%;
    height: 40vh;
    display: flex;
    justify-content: space-around;
  }

  .text-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
  .big-text {
    font-size: 3rem;
    filter: 
    drop-shadow(.125rem .125rem 0 var(--boringClr));
    font-family: Lato;
    color: var(--fancyClr);
    font-weight: 400;
    text-align: center;
  }
  .small-text {
    font-family: Lato, sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    color:  var(--boringClr);
    width: 24ch;
    }
  @media (max-width: 784px){
    * {
    margin: 0 5%;
    text-align: center;

    }
    h1 {
      margin: 0 10% 20% 10%;
      font-size: 2.5rem;
    }
    .more-text{
      flex-direction: column;
      align-items: center;
      padding-top: 10vh;
    }
    .big-text {
      font-size: 2rem;
    }
    .small-text {
      font-size: 1.25rem;
    }
  }

`


export default StyledTextBs