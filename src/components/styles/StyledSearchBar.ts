import styled from "styled-components";
import { dropShadowOutline } from "../../utils/mixins";
const StyledSearchBar = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
height: 4rem;
width: 15%;
transition: all 250ms ease-in-out;
cursor: pointer;
margin: 0 .5rem;

@media (max-width:820px){
  gap: 0.25rem;
}

&.open {
  width: 40%;

  @media (max-width:820px){
    width: 100%;
  }
}

@media (max-width: 820px){
  width: 25%;
  height: 2rem;
  font-size: 0.625rem;
}

&::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: #0f0f0f;
  border-radius: 100vmax;
  mix-blend-mode: luminosity;
  isolation: isolate;
  z-index: -1;
  filter: ${dropShadowOutline(.0625, .0625, 'var(--bgVariationClr)')};

}
&:hover {
  transform: scale(1.05);
}

#search {
  width: 100%;  
}

#search, #search-icon {
  color: var(--fancyClr);
  font-size: 1.5rem;
  font-family: Lato, sans-serif;
  @media (max-width: 820px) {
    font-size: 1rem;
  }
}
#search-icon {
  margin-left: 1rem;
  @media (max-width:820px){
    margin-left: 0.5rem;
  }
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
  overflow-x: hidden;
  display: inline-block;
  border-radius: 2rem;
  filter: ${dropShadowOutline(.0625, .0625, 'var(--boringClr)')}; 
  @media (max-width: 820px){
    width: 60vw;
  }

}

ul {
  background: var(--resultsClr);
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: var(--fancyClr) var(--captionClr);
  padding: 2.5%;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 820px){
    width: auto;
  }


  h1 {
    color: var(--boringClr);
    text-align: center;
    width: 100%;
  }
  li {
    width: 95%;
    height: 4rem;
    border-radius: 100vmax;
    padding: 0 1rem;
    font-size: 1.5rem;
    font-style: italic;
    font-family: Lato, Inter, sans-serif;
    @media (max-width:820px){
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 0.25rem;
    }

    &:hover {
      box-shadow: 
        .0625rem .0625rem var(--boringClr),
        .0625rem -.0625rem var(--boringClr),
        -.0625rem .0625rem var(--boringClr),  
        -.0625rem -.0625rem var(--boringClr);
      }
    &>a {
      color: var(--boringClr);
      font-family: Lato, sans-serif;
      font-weight: 400;
      text-decoration: none;

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