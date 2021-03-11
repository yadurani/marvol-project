import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background-image: url('images/historietas.jpg');
  background-size: cover;
  display: grid;
  height: calc(100vh - 92px);
  margin-bottom: 40px;
  margin-top: 92px;
  @media (max-width: 768px) {
    height: calc(100vh - 40px);
    margin-top: 50px;
  }
`
export const BannerContentText = styled.div`
  margin-top: -100px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const BannerTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-size: ${({ theme }) => theme.sizeFont.lg};
  margin: 0 0 1.5rem;
  text-transform: uppercase;
`
