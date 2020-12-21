import { FunctionComponent } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import resources from '../utils/resources'

const Anchor = styled.a(
  ({ theme: { colors } }) => css`
    color: ${colors.black};
    display: block;
    font-size: 32px;

    &:hover {
      text-decoration-color: ${colors.illuminating};
    }
  `,
)

const Home: FunctionComponent = () => {
  return (
    <div>
      {Object.keys(resources).map(resource => (
        <Link key={resource} href={`/${resource}`} passHref>
          <Anchor>{resource}</Anchor>
        </Link>
      ))}
    </div>
  )
}
export default Home
