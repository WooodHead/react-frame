import React from 'react'
const styles = require('@/stylus/loading')
export default class extends React.Component {
  componentDidMount () {
    $(this.refs.loading).lettering()
  }
  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.loading} ref='loading'>loading...</h1>
      </div>
    )
  }
}
