import styled, { css } from 'styled-components'

export const TitleContainer = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-size: ${({ theme }) => theme.sizeFont.xl};
  line-height: 46px;
  margin: 0 0 40px;
  text-transform: uppercase;
  ${(props) =>
    props.white &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${(props) =>
    props.notMargin &&
    css`
      margin: 0;
    `}
`
