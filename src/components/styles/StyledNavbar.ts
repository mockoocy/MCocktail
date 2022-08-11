import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100; 
  width: 100%;
  height: 12.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.25rem solid var(--boringClr);

  .background-image-container {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: saturate(var(--navSaturation));

    img {
      position: relative;
      height: 100%;
      width: 100%;
    }

  }
  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }

  .logo-container {
    margin-left: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width:820px){
      width: 25%;
    }
  }

  .logo {
    filter: saturate(var(--navSaturation)) hue-rotate(var(--hueRotateDeg));

    &:hover{
      transform: scale(1.02);
    }
  }

  .button-container{
    margin-right: 2.5%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    position: relative;

    @media (max-width:820px){
      gap: .25rem;
    }
  }
  .btn {
    color: var(--fancyClr);
    width: 4rem;
    height: 4rem;
    font-family: "Roboto Slab", sans-serif;
    text-shadow: 
      .125rem .125rem 0.125rem var(--boringClr),
      -.125rem .125rem 0.125rem var(--boringClr),
      .125rem -.125rem 0.125rem var(--boringClr),
      -.125rem -.125rem 0.125rem var(--boringClr);
      filter: 
    drop-shadow(.25rem .25rem var(--captionClr));

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }

  }

  .theme {
  stroke-width: 0.25rem;

}

  @media (max-width: 820px) {
    position: fixed;
    .btn {
      width: 2rem;
    }
    .dropdown-list {
      right: 10%;
    }
  }

`
export default StyledNavbar