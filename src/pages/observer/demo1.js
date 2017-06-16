import React, { Component } from 'react'
export default class extends Component {
  componentWillMount () {
    function Observer () {
      this.fns = []
    }
    Observer.prototype = {
      subscribe: function (fn) {
        this.fns.push(fn)
      },
      unsubscribe: function (fn) {
        this.fns = this.fns.filter(function (el) {
          if (el !== fn) {
            return el
          }
        })
      },
      update: function (o, thisObj) {
        var scope = thisObj || window
        this.fns.forEach(function (el) {
          el.call(scope, o)
        })
      }
    }
    var o = new Observer()
    var f1 = function (data) {
      console.log('Robbing: ' + data + ',赶紧干活了')
    }
    console.log(o.subscribe)
    o.subscribe(f1)
    o.update('Tom回来了')
    o.update('Kc回来了')
    o.unsubscribe(f1)
    o.update('hh')
  }
  render () {
    return (
      <div>
        Observer
      </div>
    )
  }
}
