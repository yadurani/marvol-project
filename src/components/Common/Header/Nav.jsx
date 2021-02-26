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
          <NavCloseMobile onClick={handleOpen}>
            <NavIconClose />
          </NavCloseMobile>
          <NavItem>Videos</NavItem>
          <NavItem>Caracteres</NavItem>
          <NavItem onClick={handleOpen}>
            <NavItemLink to="/historietas">Historietas</NavItemLink>
          </NavItem>
          <NavItem className="films" onClick={handleFilms}>
            Películas
            <NavIconNext />
            <Submenu
              active={isOpenFilms}
              className="films-hover"
              title={films.title}
              data={films.data}
            />
          </NavItem>
          <NavItem className="series" onClick={handleSeries}>
            Programas de televisión
            <NavIconNext />
            <Submenu
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
