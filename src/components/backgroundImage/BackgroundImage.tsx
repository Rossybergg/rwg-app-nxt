import React from 'react';
import { StyledBackgroundImage } from './BackgroundImage.styles';
import halo from '../../assets/images/halo.jpg'

export const BackgroundImage: React.FC = () => (
    <StyledBackgroundImage>
      <img src={halo} alt="Red Wine Gaming" id="bgImage"/>
      <div className="ProfileMask"/>
    </StyledBackgroundImage>
)
