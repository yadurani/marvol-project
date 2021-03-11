import styled from 'styled-components'

export const TopNavigationWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.light};
  display: grid;
  height: 39px;
`
export const TopNavigationContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 72px 1fr;
  justify-items: center;
`
export const TopNavPages = styled.div`
  display: grid;
  grid-gap: 0 40px;
  grid-template-columns: repeat(2, auto);
  justify-self: center;
`
export const BannerInfoWrapper = styled.div`
  margin-top: 92px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`
export const BannerInfoContent = styled.div`
  display: grid;
  overflow: hidden;
  position: relative;
  z-index: -1;
  &:before {
    background-image: url('images/release/card-7.jpg');
    background-position: center;
    background-size: cover;
    bottom: 0;
    content: '';
    filter: blur(4px);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.4);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`
export const BannerInfoContentText = styled.div`
  filter: blur(0);
  display: grid;
  grid-template-columns: 350px 1fr;
  position: relative;
  z-index: 1;
  grid-gap: 0 64px;
  padding: 70px 0;
`
export const BannerInfoImg = styled.img`
  width: 100%;
`
