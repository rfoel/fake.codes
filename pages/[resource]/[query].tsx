import { NextPage } from 'next'
import styled from 'styled-components'

import Copyable from '../../components/Copyable'
import useResource from '../../hooks/useResource'

const StyledResource = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

const Resource: NextPage = () => {
  const { data, loading } = useResource()

  if (loading) return null

  return (
    <StyledResource>
      {data?.map(({ value, formatted }) => (
        <div key={value}>
          <Copyable text={value} />
          {formatted && <Copyable text={formatted} />}
        </div>
      ))}
    </StyledResource>
  )
}

Resource.getInitialProps = ({ query }) => {
  console.log({ query })
  return { query }
}

export default Resource
