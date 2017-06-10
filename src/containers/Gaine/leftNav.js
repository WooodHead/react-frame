import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Sider } = Layout
export default class extends Component {
  render () {
    return (
      <Sider>
        <Menu
        mode="inline"
        defaultSelectedKeys={['5']}
        defaultOpenKeys={['sub2']}
        style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />redux-demo</span>}>
            <Menu.Item key="1"><Link to="/redux/demo1">demo1</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />递归</span>}>
            <Menu.Item key="5"><Link to="/recursion/demo1">demo1</Link></Menu.Item>
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
    )
  }
}
/*
defaultSelectedKeys={['5']}  选中的二级菜单
defaultOpenKeys={['sub2']} 选中的一级菜单
*/
