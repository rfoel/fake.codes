import { FunctionComponent } from 'react'
import styled from 'styled-components'

import Copyable from '../components/Copyable'
import useResource from '../hooks/useResource'

const StyledResource = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

const Resource: FunctionComponent = () => {
  const { formatted, value } = useResource()

  return (
    <StyledResource>
      <Copyable text={formatted} />
      <Copyable text={value} />
    </StyledResource>
  )
}

export default Resource
