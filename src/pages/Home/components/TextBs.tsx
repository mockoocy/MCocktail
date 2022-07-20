import React from "react";
import StyledTextBs from "./styles/StyledTextBs";


function TextBs() {
  return (
    <StyledTextBs>
      <div className="motto-container">
        <h1>A little drink never killed nobody</h1>
      </div>
      <div className="more-text">
        <div className="text-block">
          <h3 className="big-text">Drink something cheaply</h3>
          <p className="small-text">Just tell us what’s in your bar,we will 
handle the rest for you.</p>
        </div>
        <div className="text-block">
          <h3 className="big-text">Use our generator</h3>
          <p className="small-text">In a matter of seconds you’ll
find an inspiring drink</p>
        </div>
        <div className="text-block">
          <h3 className="big-text">Learn something new</h3>
          <p className="small-text">With our instructions, you’ll become
equipped with abilities to craft 
something new</p>
        </div>
      </div>
    </StyledTextBs>
  )
}


export default TextBs;