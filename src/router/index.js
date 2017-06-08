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
// import Topics from '../pages/topics.js'
// import ReduxDemo from '../pages/redux/demo.js'
// import Gaine from '../components/Gaine'
import NoMatch from '../pages/404'
const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the
    first child <code>&lt;Route></code> that
    matches. A <code>&lt;Route></code> with
    no <code>path</code> always matches.
  </p>
)

const WillMatch = () => <h3>Matched!</h3>

// const NoMatch = ({ location }) => (
//   <div>
//     <h3>No match for <code>{location.pathname}</code></h3>
//   </div>
// )

export default () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)
