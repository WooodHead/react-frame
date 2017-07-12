import Alert from '@/components/common/Alert'
import React from 'react'
import { render } from 'react-dom'

var alert = {
  el: document.createElement('div'),
  show () {
    document.body.appendChild(this.el)
    render(<Alert />, this.el)
  },
  hide () {
    setTimeout(() => {
      render(<div></div>, this.el)
      document.body.removeChild(this.el)
    }, 0)
  }
}

export default alert
