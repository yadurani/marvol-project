import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 70px;
  padding-top: 40px;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 192px;
  grid-gap: 16px 30px;
  @media (min-width: 1366px) {
    grid-gap: 16px 64px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FooterImg = styled.img`
  @media (max-width: 768px) {
    justify-self: center;
  }
`

export const FooterInfo = styled.div`
  display: grid;
  grid-gap: 16px 0;
  grid-template-columns: repeat(2, 250px);
  @media (min-width: 1366px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const FooterInfoList = styled.ul`
  margin: 0;
  padding: 0;
`

export const FooterInfoItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  font-weight: bold;
  list-style: none;
  padding-bottom: 15px;
  text-transform: uppercase;
  &:last-child {
    padding-bottom: 0;
  }
`

export const FooterSocial = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  font-weight: bold;
  text-transform: uppercase;
`

export const FooterSocialMedia = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 0;
  margin-left: 0;
  margin-top: 16px;
  padding: 0;
  @media (max-width: 768px) {
    grid-gap: 0;
  }
`

export const FooterMediaItem = styled.li`
  list-style: none;
  justify-self: center;
  align-self: center;
`
