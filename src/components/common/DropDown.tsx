import { Button, Dropdown, Icon, Input, Menu, message } from 'antd'
import ClassNames from 'classnames'
import React from 'react'
import { getCaptial } from '../../utils/global.func'
const styles = require('../../stylus/dropdown')
interface T {
  title: string
  key: number
  capital?: string[]
}
interface MyProps {
  data: T[]
  className?: string
  style?: React.CSSProperties
  filter?: boolean
  callBack?: (item: T) => void
}

interface MyStates {
  visible: boolean
  data?: T[]
  dataTmp?: T[]
  title?: string
  page: number
}
export default class extends React.Component<MyProps, MyStates> {
  public pageNum = 20
  public t = 0
  constructor (props: MyProps) {
    super(props)
    this.state = {
      page: 1,
      visible: false,
      title: '',
      data: []
    }
  }
  public componentDidMount () {
    const { button } = this.refs
    $(button).hover(() => {
      this.handleEnter()
    }, (e) => {
      this.handleLeave()
    })
  }
  public componentWillReceiveProps (props: MyProps, oldProps: MyProps) {
    const data: T[] = []
    if (!oldProps.data) {
      props.data.map((item) => {
        item.capital = getCaptial(item.title) || ['']
        data.push(item)
      })
      this.setState({
        data: data.slice(0, this.pageNum),
        dataTmp: data
      })
    }
  }
  public handleEnter () {
    if (this.t) {
      clearTimeout(this.t)
    }
    let { results } = this.refs
    if (results) {
      $(results).removeClass(styles['custom-slide-up-leave'])
      $(results).one('mouseover', () => {
        clearTimeout(this.t)
      })
      $(results).one('mouseleave', () => {
        this.handleLeave()
      })
      return
    }
    this.setState({
      visible: true
    }, () => {
      results = this.refs.results
      $(results).removeClass(styles['custom-slide-up-leave'])
      $(results).addClass(styles['custom-slide-up-enter'])
      this.t = setTimeout(() => {
        $(results).removeClass(styles['custom-slide-up-enter'])
      }, 200)
      $(results).one('mouseover', () => {
        clearTimeout(this.t)
      })
      $(results).one('mouseleave', () => {
        this.handleLeave()
      })
      $(results).children('.' + styles.items).scroll((e) => {
        const scrollTop = e.target.scrollTop
        const h = $(results).find('ul').height()
        const ch = e.target.clientHeight
        if (scrollTop + ch > h - 10) {
          if (this.state.page < Math.ceil(this.state.dataTmp.length / this.pageNum)) {
            this.setState({
              page: this.state.page + 1,
              data: this.state.dataTmp.slice(0, this.pageNum * (this.state.page + 1))
            })
          }
        }
      })
    })
  }
  public handleLeave () {
    if (this.t) {
      clearTimeout(this.t)
    }
    const { button, results } = this.refs
    this.t = setTimeout(() => {
      $(results).addClass(styles['custom-slide-up-leave'])
      this.t = setTimeout(() => {
        $(results).removeClass(styles['custom-slide-up-leave'])
        $(results).addClass(styles.hidden)
        this.setState({
          visible: false,
          page: 1,
          data: this.props.data.slice(0, this.pageNum),
          dataTmp: this.props.data
        })
      }, 200)
    }, 100)
  }
  public handleClick (item: {key: number, title: string}) {
    const { callBack } = this.props
    this.setState({
      title:  item.title
    })
    if (callBack) {
      callBack(item)
    }
    this.handleLeave()
  }
  public handleChange () {
    const { data } = this.props
    const value: string = $(this.refs.input).val().toString()
    const pattern = new RegExp(value.toUpperCase())
    const res = data.filter((item: T): boolean => {
      if (pattern.test(item.title) || pattern.test(item.capital.join(','))) {
        return true
      }
    })
    this.setState({
      data: res.slice(0, this.pageNum),
      dataTmp: res
    })
  }
  public render () {
    const { className, style, filter } = this.props
    const { visible, data } = this.state
    let { title } = this.state
    title = title || this.props.data.length && this.props.data[0].title || ''
    return (
      <div className={ClassNames(styles.container, className)} style={style}>
        <div className='costom-btn-group' ref='button'>
          <div className='btn-left'><span>{title}</span></div>
          <div className='btn-right'>
            <i className='fa fa-chevron-down' aria-hidden='true'></i>
          </div>
        </div>
        {visible && <div className='results' ref='results'>
          {filter && <input className={styles.input} onChange={this.handleChange.bind(this)} ref='input'/>}
          {data.length === 0 && <p>未搜到结果</p>}
          <div className={styles.items}>
            <ul>
              {data.length > 0 && data.map((item: T, key: number) => {
                return (<li key={key} title={item.title} onClick={this.handleClick.bind(this, item)}>{item.title}</li>)
              })}
            </ul>
          </div>
        </div>}
      </div>
    )
  }
}
