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

  @media (max-width:820px){
    height: 8vh;
  }


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
      object-fit: cover;
    }

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
    .active-btn {
      >*{
        filter: brightness(1.25) drop-shadow(.25rem .25rem var(--captionClr));

      }
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
    transition: all 250 ease-in-out;

    :hover {
      transform: scale(1.15);
      cursor: pointer;
      filter: brightness(1.5) ;
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