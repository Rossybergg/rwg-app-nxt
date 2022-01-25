import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {
  LogoContainer, LinkContainer, LinkChip, LinkContent, StyledNavBar,
} from './NavBar.styles';
import logo from '../../assets/images/logobig.png'

export const NavBar: React.FC = () => {
  const HomeRoundedIconGra = () => (
    <div className="linkIcon">
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="rgba(95,32,212,1)" />
          <stop offset={1} stopColor="rgba(162,41,94,1)" />
        </linearGradient>
      </svg>
      <HomeRoundedIcon fontSize="large" sx={{ fill: 'url(#linearColors)' }} />
    </div>
  )

  return (
    <StyledNavBar>
        <LogoContainer>
          <img src={logo} alt="Red Wine Gaming" id="logo"/>
        </LogoContainer>
      <Stack direction="row" spacing={4} id="userProfile">
        <div id="userName">
          Members
        </div>
        <div id="userName">
          Events
        </div>
        <div id="userName">
          Big Quiz
        </div>
        <Avatar
          className="avatar"
          sx={{ width: 50, height: 50 }}
          src="https://cdn.discordapp.com/avatars/500376050103222273/28d5a787578797c40f1c7e16c160e0ce" />
      </Stack>

      {/* <LinkContainer> */}
      {/*  <LinkChip/> */}
      {/*  <LinkContent> */}
      {/*    <HomeRoundedIconGra/> */}
      {/*    Home */}
      {/*  </LinkContent> */}
      {/* </LinkContainer> */}
      {/* <LinkContainer> */}
      {/*  Members */}
      {/* </LinkContainer> */}
      {/* <LinkContainer> */}
      {/*  Events */}
      {/* </LinkContainer> */}
      {/* <LinkContainer> */}
      {/*  Quiz */}
      {/* </LinkContainer> */}
    </StyledNavBar>
  )
}
