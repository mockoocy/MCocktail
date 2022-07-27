import React from 'react'
import StyledThanks from "./styles/StyledThanks"
import {ReactComponent as HeartSvg} from "../../assets/thanks.svg"

function Thanks() {
  return (
    <StyledThanks>
      <h1>Thank you!</h1>
      <div className="love-container">
        <HeartSvg className="svg heart-svg"/>
        <ul className="nice-people-list">
          Thanks to:
          <li>You, the person visiting the website!</li>
          <li>Unsplash & Undraw team for their amazing assets</li>
          <li>React team for providing amazing tools to make this website possible</li>
          <li>Typescript team for saving me from painful debugging</li>
          <li>Styled Components contributors for a nice css in js solution</li>
        </ul>
      </div>
    </StyledThanks>
  )
}

export default Thanks