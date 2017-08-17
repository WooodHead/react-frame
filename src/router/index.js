import React from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
// import 'es6-promise/dist/es6-promise'
import { Provider } from 'react-redux'
import store from '@/stores'
import Bundle from '@/components/common/Bundle'
import App from '@/containers/App'

import loadIndex from 'bundle-loader?lazy&name=[name]!@/pages/index'

const Index = (props) => (
  <Bundle load={loadIndex}>
    {(Index) => <Index {...props}/>}
  </Bundle>
)

const isPro = process.env.NODE_ENV === 'production'

// const Router = isPro ? BrowserRouter : HashRouter
const Router = HashRouter

const basename = isPro ? '/' : '/'

const router = () => (
  <Provider store={store}>
    <Router basename={basename}>
      <App>
        <Switch>
          <Route path="/" exact={true} component={Index}/>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
