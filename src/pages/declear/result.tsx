import React from 'react'
import { connect } from 'react-redux'
const styles = require('../../stylus/declear.result')
import DeclearContainer from '../../containers/DeclearContainer'
class Result extends React.Component<any, {}> {
  // public componentWillMount () {
  // }
  public render () {
    return (
      <DeclearContainer currentTitle='查看申报结果'>
        <div>result</div>
      </DeclearContainer>
    )
  }
}
export default connect()(Result)
