import React from 'react'
import NewRelease from '../components/Comics/NewReleases'
import BannerInfo from '../components/DetailComic/BannerInfo'
import Description from '../components/DetailComic/Description'

const DetailComic = () => {
  return (
    <>
      <BannerInfo />
      <Description />
      <NewRelease />
    </>
  )
}

export default DetailComic
