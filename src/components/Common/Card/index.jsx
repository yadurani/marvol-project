import React from 'react'

import { CardImg, CardTitle, CardSubtitle, CardWrapper } from './styles'

const Card = ({ img, title, date }) => {
  return (
    <CardWrapper>
      <CardImg src={img} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{date}</CardSubtitle>
    </CardWrapper>
  )
}

export default Card
