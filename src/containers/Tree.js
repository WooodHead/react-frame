import React from 'react'
export default class extends React.Component {
  constructor () {
    super()
    this.treeNodes = [{
      title: 'test1',
      key: '1',
      nodes: [
        {
          title: 'test2',
          key: '2'
        },
        {
          title: 'test4',
          key: '4',
          nodes: [{
            title: 'test5',
            key: '5',
            nodes: [{
              title: 'test6',
              key: '6'
            },
            {
              title: 'test7',
              key: '7'
            }]
          }]
        }
      ]
    },
    {
      title: 'test3',
      key: '3',
      nodes: [{
        title: 'test8',
        key: '8'
      },
      {
        title: 'test9',
        key: '9'
      }]
    }]
  }
  loop (arr, res = []) {
    arr.map((item) => {
      if (item.nodes && item.nodes.length) {
        res.push(<div key={item.key}>
          <div>{item.title}</div>
          <div className='sons' style={{marginLeft: '10px'}}>{this.loop(item.nodes)}</div>
        </div>)
      } else {
        res.push(<div key={item.key}>{item.title}</div>)
      }
    })
    return res
  }
  componentDidMount () {
  }
  render () {
    var res = this.loop(this.treeNodes)
    console.log(res, res)
    return (
      <div>{res}</div>
    )
  }
}
