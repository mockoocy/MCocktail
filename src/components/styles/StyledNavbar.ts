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
  background-image: url("../../smokebook.png");
  background-size: 150vmax;
  background-repeat: no-repeat;
  filter: saturate(var(--navSaturation));
  border-bottom: 0.25rem solid var(--boringClr);


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
    
  }

  .logo {
    filter: hue-rotate(var(--hueRotateDeg));
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

  .dropdown-list {
    position: absolute;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 10ch;
    right: 5%;
    bottom: 0;
    max-height: 15%;
    &>li {
      width: 10ch;
      background-color: var(--boringClr);
      color: var(--optionClr);
      border-radius: 100vmax;
      text-align: center;
      &:hover{
        transform: scale(1.05)
      }
      &::marker {
        content: "";     
      }
  
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
    .browse {
      content: 'dupa';
    }
    .dropdown-list {
      right: 10%;
    }
  }

`
export default StyledNavbar