import React from 'react'

import { TitleContainer } from './styles'

const Title = ({ children, ...props }) => (
  <TitleContainer {...props}>{children}</TitleContainer>
)

export default Title
