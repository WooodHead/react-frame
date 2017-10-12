interface DetailedHTMLProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  s?: string;
}

// declare global {
//   namespace JSX {
//     export interface IntrinsicElements {
//       button: DetailedHTMLProps;
//     }
//   }
// }

import { Button } from 'antd'
import React from 'react'

// enum Color {Red = 1, Green, Blue};
// let colorName: string = Color[2];
// alert(colorName)


// declare function require(path: string): any
export interface IMyProps {
  className?: any,
  history: object
}
export interface IMyState {
  loading: boolean
}

function identity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
// 类型推断
identity([1, 2])
// 指定类型
// identity<string>('s' + 2)

let i = identity

export default class Login extends React.Component<IMyProps, IMyState> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  public componentWillMount() {
    console.log(this.props.history)
  }
  public componentDidMount() {
    // setTimeout(() => {
    //   console.log($(this.refs.main), 's')
    // }, 0)
    // type HTMLElement

    // let myChart = echarts.init($('#test'))

       // 指定图表的配置项和数据
    // let option: IOption = {
    //    title: {
    //        text: 'ECharts 入门示例'
    //    },
    //    tooltip: {},
    //    legend: {
    //        data:['销量']
    //    },
    //    xAxis: {
    //        data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
    //    },
    //    yAxis: {},
    //    series: [{
    //        name: '销量',
    //        type: 'bar',
    //        data: [5, 20, 36, 10, 10, 20]
    //    }]
    // };
    //
    //    // 使用刚指定的配置项和数据显示图表。
    //    setTimeout(() => {
    //      myChart.setOption(option)
    //    }, 0)

  }
  public handleClick() {
    console.log(document)
    this.setState({
      loading: !this.state.loading
    })
    setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      })
    }, 1000)
  }
  public render() {
    return (
      <div>
        <div id='main' ref='main'></div>
        <Button type='primary' onClick={this.handleClick.bind(this)} loading={this.state.loading}>
          Loading
        </Button>
        <i className='fa fa-camera-retro fa-lg'></i>
        <button type='button' data-toggle='modal' data-target='#myModal'>
          Launch demo modal
        </button>
        <div className='modal fade' id='myModal' role='dialog' aria-labelledby='myModalLabel'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span></button>
                <h4 className='modal-title' id='myModalLabel'>Modal title</h4>
              </div>
              <div className='modal-body'>
                ...
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary'>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// export default Login
