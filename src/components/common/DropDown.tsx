import React from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd'
function handleButtonClick(e: any) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e: any) {
  message.info('Click on menu item.');
  console.log('click', e);
}

export default class extends React.Component {
  public render() {
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key='1'>1st menu item</Menu.Item>
        <Menu.Item key='2'>2nd menu item</Menu.Item>
        <Menu.Item key='3'>3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          --做账状态--
        </Dropdown.Button>
      </div>
    )
  }
}
