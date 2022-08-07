import React from 'react'
import StyledInfoCard from "./styles/StyledInfoCard"

type Props = {
  bigText: string;
  smallText: string;
  children: React.ReactNode
}
function InfoCard({bigText, smallText, children} : Props) {
  return (

    <StyledInfoCard>
      <div className="text-block">
        <h3 className="big-text">
          <div className="svg-container">{children}</div>{bigText}
        </h3>
        <p className="small-text">{smallText}</p>
      </div>
    </StyledInfoCard>
  )
}

export default InfoCard