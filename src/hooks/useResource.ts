import { useParams, useRouteMatch } from 'react-router-dom'

import resources, { Resource } from '../utils/resources'

const useResource = (): Resource => {
  const { resource }: { resource: string } = useParams()
  const match = useRouteMatch('/')

  if (!match?.isExact && !Object.keys(resources).find(r => r === resource))
    throw Error(`resource ${resource} was not found`)

  return { ...resources[resource], resource }
}

export default useResource
