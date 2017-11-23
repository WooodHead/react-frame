import React from 'react'
import Top from '@/containers/Top'
const styles = {
  container: {
    width: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0'
  },
  main: {
    width: '100%',
    position: 'absolute',
    top: '60px',
    bottom: 0,
    overflow: 'scroll'
  }
}
export default class extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <Top />
        <div style={styles.main}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
