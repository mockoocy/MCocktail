import React from 'react';
import styled from 'styled-components';

const StyledContentBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: var(--bgVariationClr);
border-radius: 2rem;
width: 30vw;
height: 50vh;
z-index: -1;
overflow: hidden;

box-shadow: 
  .0625rem .0625rem .25rem var(--boringClr),
  -.0625rem .0625rem .25rem var(--boringClr),
  .0625rem -.0625rem .25rem var(--boringClr),
  -.0625rem -.0625rem .25rem var(--boringClr);

.info-container{
  background-color: var(--bgNestedClr);
  width: 110%;
  top: 0;

  .info {
    text-align: center;
    font-size: 2rem;  
    color: var(--boringClr);
  }
}
.ingredients-container {
  width: 100%;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  color: var(--boringClr);
  overflow-y: scroll;
  .ingredient {
    min-height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.ingredient-filter {
  background: var(--bgNestedClr);
  border-radius: 2rem;
  color: var(--boringClr);
  width: 102%;
  height: 10%;
  padding-left: 4.5%;
}
  
` 

function ContentBar() {
  return (
    <StyledContentBar>
      <div className="info-container">
        <h1 className="info">Ingredient list</h1>
      </div>
      <div className="ingredients-container">
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <h3>img here    </h3>
          <h3>XXX</h3>
        </div>
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <h3>img here    </h3>
          <h3>XXX</h3>
        </div>
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <h3>img here    </h3>
          <h3>XXX</h3>
        </div>
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <h3>img here    </h3>
          <h3>XXX</h3>
        </div>
        <div className="ingredient">
          <h3 className="name">Ingredient</h3>
          <h3>img here    </h3>
          <h3>XXX</h3>
        </div>
      </div>
      <div className="ingredient-filter">
        Filter...
      </div>
    </StyledContentBar>
  )
}

export default ContentBar