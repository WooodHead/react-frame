import classNames from 'classnames'
import React from 'react'
import { getCaptial } from '../../utils/global.func'
import DropDown from './DropDown'
const styles = require('../../stylus/auto.complete')
interface T {
  title: string
  key: number
  capital?: string[]
}
interface MyProps {
  data: T[]
  onSelect: (value: string) => any
  className?: string
  placeholder?: string
}
interface MyStates {
  data: T[]
  dataTmp: T[]
  page: number
  visible: boolean
  hover: boolean
}

class AutoComplete extends React.Component<MyProps, MyStates> {
  public pageNum = 20
  constructor () {
    super()
    this.state = {
      data: [],
      dataTmp: [],
      page: 1,
      visible: false,
      hover: false
    }
  }
  public componentWillReceiveProps (props: MyProps, oldProps: MyProps) {
    if (props.data.length && oldProps.data === undefined) {
      const data: T[] = []
      props.data.map((item) => {
        item.capital = getCaptial(item.title) || ['']
        data.push(item)
      })
      this.setState({
        data: props.data.slice(0, this.pageNum),
        dataTmp: props.data
      })
    }
  }
  public componentDidMount () {
    $(this.refs.input).off('click')
    $(this.refs.input).click(() => {
      this.searchShow()
    })
  }
  public searchChange () {
    const { data } = this.props
    const el = $(this.refs.input)
    const value: string = el.val().toString() || ''
    if (!value) {
      this.setState({
        visible: false
      })
    } else {
      this.searchShow()
    }
  }
  public searchShow () {
    const { data } = this.props
    const el = $(this.refs.input)
    const value: string = el.val().toString() || ''
    const pattern = new RegExp(value.toUpperCase())
    const res = data.filter((item: T): boolean => {
      if (pattern.test(item.title) || pattern.test(item.capital.join(','))) {
        return true
      }
    })
    this.setState({
      data: res.slice(0, this.pageNum),
      dataTmp: res,
      visible: true
    }, () => {
      this.listenScroll()
      const results = this.refs.results
      $(results).addClass(styles['custom-slide-up-enter'])
      setTimeout(() => {
        $(results).addClass(styles['custom-slide-up-enter'])
      }, 300)
      el.off('blur')
      $(results).off('blur')
      $(results).hover(() => {
        this.setState({
          hover: true
        })
      }, () => {
        this.setState({
          hover: false
        })
      })
      el.blur(() => {
        if (!this.state.hover) {
          $(results).addClass(styles['custom-slide-up-leave'])
          setTimeout(() => {
            $(results).removeClass(styles['custom-slide-up-leave'])
            this.setState({
              visible: false
            })
          }, 300)
        }
      })
    })
  }
  public handleSelect (item: any) {
    $(this.refs.input).val(item.title)
    const results = this.refs.results
    $(results).addClass(styles['custom-slide-up-leave'])
    setTimeout(() => {
      $(results).removeClass(styles['custom-slide-up-leave'])
      this.setState({
        visible: false
      })
    }, 300)
    if (this.props.onSelect) {
      this.props.onSelect(item)
    }
  }
  public listenScroll () {
    const results = this.refs.results
    $(results).children('.' + styles.items).off('scroll')
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
  }
  public render () {
    const { data, visible } = this.state
    const { className, placeholder } = this.props
    return (
      <div className={classNames(styles.container, className)}>
        <input type='text' placeholder={placeholder} onChange={this.searchChange.bind(this)} ref='input' />
        {visible &&
          <div className='results' ref='results'>
            {data.length === 0 && <p>未搜到结果</p>}
            <div className={styles.items}>
              <ul>
                {
                  data && data.map((item, index) => {
                    return (
                      <li
                        onClick={this.handleSelect.bind(this, item)}
                        key={'auto-complete-' + index}
                        >
                        {item.title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        }
      </div>
    )
  }
}
export default AutoComplete
