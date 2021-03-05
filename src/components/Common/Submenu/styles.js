import styled from 'styled-components'
import { CardImg, CardTitle, CardSubtitle } from '../Card/styles'
import { TitleContainer } from '../Title/styles'

export const SubmenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  bottom: 0;
  display: none;
  height: fit-content;
  left: 0;
  overflow: auto;
  padding: 40px 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 93px;
  @media (max-width: 768px) {
    background: ${({ theme }) => theme.colors.secondary};
    display: block;
    padding: 15px;
    height: 100%;
    text-align: left;
    top: 0;
    transform: ${(props) =>
      props.active ? 'translateX(0)' : 'translateX(200%)'};
    transition: all 0.5s ease;
    z-index: 2;
    ${TitleContainer} {
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
      margin-bottom: 15px;
      font-size: ${({ theme }) => theme.sizeFont.lg};
    }
  }
`

export const SubmenuList = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  margin: 0 160px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin: 0 0;
    ${CardImg},
    ${CardSubtitle} {
      display: none;
    }
    ${CardTitle} {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.sizeFont.md};
      margin: 0;
      padding: 15px 0;
      text-align: left;
      text-transform: uppercase;
      &:hover {
        color: inherit;
      }
    }
  }
`

export const SubmenuBackButton = styled.button`
  background: none;
  border: none;
  padding: 10px 15px 30px 0;
  &:focus {
    outline: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const SubmenuIcon = styled.div`
  border-right: 3px solid ${({ theme }) => theme.colors.white};
  border-bottom: 3px solid ${({ theme }) => theme.colors.white};
  height: 20px;
  width: 20px;
  transform: rotate(135deg);
`
