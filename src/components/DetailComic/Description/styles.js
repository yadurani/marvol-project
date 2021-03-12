import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 64px 0;
  margin-bottom: 40px;
`
export const DescriptionTitle = styled.h3`
  color: white;
  font-size: ${({ theme }) => theme.sizeFont.lg};
  font-family: ${({ theme }) => theme.fonts.condensed};
  margin-top: 0;
  margin-bottom: 40px;
`
export const DescriptionContentRows = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 120px;
  @media (max-width: 990px) {
    grid-gap: 0 20px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`
export const DescriptionContentColumn = styled.div``

export const DescriptionSubtitle = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.sizeFont.md};
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 0;
`
export const DescriptionText = styled.p`
  color: white;
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.sizeFont.md};
`
