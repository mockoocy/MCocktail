import styled from "styled-components";

const StyledFooter = styled.footer`
color: var(--fancyClr);
display: flex;
justify-content: space-around;
align-items: center;
background-color: var(--captionClr);
width: 100%;
position: relative;
bottom: 0;
font-family: Lato, Inter, sans-serif;

h4 {
  font-size: 1.5rem;
  @media (max-width: 820px){
    font-size: .75rem
  }
}
.credits, .credits:visited, .credits:link {
  color: var(--fancyClr);
  display: flex;
  align-items: center;
  font-size: 2rem;

  @media (max-width: 820px){
    font-size: 1rem;
  }
  
  
  .svg {
    color: var(--fancyClr);
    width: 2rem;
    height:2rem;
  }
}
@media (max-width:820px) {
  font-size: 0.75rem;
}
`

export default StyledFooter