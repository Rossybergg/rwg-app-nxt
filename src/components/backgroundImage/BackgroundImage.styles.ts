import styled from 'styled-components';

export const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) blur(5px);
    opacity: 0.23;
  }

  .ProfileMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: hard-light;
    background: linear-gradient(139deg, rgba(151, 28, 40, 1) 0%, rgb(34, 15, 50) 100%);
    opacity: 0.5;
  }
`
