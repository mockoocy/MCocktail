import styled from "styled-components";

const StyledChosenBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: var(--bgVariationClr);
border-radius: 2rem;
width: 30vw;
height: 80vh;
margin: 2.5% 0;
overflow: hidden;
box-shadow: 
  .0625rem .0625rem .25rem var(--optionClr),
  -.0625rem .0625rem .25rem var(--optionClr),
  .0625rem -.0625rem .25rem var(--optionClr),
  -.0625rem -.0625rem .25rem var(--optionClr);
  
@media (max-width: 820px){
  width: 80%;
  margin: 0 10% 2.5% 10%;
  height: 40vh;
}

  .info-container{
    background-color: var(--bgNestedClr);
    width: 110%;
    top: 0;
    height: 3rem;
    border-bottom: 2px solid var(--optionClr);
    @media (max-width:820px){
          height: 2rem;
        }
    .info {
      text-align: center;
      font-size: 2rem;  
      font-family: Inter, Lato, sans-serif;
      color: var(--boringClr);
      @media (max-width:820px){
          font-size: 1.5rem;
        }
    }
  }
  .ingredients-container {
  width: 100%;
  height: calc(100% - 3rem);
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  color: var(--boringClr);
  overflow-y: scroll;
  scrollbar-color: var(--fancyClr) var(--captionClr);

    .ingredient {
      min-height: 3.5rem;
      font-family: Inter, Lato, sans-serif;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      @media (max-width:820px){
          min-height: 2rem;
          font-size: 1rem;
        }
      
      &:not(:last-child){

        border-bottom: 1px solid var(--optionClr);
      }
      .cross {
        height: 2.5rem;
        width: 2.5rem;
        cursor: pointer;

        @media (max-width:820px){
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      &:hover {
        transform: scale(1.05);
    }
  }
}
.info-empty{
  align-self: center;
}

`

export default StyledChosenBar;