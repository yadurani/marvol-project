import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const TopBarWrapper = styled.div`
  display: grid;
  grid-template-columns: 163px 1fr 163px;
  height: 52px;
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 40px;
  }
`

export const TopBarLink = styled(Link)`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: grid;
  font-size: ${({ theme }) => theme.sizeFont.xs};
  font-weight: bold;
  height: auto;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TopBarLogo = styled.img`
  justify-self: center;
  align-self: center;
`
export const TopBarMenuMobile = styled.button`
  background: transparent;
  border: none;
  justify-self: center;
  &:focus {
    outline: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`
export const TopBarIconMenu = styled.div`
  align-self: center;
  background: ${({ theme }) => theme.colors.white};
  height: 3px;
  padding: 0;
  position: relative;
  width: 30px;
  &:before,
  &:after {
    background: ${({ theme }) => theme.colors.white};
    content: '';
    height: 3px;
    width: 30px;
    position: absolute;
    left: 0;
  }
  &:before {
    top: -8px;
  }
  &:after {
    bottom: -8px;
  }
`

export const NavWrapper = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  @media (max-width: 768px) {
    background: ${({ theme }) => theme.colors.secondary};
    border: none;
    bottom: 0;
    left: 0;
    padding: 15px 0;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props) =>
      props.active ? 'translateX(0)' : 'translateX(-100%)'};
    transition: all 0.5s ease;
  }
`

export const NavList = styled.ul`
  align-content: center;
  display: grid;
  grid-auto-flow: column;
  height: 40px;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-auto-flow: row;
    height: auto;
    justify-content: inherit;
  }
`
export const NavItem = styled.li`
  align-content: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: grid;
  font-size: ${({ theme }) => theme.sizeFont.xs};
  font-weight: bold;
  height: inherit;
  list-style: none;
  padding: 5px 15px;
  position: relative;
  text-transform: uppercase;
  &:focus,
  &:active,
  &:visited {
    outline: none;
    background-color: transparent;
  }
  &:first-child {
    padding: 15px 0 0;
  }
  @media (max-width: 768px) {
    position: relative;
    align-items: center;
    display: grid;
    font-size: ${({ theme }) => theme.sizeFont.md};
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 15px 15px;
  }
  &:before {
    background: ${({ theme }) => theme.colors.primary.main};
    bottom: 0;
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    right: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    width: 100%;
    opacity: 0;
    @media (max-width: 768px) {
      visibility: hidden;
    }
  }
  &:hover {
    &:before {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  &.films,
  &.series {
    &:hover .films-hover,
    &:hover .series-hover {
      display: initial;
    }
  }
`

export const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const NavCloseMobile = styled.button`
  background: none;
  border: none;
  margin: 15px 3px 30px;
  width: max-content;
  &:focus {
    outline: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`
export const NavIconClose = styled.div`
  width: 30px;
  height: 3px;
  transform: rotate(45deg);
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  &:before {
    background: ${({ theme }) => theme.colors.white};
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    width: 30px;
  }
`

export const NavIconNext = styled.button`
  background-color: transparent;
  border: none;
  bottom: 0;
  left: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &:before {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary.main};
    border-right: 3px solid ${({ theme }) => theme.colors.primary.main};
    content: '';
    height: 10px;
    position: absolute;
    right: 5px;
    transform: rotate(-45deg);
    width: 10px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`
