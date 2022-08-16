import React from "react";
import StyledFooter from "./styles/StyledFooter";
import { Icon } from "@iconify/react";

export default function Footer(){
  return(
    <StyledFooter>
      <h4>Hope you enjoy being here!</h4>
      <a className="credits" href="https://github.com/Ocycak">
      <Icon icon="line-md:github" className="svg"/><h2>Made by MockinixPompa</h2>
      </a>
      <h4>Stay hydrated</h4>
    </StyledFooter>
  )
}