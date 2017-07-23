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
import loadTopicAdd from 'bundle-loader?lazy&name=[name]!@/pages/topicAdd'
import loadTopicDetail from 'bundle-loader?lazy&name=[name]!@/pages/topicDetail'
import loadMine from 'bundle-loader?lazy&name=[name]!@/pages/mine'
import loadTest from 'bundle-loader?lazy&name=[name]!@/pages/test'

const Index = (props) => (
  <Bundle load={loadIndex}>
    {(Index) => <Index {...props}/>}
  </Bundle>
)
const TopicAdd = (props) => (
  <Bundle load={loadTopicAdd}>
    {(TopicAdd) => <TopicAdd {...props}/>}
  </Bundle>
)
const TopicDetail = (props) => (
  <Bundle load={loadTopicDetail}>
    {(TopicDetail) => <TopicDetail {...props}/>}
  </Bundle>
)
const Mine = (props) => (
  <Bundle load={loadMine}>
    {(Mine) => <Mine {...props}/>}
  </Bundle>
)
const Test = (props) => (
  <Bundle load={loadTest}>
    {(Test) => <Test {...props}/>}
  </Bundle>
)
const isPro = process.env.NODE_ENV === 'production'

const Router = isPro ? BrowserRouter : HashRouter
const basename = isPro ? '/bbs/' : '/'

const router = () => (
  <Provider store={store}>
    <Router basename={basename}>
      <App>
        <Switch>
          <Route path="/" exact={true} component={Index}/>
          <Route path="/topic/add/:id" component={TopicAdd}/>
          <Route path="/topic/detail/:id" component={TopicDetail}/>
          <Route path="/mine" component={Mine}/>
          <Route path="/test" component={Test}/>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
