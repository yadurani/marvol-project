import React from 'react'
import {
  CardImg,
  CardTitle,
  CardSubtitle,
  CardWrapper,
  CardLink,
} from './styles'

const Card = ({ img, title, date, route = '#' }) => {
  return (
    <CardWrapper>
      <CardLink to={route}>
        <CardImg src={img} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{date}</CardSubtitle>
      </CardLink>
    </CardWrapper>
  )
}

export default Card
