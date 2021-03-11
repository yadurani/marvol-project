import React from 'react'
import {
  CardImg,
  CardTitle,
  CardSubtitle,
  CardWrapper,
  CardLink,
} from './styles'

const Card = ({ img, title, date }) => {
  return (
    <CardWrapper>
      <CardLink to="/detalle">
        <CardImg src={img} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{date}</CardSubtitle>
      </CardLink>
    </CardWrapper>
  )
}

export default Card
