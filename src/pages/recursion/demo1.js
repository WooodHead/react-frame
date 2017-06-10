import React, { Component } from 'react'
export default class extends Component {
  constructor () {
    super()
    this.data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: true,
        label: '二级 2-1'
      }, {
        id: 2,
        label: '二级 2-2'
      }]
    }, {
      id: true,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: true,
        label: '二级 3-2'
      }]
    }]
  }
  componentWillMount () {
    // 递归获取id
    console.log('递归获取id')
    function getChild(data){
      let arr = []
      function getEachChild (data) {
        // let arr = []
        for (let i in data) {
          if (data[i]['children']) {
            getEachChild(data[i]['children'])
          }
          arr.push(data[i]['id'])
        }
      }
      getEachChild (data)
      return arr
    }
    var arr = getChild(this.data)
    console.log(arr)
  }
  render () {
    return (
      <div>
        <pre>
          <code>
            {`
              // 递归遍历子id
              function getChild(data){
                let arr = []
                function getEachChild (data) {
                  // let arr = []
                  for (let i in data) {
                    if (data[i]['children']) {
                      getEachChild(data[i]['children'])
                    }
                    arr.push(data[i]['id'])
                  }
                }
                getEachChild (data)
                return arr
              }
              var arr = getChild(this.data)
              console.log(arr)
            `}
          </code>
        </pre>
      </div>
    )
  }
}
