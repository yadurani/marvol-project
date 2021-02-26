import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({ text, ...props }) => (
  <ButtonContainer {...props}>{text}</ButtonContainer>
)

export default Button
