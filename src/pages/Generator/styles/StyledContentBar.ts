import styled from "styled-components";

const StyledContentBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: var(--bgVariationClr);
border-radius: 2rem;
width: 30vw;
height: 80vh;
overflow: hidden;
margin: 2.5% 0;
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
  height: 3rem;
  background-color: var(--bgNestedClr);
  width: 110%;
  top: 0;
  border-bottom: 2px solid var(--optionClr);
  @media (max-width:820px){
    height: 2rem;
  }

  .info {
    text-align: center;
    font-size: 2rem;  
    color: var(--boringClr);
    @media (max-width:820px){
      font-size: 1.5rem;
    }
  }
}
.ingredients-container {
  width: 100%;
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--boringClr);
  overflow-y: scroll;
  scrollbar-color: var(--fancyClr) var(--captionClr);

    .ingredient {
      min-height: 3.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      @media (max-width:820px){
        font-size: 1rem;
        min-height: 2rem;
      }

      &:not(:last-child){
        border-bottom: 1px solid var(--optionClr);
      }

      .check {
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
    a:link, a:visited {
      color: var(--boringClr);
      text-decoration: none;
    }
  }
}
.ingredient-filter {
  background: var(--bgNestedClr);
  border-radius: 2rem;
  color: var(--boringClr);
  width: 110%;
  height: 10%;
  padding-left: 7%;
  font-size: 1.5rem;
  border-top: 2px solid var(--optionClr);


}

#filter, #filter:focus {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0 .5rem;
  margin: 0;
  background: transparent;
  color: var(--boringClr)
}

` 

export default StyledContentBar;