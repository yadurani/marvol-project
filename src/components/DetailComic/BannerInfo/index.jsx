import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../../styled/styledCommons'
import { newReleases } from '../../../constants/data'
import TopNavigation from './TopNavigation'
import Title from '../../Common/Title'
import {
  BannerInfoContent,
  BannerInfoContentText,
  BannerInfoImg,
  BannerInfoText,
  BannerInfoTextRow,
  BannerInfoWrapper,
  BannerInfoParagraph,
} from './styles'

const BannerInfo = () => {
  const id = useParams().id
  const findCharacter = newReleases.find(
    (character) => character.id === parseInt(id)
  )

  return (
    <BannerInfoWrapper>
      <TopNavigation />
      <BannerInfoContent src={findCharacter.img}>
        <Container>
          <BannerInfoContentText>
            <BannerInfoImg src={findCharacter.img} alt={findCharacter.title} />
            <BannerInfoText>
              <Title white initial>
                {findCharacter.title}
              </Title>
              <BannerInfoTextRow>
                <BannerInfoParagraph>
                  <b>Publicado:</b>
                  <br />
                  13 de enero de 2021
                </BannerInfoParagraph>
                <BannerInfoParagraph>
                  <b>Escritor:</b>
                  <br />
                  Nick Spencer
                </BannerInfoParagraph>
                <BannerInfoParagraph>
                  <b>Dibujante:</b>
                  <br />
                  Mark Bagley
                </BannerInfoParagraph>
                <BannerInfoParagraph>
                  <b>Artista de portada:</b>
                  <br />
                  Mark Bagley
                </BannerInfoParagraph>
                <BannerInfoParagraph>
                  Spider-Man continúa recogiendo los pedazos e intentando armar
                  su vida. Pero muchas de las tormentas que se avecinan se
                  arremolinan cada vez más violentamente ... Queremos contarte
                  más, pero ¡¡¡PERDUCIRÍA TANTO DE LOS ÚLTIMOS RESTOS !!!
                </BannerInfoParagraph>
              </BannerInfoTextRow>
            </BannerInfoText>
          </BannerInfoContentText>
        </Container>
      </BannerInfoContent>
    </BannerInfoWrapper>
  )
}

export default BannerInfo
