import styled from "styled-components";
import { dropShadowOutline } from "../../utils/mixins";
const StyledSearchBar = styled.div`

position: relative;
display: flex;
align-items: center;

gap: 0.5rem;
height: 60%;
width: 40%;


${dropShadowOutline(.125, .125, 'var(--bgVariationClr)')};
transition: all 250ms ease-in-out;
cursor: pointer;

&::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: #0f0f0f;
  border-radius: 100vmax;
  mix-blend-mode: luminosity;
  isolation: isolate;
  z-index: -1
}
&:hover {
  transform: scale(1.05);
}


#search-value, #search-icon {
  color: #f0f2f5;
  font-size: 1.5rem;
  font-family: Lato, sans-serif;
}
#search-icon {
  margin-left: 1rem;
}

#search-value, #search-value:focus{
  border: 0;
  outline: 0;
  background-color: transparent;
}
ul {
  position: absolute;
  padding: 0;
  color: #fff;
  width: 100%;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    width: 95%;
    background-color: #f0f024;
    border-bottom: 1px solid black;

  }
  li:nth-child(2n) {
    transform: 
      perspective(5rem)
      rotateX(3deg)
  }
  li:nth-child(2n+1){
    transform: 
      perspective(5rem)
      rotateX(-3deg)
  }
  li::marker {
    width: 0;
    height: 0;
    content: '';
  }
}

`

export default StyledSearchBar;