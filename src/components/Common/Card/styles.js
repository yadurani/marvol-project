import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardImg = styled.img`
  width: 100%;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.25);
`

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-transform: initial;
`

export const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray.main};
  font-size: ${({ theme }) => theme.sizeFont.xs};
  margin-top: 0;
  margin-bottom: 0;
`
export const CardWrapper = styled.li`
  list-style: none;
  text-align: left;
  transition: all 0.2s ease;
  transform: translateY(0);
  &:hover ${CardTitle} {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  &:hover ${CardImg} {
    transform: translateY(-2%);
  }
`
export const CardLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
