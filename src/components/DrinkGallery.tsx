import React from 'react';
import StyledDrinkGallery from './styles/StyledDrinkGallery';

type Props = {
  children: React.ReactNode[]
}

function DrinkGallery({children}: Props) {


  return (
    <StyledDrinkGallery>
      <div className="favorites-container">
        {children.length > 0
          ? children
          : <div className="empty-text-container">
            <h1>It's empty!</h1>
          </div> }
      </div>
    </StyledDrinkGallery>
  )
}

export default DrinkGallery