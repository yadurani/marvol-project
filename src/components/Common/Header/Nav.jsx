import React from 'react'

import useToogle from '../../../hooks/useToogle'
import { films, seriesTv } from '../../../constants/data'
import { Container } from '../../../styled/styledCommons'
import Submenu from '../Submenu'
import {
  NavWrapper,
  NavList,
  NavItem,
  NavCloseMobile,
  NavIconClose,
  NavIconNext,
  NavItemLink,
} from './styles'

const NavBar = ({ active, handleOpen }) => {
  const [isOpenFilms, handleFilms] = useToogle()
  const [isOpenSeries, handleSeries] = useToogle()

  return (
    <NavWrapper active={active}>
      <Container>
        <NavList>
          <NavItem>
            <NavCloseMobile
              onClick={handleOpen}
              role="button"
              aria-label="Close Mobile">
              <NavIconClose />
            </NavCloseMobile>
          </NavItem>
          <NavItem>Videos</NavItem>
          <NavItem>Caracteres</NavItem>
          <NavItem onClick={handleOpen}>
            <NavItemLink to="/historietas" activeClassName="active">
              Historietas
            </NavItemLink>
          </NavItem>
          <NavItem className="films">
            Películas
            <NavIconNext onClick={handleFilms} aria-label="View Film" />
            <Submenu
              close={handleFilms}
              active={isOpenFilms}
              className="films-hover"
              title={films.title}
              data={films.data}
            />
          </NavItem>
          <NavItem className="series">
            Programas de televisión
            <NavIconNext onClick={handleSeries} aria-label="View TV" />
            <Submenu
              close={handleSeries}
              active={isOpenSeries}
              className="series-hover"
              title={seriesTv.title}
              data={seriesTv.data}
            />
          </NavItem>
          <NavItem>Juegos</NavItem>
          <NavItem>Noticias</NavItem>
          <NavItem>Más</NavItem>
        </NavList>
      </Container>
    </NavWrapper>
  )
}

export default NavBar
