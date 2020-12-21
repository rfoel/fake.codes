import { FunctionComponent } from 'react'
import styled from 'styled-components'

import Header from './Header'

const StyledPage = styled.div``

const Page: FunctionComponent = ({ children }) => (
  <StyledPage>
    <Header />
    {children}
  </StyledPage>
)

export default Page
