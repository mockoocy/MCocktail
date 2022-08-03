import styled from "styled-components";

const StyledContentBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: var(--bgVariationClr);
border-radius: 2rem;
width: 30vw;
height: 75vh;
z-index: -1;
overflow: hidden;
margin: 2.5% 0;
@media (max-width: 820px){
  width: 80%;
  margin: 0 10% 2.5% 10%;
}

box-shadow: 
  .0625rem .0625rem .25rem var(--boringClr),
  -.0625rem .0625rem .25rem var(--boringClr),
  .0625rem -.0625rem .25rem var(--boringClr),
  -.0625rem -.0625rem .25rem var(--boringClr);

.info-container{
  background-color: var(--bgNestedClr);
  width: 110%;
  top: 0;
  border-bottom: 2px solid var(--boringClr);


  .info {
    text-align: center;
    font-size: 2rem;  
    color: var(--boringClr);
  }
}
.ingredients-container {
  width: 100%;
  padding: 0 3%;
  display: flex;
  flex-direction: column;
  color: var(--boringClr);
  overflow-y: scroll;
  scrollbar-color: var(--fancyClr) var(--captionClr);

    .ingredient {
      min-height: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      
      &:not(:last-child){

        border-bottom: 1px solid var(--boringClr);
      }

      img {
        height: 80%;
      }
      &:hover {
        transform: scale(1.05);
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
  border-top: 2px solid var(--boringClr);


}

#filter, #filter:focus {
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  color: var(--boringClr)
}

` 

export default StyledContentBar;