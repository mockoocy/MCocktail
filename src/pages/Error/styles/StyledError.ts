import styled from "styled-components";

const StyledError = styled.section`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2.5%;

  h1 {
    color: var(--boringClr);
    mix-blend-mode: difference;
    filter: drop-shadow(.125rem .125rem .0625rem var(--fancyClr));
  }
  .svg {
    width: 60vw;
    height: 60vh;
    filter: hue-rotate(var(--hueRotateDeg));

  }
`

export default StyledError