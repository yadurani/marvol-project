import React from 'react'
import { newReleases } from '../../../constants/data'
import { NewReleaseWrapper } from './styles'
import Card from '../../Common/Card'
import { Container } from '../../../styled/styledCommons'
import { BannerTitle } from '../Banner/styles'

const NewRelease = () => {
  return (
    <Container>
      <BannerTitle>13 DE ENERO: NUEVOS LANZAMIENTOS</BannerTitle>
      <NewReleaseWrapper>
        {newReleases?.map((release, i) => (
          <Card
            key={i}
            img={release.img}
            title={release.title}
            date={release.caption}
          />
        ))}
      </NewReleaseWrapper>
    </Container>
  )
}

export default NewRelease
