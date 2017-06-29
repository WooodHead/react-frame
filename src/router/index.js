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
import loadList from 'bundle-loader?lazy&name=app-[name]!@/pages/list'
const Index = (props) => (
  <Bundle load={loadIndex}>
    {(Index) => <Index {...props}/>}
  </Bundle>
)
const List = (props) => (
  <Bundle load={loadList}>
    {(List) => <List {...props}/>}
  </Bundle>
)
const router = () => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/" exact={true} component={Index}/>
          <Route path="/list" component={List}/>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
