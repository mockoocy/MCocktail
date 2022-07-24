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
  font-size: 4rem;
  font-family: "Rubik Moonrocks", Lato, sans-serif;
  filter:
    drop-shadow(.25rem .25rem 0 var(--boringClr))
    drop-shadow(.25rem .25rem .25rem var(--boringClr));
}
.more-text {
    width: 80%;
    margin: 0 10% 2.5% 10%;
    height: auto;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }

  .text-block {
    background-color: var(--bgVariationClr);
    border-radius: 2rem;
    padding: 1rem;
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
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .svg {
    width: 50%;
    height: 50%;
    position: relative;
    filter: saturate(calc(0.35 * var(--navSaturation) + 30%));

  }
  .robot {
    width: 75%;
    height: 75%;
  }
  }

  .small-text {
    font-family: Lato, sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    color:  var(--boringClr);
    width: 20ch;
    }
  @media (max-width: 820px){
    * {
    margin: 0 5%;
    text-align: center;

    }
    .motto-container{ 
      h1 {
      margin: 5%;
      font-size: 2rem;
      }
    }
    .text-block {
      width: 60%;
    }
    .more-text{
      flex-direction: column;
      align-items: center;
    }
    .big-text {
      font-size: 2rem;
    }
    .small-text {
      width: 16ch;
      font-size: 1.25rem;
    }
  }

`


export default StyledTextBs