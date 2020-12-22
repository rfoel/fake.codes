import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import resources, { Resource } from '../utils/resources'

type State = {
  data?: Resource['data']
  loading: boolean
  resource: Resource['resource']
}

type Query = {
  query?: string
  resource?: string
}

const useResource = (): State => {
  const router = useRouter()
  const {
    query: { query, resource },
    pathname,
  }: { query: Query; pathname: string } = router

  const [state, setState]: [state: State, setState: any] = useState({
    loading: false,
    resource,
  })

  const match = pathname === '/'

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (!resource) return
      const data = await resources[resource](query)
      setState({ ...state, data })
    }

    if (resource && !match && !state.data && !state.loading) {
      setState({ ...state, loading: true })
      fetchData()
    }
  }, [match, query, resource, state])

  return state
}

export default useResource
