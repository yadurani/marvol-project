import React from 'react'

import Nav from './Nav'
import TopBar from './TopBar'
import { HeaderContainer } from './styles'
import useToogle from '../../../hooks/useToogle'

const Header = () => {
  const [isOpen, handleToogle] = useToogle()
  return (
    <HeaderContainer>
      <TopBar handleOpen={handleToogle} />
      <Nav active={isOpen} handleOpen={handleToogle} />
    </HeaderContainer>
  )
}

export default Header
