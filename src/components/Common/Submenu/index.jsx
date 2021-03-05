import React from 'react'

import Card from '../Card'
import Title from '../Title'
import { Container } from '../../../styled/styledCommons'
import {
  SubmenuWrapper,
  SubmenuList,
  SubmenuBackButton,
  SubmenuIcon,
} from './styles'

const Submenu = ({ title, data, className, active, close }) => {
  return (
    <SubmenuWrapper className={className} active={active}>
      <Container>
        <SubmenuBackButton
          role="button"
          aria-label="Back Button"
          onClick={close}>
          <SubmenuIcon />
        </SubmenuBackButton>
        <Title>{title}</Title>
        <SubmenuList>
          {data?.map((item, i) => (
            <Card key={i} img={item.img} title={item.title} date={item.date} />
          ))}
        </SubmenuList>
      </Container>
    </SubmenuWrapper>
  )
}

export default Submenu
