import styled, { css } from 'styled-components'

export const ParagraphContainer = styled.p`
  font-size: ${({ theme }) => theme.sizeFont.md};
  color: ${({ theme }) => theme.colors.secondary};
  ${(props) =>
    props.white &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`
