// 左侧菜单配置文件
const config = [
  {
    name: 'redux-demo',
    type: 'folder-open',
    key: 'sub1',
    children: [
      {
        name: 'demo1',
        path: '/redux/demo1'
      },
      {
        name: 'demo2',
        path: '/redux/demo2'
      }
    ]
  },
  {
    name: '观察者模式',
    type: 'folder-open',
    key: 'sub2',
    children: [
      {
        name: 'demo1',
        path: '/observer/demo1'
      }
    ]
  },
  {
    name: '递归',
    type: 'folder-open',
    key: 'sub3',
    children: [
      {
        name: 'demo1',
        path: '/recursion/demo1'
      }
    ]
  },
  {
    name: '算法',
    type: 'folder-open',
    key: 'sub4',
    children: [
      {
        name: 'demo1',
        path: '/recursion/demo1'
      }
    ]
  }
]
export default config
