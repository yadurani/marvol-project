import React from 'react'
import {
  FooterWrapper,
  FooterImg,
  FooterSocial,
  FooterInfo,
  FooterInfoList,
  FooterContent,
  FooterInfoItem,
  FooterSocialMedia,
  FooterMediaItem,
} from './styles'
import { Container } from '../../../styled/styledCommons'
import { socials } from '../../../constants/data'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterImg
            src="images/Marvel-logo.png"
            alt="Logo Footer"
            height="40"
          />
          <FooterInfo>
            <FooterInfoList>
              <FooterInfoItem>Sobre marvel</FooterInfoItem>
              <FooterInfoItem>Ayuda / Preguntas frecuentes</FooterInfoItem>
              <FooterInfoItem>Carreras</FooterInfoItem>
              <FooterInfoItem>Pasantías</FooterInfoItem>
            </FooterInfoList>
            <FooterInfoList>
              <FooterInfoItem>Publicidad</FooterInfoItem>
              <FooterInfoItem>Marvelqh.com</FooterInfoItem>
              <FooterInfoItem>Canjear cómics digitales</FooterInfoItem>
            </FooterInfoList>
          </FooterInfo>
          <FooterSocial>
            Sigue a marvel
            <FooterSocialMedia>
              {socials?.map((social) => (
                <FooterMediaItem key={social.name}>
                  <img
                    src={social.img}
                    alt={social.name}
                    width="30"
                    height="30"
                  />
                </FooterMediaItem>
              ))}
            </FooterSocialMedia>
          </FooterSocial>
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
