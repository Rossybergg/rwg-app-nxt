import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  
  #userProfile{
    position: absolute;
    top:50px;
    right: 50px;
  }

  #userName{
    padding-top: 10px;
    font-size: 20px;
  }
  
  .avatar{
    background: deepskyblue;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 25px 0 rgba(255,255,255, 0.7);
  }
`

export const LogoContainer = styled.div`
  padding-top: 10px;
  text-align: center;
  width: 200px;
  height: fit-content;
  box-sizing: border-box;
  
  #logo{
    margin: -10px 0 0 30px;
    width: 100%;
  }
`

export const LinkContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  box-sizing: border-box;
  font-size: 20px;
`

export const LinkChip = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 5px;
  height: 100%;
  background: rgb(162,41,94);
  background: linear-gradient(50deg, rgba(162,41,94,1) 0%, rgba(95,32,212,1) 72%);
`

export const LinkContent = styled.div`
  
  .linkIcon{
    margin-top: -7px;
    position: absolute;
    left: 20px;
  }
`
