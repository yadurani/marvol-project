import React from 'react'
import { Container } from '../../../styled/styledCommons'
import Button from '../../Common/Button'
import {
  CreditCardCaption,
  CreditCardImg,
  CreditCardText,
  CreditCardTitle,
  CreditCardWrapper,
} from './styles'

const CreditCard = () => {
  return (
    <CreditCardWrapper>
      <CreditCardImg alt="Marvel mastercard" src="images/credit-card.jpg" />
      <CreditCardText>
        <Container>
          <CreditCardCaption>Marvel mastercad</CreditCardCaption>
          <CreditCardTitle>
            Obtenga un crédito de estado de cuenta de $25
          </CreditCardTitle>
          <Button text="Aprender más" />
        </Container>
      </CreditCardText>
    </CreditCardWrapper>
  )
}

export default CreditCard
