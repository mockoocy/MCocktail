import {createGlobalStyle} from "styled-components"
import { Theme } from "../../App";

const GlobalStyles = createGlobalStyle<{theme: Theme}>`
:root {
  --fancyClr: ${({theme})=>theme.colors.fancyClr};
  --boringClr: ${({theme})=>theme.colors.boringClr};
  --bgClr: ${({theme})=>theme.colors.bgClr};
  --selectionClr: ${({theme})=>theme.colors.selectionClr};

  *::selection {
  background-color: var(--selectionClr);
}
}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    background: var(--bgClr)
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`

export default GlobalStyles;