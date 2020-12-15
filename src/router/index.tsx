import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Page from '../components/Page'
import routes from './routes'

const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      {Object.values(routes).map(({ component: Component, path }) => (
        <Route key={path} path={path}>
          <Page>
            <Component />
          </Page>
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
