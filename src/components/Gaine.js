import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
class Gaine extends Component {
  render () {
    console.log(this)
    var { to, match, component, children } = this.props
    // component = 'redux'
    console.log(component)
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
        <Menu.Item key="1"><Link to="/">home</Link></Menu.Item>
        <Menu.Item key="2">topics</Menu.Item>
        <Menu.Item key="3">redux-demo</Menu.Item>
        </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            >
            <SubMenu key="sub1" title={<span><Icon type="user" />redux-demo</span>}>
            <Menu.Item key="1"><Link to="/redux/demo1">demo1</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default Gaine
