import React from 'react'
import theme from '../constants/theme'
import Routes from '../route/Routes'
import GlobalStyle from '../styled/globalStyled'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
)

export default App
