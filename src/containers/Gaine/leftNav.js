import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { leftNavOptions } from 'consts'
const { SubMenu } = Menu
const { Sider } = Layout

class LeftNav extends Component {
  constructor () {
    super()
    // 菜单配置
    this.config = leftNavOptions
    this.handleDefaultNavCheckedOption = this.handleDefaultNavCheckedOption.bind(this)
    this.state = {
      defaultSelectedKeys: [],
      defaultOpenKeys: []
    }
  }
  componentWillMount () {
    this.handleDefaultNavCheckedOption()
  }
  // 处理默认导航选中配置
  handleDefaultNavCheckedOption () {
    const { pathname } = this.props.location
    this.config.map((item) => {
      item.children.map((item2, index2) => {
        if (item2.path === pathname) {
          this.setState({
            defaultSelectedKeys: [item.key + '_' + index2],
            defaultOpenKeys: [item.key]
          })
        }
      })
    })
  }
  render () {
    return (
      <Sider>
        <Menu
        mode="inline"
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        defaultOpenKeys={this.state.defaultOpenKeys}
        style={{ height: '100%' }}
        >
          {
            this.config.map(function (item, index) {
              return (
                <SubMenu key={item.key} title={<span><Icon type={item.type} />{item.name}</span>}>
                  {
                    item.children.map(function (item2, index2) {
                      return (
                        <Menu.Item key={item.key + '_' + index2}><Link to={item2.path}>{item2.name}</Link></Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
      </Sider>
    )
  }
}
export default withRouter(LeftNav)
/*
defaultSelectedKeys={['5']}  选中的二级菜单
defaultOpenKeys={['sub2']} 选中的一级菜单
*/
