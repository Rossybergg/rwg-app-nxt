import React, { useState } from 'react';
import { StyledPage } from './Home.styles';

export const Home: React.FC = () => {
  const [test, setTest] = useState<boolean>(true);

  return (
    <StyledPage>
      Welcome To
      <br/>
      Red Wine Gaming
    </StyledPage>
  )
}
