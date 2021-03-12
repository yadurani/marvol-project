import React from 'react'
import {
  TopIconBack,
  TopIconNext,
  TopNavigationContent,
  TopNavigationLink,
  TopNavigationWrapper,
  TopNavPages,
} from './styles'
import { Container } from '../../../styled/styledCommons'

const TopNavigation = () => {
  return (
    <TopNavigationWrapper>
      <Container>
        <TopNavigationContent>
          <TopNavigationLink to="/historietas">
            <TopIconBack />
            Volver
          </TopNavigationLink>
          <TopNavPages>
            <TopNavigationLink to="#">
              <TopIconBack white />
              Anterior
            </TopNavigationLink>
            <TopNavigationLink to="#">
              Siguiente
              <TopIconNext white />
            </TopNavigationLink>
          </TopNavPages>
        </TopNavigationContent>
      </Container>
    </TopNavigationWrapper>
  )
}

export default TopNavigation
