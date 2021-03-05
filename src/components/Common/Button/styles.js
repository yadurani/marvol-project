import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 0;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizeFont.sm};
  font-weight: bold;
  padding: 16px 32px;
  text-transform: uppercase;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
    @media (max-width: 767px) {
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.outline &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.colors.white};
      &:hover {
        background: transparent;
        border-color: ${({ theme }) => theme.colors.gray.main};
        @media (max-width: 767px) {
          background: ${({ theme }) => theme.colors.primary.white};
        }
      }
    `}
`
