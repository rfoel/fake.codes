import React from 'react'

import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import Router from './router'

const App = () => (
  <Layout>
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  </Layout>
)

export default App
