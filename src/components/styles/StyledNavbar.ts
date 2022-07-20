import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: sticky;
  width: 100%;
  height: 12.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("../../smokebook.png");
  background-size: 150vmax;
  background-repeat: no-repeat;
  filter: saturate(140%);
  border-bottom: 0.25rem solid var(--boringClr);

  * {
    max-height: 15%;
  }

  button {
    background: transparent;
    border: 0;
  }

  .logo-container {
    margin-left: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
  }

  .logo {
    width: 2rem;
    height: 2rem;
  }
  .logo-text{
    width: 8rem;
    height: auto;
  }

  .button-container{
    margin-right: 2.5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
  }
  .btn {
    color: var(--fancyClr);
    font-size: 2rem;
    font-family: "Roboto Slab", sans-serif;
    text-shadow: 
      .125rem .125rem 0.125rem var(--boringClr),
      -.125rem .125rem 0.125rem var(--boringClr),
      .125rem -.125rem 0.125rem var(--boringClr),
      -.125rem -.125rem 0.125rem var(--boringClr);

  }
  .theme {
    width: 2rem;
    height: 2rem;
    stroke-width: 0.25rem;
    filter: 
      drop-shadow(.25rem .25rem var(--captionClr))
  }
  @media (max-width: 820px) {

    .btn {
      font-size: 1rem;
    }
  }

`
export default StyledNavbar