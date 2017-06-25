import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import 'es6-promise/dist/es6-promise'
import { Provider } from 'react-redux'
import store from '@/stores'
import Bundle from '@/components/common/Bundle'
import App from '@/containers/app'

import Gaine from '../containers/Gaine'

import ReduxDemo2 from 'pages/redux/demo2'

import RecursionDemo from '../pages/recursion/demo1'

import ObserverDemo from '../pages/observer/demo1'
import NoMatch from '../pages/404'

import loadReduxDemo from 'bundle-loader?lazy&name=[name]!@/pages/redux/demo'
import loadIndex from 'bundle-loader?lazy&name=app-[name]!@/pages/index'

const ReduxDemo = (props) => (
  <Bundle load={loadReduxDemo}>
    {(ReduxDemo) => <ReduxDemo {...props}/>}
  </Bundle>
)

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
          <Gaine path="/" exact={true} component={Index}/>
          <Gaine path="/redux/demo1" component={ReduxDemo}/>
          <Gaine path="/redux/demo2" component={ReduxDemo2}/>
          <Gaine path="/recursion/demo1" component={RecursionDemo}/>
          <Gaine path="/observer/demo1" component={ObserverDemo}/>
          <Route component={NoMatch}/>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
