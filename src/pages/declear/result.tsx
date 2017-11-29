import React from 'react'
import { connect } from 'react-redux'
const styles = require('../../stylus/declear.result')
import { Table,  Row, Col } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import DeclearContainer from '../../containers/DeclearContainer'
class Result extends React.Component<any, {}> {
  // public componentWillMount () {
  // }
  public render () {
    return (
      <DeclearContainer currentTitle='查看申报结果'>
        <div className={styles.inner}>
          <div className={styles.comInfo}>
            <p className={styles.comName}>
              北京海昌
            </p>
            <p className={styles.class}>
              <Row>
                
              </Row>
            </p>
          </div>
        </div>
      </DeclearContainer>
    )
  }
}
export default connect()(Result)
