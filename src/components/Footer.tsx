import React from "react";
import StyledFooter from "./styles/StyledFooter";
import { Icon } from "@iconify/react";

export default function Footer(){
  return(
    <StyledFooter>
      <h4>Hope you enjoy being here!</h4>
      <a className="credits" href="https://github.com/Ocycak">
      <Icon icon="line-md:github" className="svg"/><h2>Made by Mockini @2022</h2>
      </a>
      <h4>M stands for Make, Mix and Mocktail</h4>
    </StyledFooter>
  )
}