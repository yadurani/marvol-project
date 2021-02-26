import styled from 'styled-components'

export const CardImg = styled.img`
  width: 100%;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.25);
`

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.sizeFont.md};
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: initial;
`

export const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray.main};
  font-size: ${({ theme }) => theme.sizeFont.xs};
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
