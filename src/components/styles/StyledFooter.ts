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

.credits, .credits:visited, .credits:link {
  color: var(--fancyClr);
  display: flex;
  align-items: center;
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