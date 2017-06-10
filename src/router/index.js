import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
	Redirect,
	Switch
} from 'react-router-dom'
//
import Index from '../pages/index'

// common gaine
import Gaine from '../containers/Gaine'

// redux demo1
import ReduxDemo from '../pages/redux/demo'

import RecursionDemo from '../pages/recursion/demo1'

import NoMatch from '../pages/404'

export default () => (
  <Router>
    <div>
      <Switch>
        <Gaine path="/" exact={true} component={Index}/>
        <Gaine path="/redux/demo1" component={ReduxDemo}/>
        <Gaine path="/recursion/demo1" component={RecursionDemo}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)
