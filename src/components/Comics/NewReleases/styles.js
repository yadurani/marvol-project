import styled from 'styled-components'

export const NewReleaseWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 48px 32px;
  margin-bottom: 48px;
  padding-left: 0;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px 30px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 30px 0;
  }
`
