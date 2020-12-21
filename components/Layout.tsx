import React, { FunctionComponent } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import GlobalStyles from './GlobalStyles'
import theme from '../utils/theme'

const Container = styled.div(
  ({ theme: { colors } }) => css`
    color: ${colors.black};
  `,
)

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Layout
