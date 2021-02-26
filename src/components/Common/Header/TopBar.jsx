import React from 'react'
import {
  TopBarWrapper,
  TopBarLink,
  TopBarLogo,
  TopBarMenuMobile,
  TopBarIconMenu,
} from './styles'
import { Container } from '../../../styled/styledCommons'

const TopBar = ({ handleOpen }) => (
  <Container>
    <TopBarWrapper>
      <TopBarMenuMobile onClick={handleOpen}>
        <TopBarIconMenu />
      </TopBarMenuMobile>
      <TopBarLink to="/">Registrarse | Unirse</TopBarLink>
      <TopBarLogo alt="Logo de Marvol" src="images/Marvel-logo.png" />
    </TopBarWrapper>
  </Container>
)

export default TopBar
