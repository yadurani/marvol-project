import React from 'react'
import {
  DescriptionContentColumn,
  DescriptionContentRows,
  DescriptionSubtitle,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
} from './styles'
import { Container } from '../../../styled/styledCommons'

const Description = () => {
  return (
    <DescriptionWrapper>
      <Container>
        <DescriptionTitle>MÁS DETALLES</DescriptionTitle>
        <DescriptionContentRows>
          <DescriptionContentColumn>
            <DescriptionSubtitle>
              INFORMACIÓN Y CRÉDITOS EXTENDIDOS
            </DescriptionSubtitle>
            <DescriptionText>
              <b>Clasificación:</b> T nominal
            </DescriptionText>
            <DescriptionText>
              <b>Formato:</b> Comic
            </DescriptionText>
            <DescriptionText>
              <b>Precio:</b> $ 3.99
            </DescriptionText>
            <DescriptionText>
              <b>UPC:</b> 75960608936905711
            </DescriptionText>
            <DescriptionText>
              <b>Fecha FOC:</b> 14 de diciembre de 2020
            </DescriptionText>
          </DescriptionContentColumn>
          <DescriptionContentColumn>
            <DescriptionSubtitle>CUENTOS</DescriptionSubtitle>
            <DescriptionText>
              <b>Escritor:</b> Nick Spencer
            </DescriptionText>
            <DescriptionText>
              <b>Entintor:</b> John Dell
            </DescriptionText>
            <DescriptionText>
              <b>Colorista:</b> David Curiel
            </DescriptionText>
            <DescriptionText>
              <b>Letterer:</b> Vc Joe Caramagna
            </DescriptionText>
            <DescriptionText>
              <b>Dibujante:</b> Mark Bagley
            </DescriptionText>
          </DescriptionContentColumn>
          <DescriptionContentColumn>
            <DescriptionSubtitle>INFORMACIÓN DE PORTADA</DescriptionSubtitle>
            <DescriptionText>
              <b>Editor:</b> Nick Lowe
            </DescriptionText>
            <DescriptionText>
              <b>Dibujante (portada):</b> Mark Bagley
            </DescriptionText>
            <DescriptionText>
              <b>Colorista (portada):</b> Morry Hollowell
            </DescriptionText>
            <DescriptionText>
              <b>Inker (portada):</b> John Dell
            </DescriptionText>
          </DescriptionContentColumn>
        </DescriptionContentRows>
      </Container>
    </DescriptionWrapper>
  )
}

export default Description
