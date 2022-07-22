import React from "react";
import StyledLoader from "./styles/StyledLoader"
type Props = {
  text: string;
}

export default function Loader({text}: Props){
  return(
    <StyledLoader>
      <div className="loader">

      <span>Loading...</span>
      </div>
    </StyledLoader>
  )
}