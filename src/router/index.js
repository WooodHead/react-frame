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

import App from '@/containers/App'
import Main from '@/containers/Main'
import * as modules from './modules'

const { Login } = modules

const isPro = process.env.NODE_ENV === 'production'

// const Router = isPro ? BrowserRouter : HashRouter
const Router = HashRouter

const basename = isPro ? '/' : '/'

const router = () => (
  <Provider store={store}>
    <Router basename={basename}>
      <App>
        <Switch>
          <Route path='/' exact={true} render={() => {
            return <Redirect to='/declearTax' />
          }}/>
          <Route path='/demo1' component={modules.Demo1}/>
          <Route path='/demo2' component={modules.Demo2}/>
          <Route path='/demo3' component={modules.Demo3}/>
          <Route path='/login' render={() => <Login />}/>
          <Main>
            <Route exact path='/dashboard' render={() => {
              return <Redirect to='/declearTax'/>
            }}/>
            <Route path='/declearTax' component={modules.DeclearTax}/>
            <Route path='/declear/result' component={modules.DeclearResult}/>
            <Route path='/declear/payment' component={modules.DeclearPayment}/>
            <Route path='/declear/paymentResult' component={modules.DeclearPaymentResult}/>
            <Route path='/declear/voucher' component={modules.DeclearVoucher}/>
          </Main>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
