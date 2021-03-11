import React from 'react'
import {
  TopBarWrapper,
  TopBarLink,
  TopBarLogo,
  TopBarMenuMobile,
  TopBarIconMenu,
  TopBarLogoLink,
} from './styles'
import { Container } from '../../../styled/styledCommons'

const TopBar = ({ handleOpen }) => (
  <Container>
    <TopBarWrapper>
      <TopBarMenuMobile
        onClick={handleOpen}
        role="button"
        aria-label="Menu Mobile">
        <TopBarIconMenu />
      </TopBarMenuMobile>
      <TopBarLink to="/">Registrarse | Unirse</TopBarLink>
      <TopBarLogoLink to="/">
        <TopBarLogo alt="Logo de Marvol" src="images/Marvel-logo.png" />
      </TopBarLogoLink>
    </TopBarWrapper>
  </Container>
)

export default TopBar
