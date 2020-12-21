import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import resources, { Resource } from '../utils/resources'

type State = {
  data?: Resource['data']
  resource: Resource['resource']
  loading: boolean
}

const useResource = (): State => {
  const router = useRouter()
  const {
    query: { query, resource },
    pathname,
  } = router

  const [state, setState]: [state: State, setState: any] = useState({
    loading: false,
    resource,
  })

  const match = pathname === '/'

  if (!match && !Object.keys(resources).find(r => r === resource)) {
    throw new Error(`resource ${resource} was not found`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await resources[resource](query)
      setState({ ...state, data })
    }

    if (!match && !state.data && !state.loading) {
      setState({ ...state, loading: true })
      fetchData()
    }
  }, [query, resource, state])

  return state
}

export default useResource
