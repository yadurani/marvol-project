import styled from 'styled-components'

export const BlogWrapper = styled.div`
  margin: 50px 0 30px;
  width: 70%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const BlogTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-size: ${({ theme }) => theme.sizeFont.lg};
  margin: 0;
  text-transform: uppercase;
`

export const BlogCard = styled.div`
  margin: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.main};
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-gap: 32px;
  padding-bottom: 24px;
  padding-right: 15px;
  &:last-child {
    border: none;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 24 px;
  }
`
export const BlogCardImg = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
`

export const BlogCardText = styled.div``

export const BlogCardCaption = styled.p`
  color: ${({ theme }) => theme.colors.gray.main};
  font-size: ${({ theme }) => theme.sizeFont.md};
  text-transform: uppercase;
  margin: 0;
`

export const BlogCardSubtitle = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
`
