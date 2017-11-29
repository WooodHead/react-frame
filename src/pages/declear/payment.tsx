import React from 'react'
import { DeclearCompanyPart, DeclearContainer } from '../../containers'
const styles = require('../../stylus/declear.payment')
class PayMent extends React.Component<any, {}> {
  public render () {
    return (
      <DeclearContainer currentTitle='查看缴款结果'>
        <div className={styles.container}>
          <DeclearCompanyPart />
        </div>
      </DeclearContainer>
    )
  }
}
export default PayMent
