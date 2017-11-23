import React from 'react'

import DropDown from '../components/common/DropDown'

import { fetchAllCompany } from '../utils/api'
interface T {
  title: string
  key: number
}

interface MyStates {
  data: T[]
}
class DashBoard extends React.Component<any, MyStates> {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  public componentWillMount() {
    fetchAllCompany().then((res) => {
      const data: T[] = []
      if (res.status && res.data.length) {
        res.data.map((item: {CompanyId: number, CompanyName: string}) => {
          data.push({key: item.CompanyId, title: item.CompanyName})
        })
      }
      this.setState({
        data
      })
    })
  }
  public handleCallBack(item: any) {
    console.log(item, 'callback')
  }
  public test() {
    console.log(this.props, 'didMount')
  }
  public render() {
    const { data } = this.state
    return (
      <div>
        <button onClick={this.test.bind(this)}>2323</button>
        <DropDown
          ref='dropdown'
          data={data}
          filter
          className='mt-20'
          callBack={this.handleCallBack.bind(this)}
          style={{marginLeft: '20px', width: '150px'}}
          >
        </DropDown>
      </div>
    )
  }
}
export default DashBoard
