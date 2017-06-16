import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/stores'

import App from '@/containers/app'
//
import Index from '../pages/index'

// common gaine
import Gaine from '../containers/Gaine'

// redux demo1
import ReduxDemo from '../pages/redux/demo'
import ReduxDemo2 from 'pages/redux/demo2'

import RecursionDemo from '../pages/recursion/demo1'

import ObserverDemo from '../pages/observer/demo1'
import NoMatch from '../pages/404'

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
