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

#search {
  width: 100%;  
}

#search, #search-icon {
  color: #f0f2f5;
  font-size: 1.5rem;
  font-family: Lato, sans-serif;
}
#search-icon {
  margin-left: 1rem;
}

#search, #search:focus{
  border: 0;
  outline: 0;
  background-color: transparent;
}

#result-container {
  position: absolute;
  top: 100%;
  width: 100%;
  overflow: hidden;
  display: inline-block;
  border-radius: 2rem;
  filter: ${dropShadowOutline(.0625, .0625, 'var(--boringClr)')}; 

}

ul {
  background-color: var(--bgVariationClr);
  max-height: 50vh;
  overflow-y: auto;
  scrollbar-color: var(--fancyClr) var(--captionClr);

  padding: 2.5%;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  li {
    width: 95%;
    height: 4rem;
    border-radius: 100vmax;
    padding: 0 1rem;
    font-size: 1.5rem;

    &:hover {
      box-shadow: 
        .0625rem .0625rem var(--boringClr),
        .0625rem -.0625rem var(--boringClr),
        -.0625rem .0625rem var(--boringClr),  
        -.0625rem -.0625rem var(--boringClr);
      }
    &>a {
      color: var(--boringClr);
    }

  }
  li:nth-child(2n) {
    transform: 
      perspective(200px)
      rotateX(10deg)
  }
  li:nth-child(2n+1){
    transform: 
      perspective(200px)
      rotateX(-10deg)
  }
  li::marker {
    width: 0;
    height: 0;
    content: '';
  }

  .link {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    img {
      height: 80%;
      border-radius: 100vmax;
    }
  }
}

`

export default StyledSearchBar;