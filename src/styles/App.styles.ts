import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative;
  background: rgba( 0, 0, 0, 0.3 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 95vw;
  height: 95vh;
  font-family: 'Overpass', sans-serif;
  color: white;
  overflow: hidden;
`;

export const Nav = styled.div`
  position: relative;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  width: 100%;
  height: 150px;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
