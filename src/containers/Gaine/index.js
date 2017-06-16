import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import LeftNav from './leftNav'
import { leftNavOptions } from 'consts'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class Gaine extends Component {
  constructor () {
    super()
    this.handleBreadcrumb = this.handleBreadcrumb.bind(this)
    this.state = {
      breadcrumb: []
    }
  }
  componentWillMount () {
    this.handleBreadcrumb()
  }
  // 处理面包屑
  handleBreadcrumb () {
    const { pathname } = this.props.location
    var arr = [{name: 'Home'}]
    leftNavOptions.map((item) => {
      item.children.map((item2, index2) => {
        if (item2.path === pathname) {
          arr[1] = {name: item.name}
          arr[2] = {name: item2.name}
        }
      })
    })
    return arr.map(function (item, index) {
      return (
        <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>
      )
    })
  }
  render () {
    var { to, match, component, children, exact } = this.props
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <LeftNav />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Route render={() => {
              return (
                <Breadcrumb style={{ margin: '12px 0' }}>
                  {this.handleBreadcrumb()}
                </Breadcrumb>
              )
            }} />
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route exact={exact} component={component} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default withRouter(Gaine)
