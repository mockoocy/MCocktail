import React from "react";
import { ReactComponent as Error404 } from "../../assets/404.svg"
import StyledError from "./styles/StyledError"

export default function Error(){
  return (
    <StyledError>
      <Error404 className="svg error404"/>
      <h1>Oops! Something has clearly gone wrong!</h1>
      <h1>Perhaps page you are looking for doesn't exist?</h1>
    </StyledError>
  )
}
