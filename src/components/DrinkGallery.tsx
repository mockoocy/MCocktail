import React from 'react';
import StyledDrinkGallery from './styles/StyledDrinkGallery';

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

function DrinkGallery({children}: Props) {


  return (
    <StyledDrinkGallery>
      <div className="favorites-container">
        {children}
      </div>
    </StyledDrinkGallery>
  )
}

export default DrinkGallery