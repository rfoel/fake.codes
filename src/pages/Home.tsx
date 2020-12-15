import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import resources from '../utils/resources'

const Anchor = styled(Link)(
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
        <Anchor key={resource} to={`/${resource}`}>
          {resource}
        </Anchor>
      ))}
    </div>
  )
}
export default Home
