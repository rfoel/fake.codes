import { FunctionComponent } from 'react'

import useResource from '../hooks/useResource'

const Header: FunctionComponent = () => {
  const { resource } = useResource()

  return (
    <header>
      <h1>fake.codes{resource && `(${resource})`}</h1>
    </header>
  )
}

export default Header
