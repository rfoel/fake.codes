import { Resource, Home } from '../pages'

const routes = {
  get Resource() {
    return {
      path: '/:resource',
      component: Resource,
    }
  },
  get Home() {
    return {
      path: '/',
      component: Home,
    }
  },
}

export default routes
