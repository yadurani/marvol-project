import React from 'react'
import { ParagraphContainer } from './styles'

const Paragraph = ({ text, ...props }) => (
  <ParagraphContainer {...props} >{text} </ParagraphContainer>
)

export default Paragraph
