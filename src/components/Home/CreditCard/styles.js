import styled from 'styled-components'

export const CreditCardWrapper = styled.div`
  background-color: #000000;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
export const CreditCardImg = styled.img`
  width: 100%;
  height: auto;
`
export const CreditCardText = styled.div`
  text-align: center;
  align-self: center;
  @media (max-width: 767px) {
    padding: 40px 0;
  }
`

export const CreditCardCaption = styled.p`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.sizeFont.md};
  font-weight: bold;
  margin-top: 0;
  text-transform: uppercase;
`
export const CreditCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-size: ${({ theme }) => theme.sizeFont.lg};
  margin: 24px 0;
`
