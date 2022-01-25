import React from 'react';
import { Home } from './pages/home/Home';
import {
  StyledApp, Nav, Content,
} from './styles/App.styles';
import { NavBar } from './components/navbar/NavBar';
import { BackgroundImage } from './components/backgroundImage/BackgroundImage';

function App() {
  return (
    <StyledApp>
      <Nav>
        <NavBar/>
      </Nav>
      <Content>
        <Home/>
      </Content>
    </StyledApp>
  );
}

export default App;
