import React from 'react'
import {
  TopNavigationContent,
  TopNavigationWrapper,
  TopNavPages,
} from './styles'
import { Container } from '../../../styled/styledCommons'

const TopNavigation = () => {
  return (
    <TopNavigationWrapper>
      <Container>
        <TopNavigationContent>
          <button>volver</button>
          <TopNavPages>hola</TopNavPages>
        </TopNavigationContent>
      </Container>
    </TopNavigationWrapper>
  )
}

export default TopNavigation
