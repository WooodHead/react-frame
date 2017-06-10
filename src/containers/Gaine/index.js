import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import LeftNav from './leftNav'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class Gaine extends Component {
  componentWillMount () {
    // console.log(this, 'this')
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
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <LeftNav />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Route exact={exact} component={component} />
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
  }
}
export default Gaine
