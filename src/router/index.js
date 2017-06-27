import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
// import 'es6-promise/dist/es6-promise'
import { Provider } from 'react-redux'
import store from '@/stores'
import Bundle from '@/components/common/Bundle'
import App from '@/containers/app'

import loadIndex from 'bundle-loader?lazy&name=app-[name]!@/pages/index'

const Index = (props) => (
  <Bundle load={loadIndex}>
    {(Index) => <Index {...props}/>}
  </Bundle>
)

const router = () => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/" exact={true} component={Index}/>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
