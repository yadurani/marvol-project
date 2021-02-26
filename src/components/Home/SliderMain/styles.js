import styled, { css } from 'styled-components'
import { Container } from '../../../styled/styledCommons'
import { TitleContainer } from '../../Common/Title/styles'

export const SliderWrapper = styled.div`
  height: calc(100vh - 92px);
  margin-top: 92px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto;
    margin-top: 52px;
  }
`
export const SliderNavList = styled.ul`
  align-content: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-grid;
  grid-gap: 40px;
  grid-auto-flow: column;
  padding: 0 20px;
  position: relative;
  margin: 0;
  @media (max-width: 767px) {
    display: none;
  }
`
export const SlideNavItem = styled.li`
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizeFont.sm};
  font-weight: bold;
  list-style: none;
  padding: 20px 0;
  position: relative;
  ${(props) =>
    props.active &&
    css`
      &&:before {
        background: ${({ theme }) => theme.colors.primary.main};
        visibility: visible;
      }
      pointer-events: none;
      color: ${({ theme }) => theme.colors.primary.main};
    `}
  &:before {
    content: '';
    left: -20px;
    height: 4px;
    position: absolute;
    top: 0;
    width: calc(100% + 40px);
    visibility: hidden;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const SliderContent = styled.div`
  display: flex;
  height: 90%;
  margin-bottom: -35px;
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  width: ${(props) => props.width}px;
  @media (max-width: 767px) {
    height: 100%;
    margin-bottom: 0;
  }
`

export const SlideWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
  display: grid;
  height: 100%;
  width: ${(props) => props.width}px;
  @media (max-width: 767px) {
    background-image: none;
    clip-path: none;
    align-content: flex-end;
    grid-auto-flow: row;
    ${Container} {
      padding: 0;
    }
  }
`

export const SlideContentText = styled.div`
  width: 50%;
  margin-top: -100px;
  ${TitleContainer} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    background: ${({ theme }) => theme.colors.secondary};
    padding: 35px 15px;
    margin-top: -10px;
    width: 100%;
    ${TitleContainer} {
      font-size: ${({ theme }) => theme.sizeFont.lg};
    }
  }
`

export const SlideImg = styled.img`
  @media (max-width: 767px) {
    display: none;
  }
`
export const SlideImgMobile = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: top;
  @media (min-width: 768px) {
    display: none;
  }
`
