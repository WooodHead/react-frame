import React from 'react'
import DropDown from './DropDown'
const style = require('../../stylus/auto.complete')
interface MyProps {
  data: any[]
  onSelect: any
}
interface OptionProps {
  key: string
  children: string
}
interface MyState {
  data: any[]
}

const select = (props: OptionProps) => {
  console.log(props)
}

export const Option = (props: OptionProps) => {
  return <li onClick={select.bind(this, props)}>{props.children}</li>
}
class AutoComplete extends React.Component<MyProps, MyState> {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }
  public componentWillReceiveProps (props: MyProps, oldProps: MyProps) {
    console.log(props, oldProps, 'willReceive')
    if (props.data.length && oldProps.data === undefined) {
      this.setState({
        data: props.data
      })
    }
  }
  public render () {
    return (
      <div className={style.container}>
        <input />
        <div className='result'>
          <ul>
            {this.props.children}
          </ul>
        </div>
      </div>
    )
  }
}
export default AutoComplete
