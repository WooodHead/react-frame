import { createAction } from 'redux-actions'
import { fetchCurrentInfo, fetchRangInfo, fetchMessageNum, fetchAccountants } from '@/utils/api'
// 获取当前角色信息
export const fetchCurrentInfoAction = (cb) => (dispatch) => {
  fetchCurrentInfo().then(res => {
    if (res.status) {
      dispatch(createAction('update current info')({currentInfo: res.data}))
      cb(null, res)
    }
  }, err => {
    if (cb) {
      cb(err)
    }
  })
}
// 获取我的小组
export const fetchRangInfoAction = (payload) => (dispatch) => {
  fetchRangInfo().then(res => {
    if (res.status) {
      dispatch(createAction('update rang info')({rangInfo: res.data}))
    }
  })
}
// 获取会计列表
export const fetchAccountantsAction = () => (dispatch) => {
  fetchAccountants().then(res => {
    if (res.status) {
      dispatch(createAction('update accountants list')(res.data))
    }
  })
}
// 获取消息数
export const fetchMessageNumAction = () => (dispatch) => {
  fetchMessageNum().then(res => {
    if (res.status) {
      dispatch(createAction('update message num')(res.data))
    }
  })
}
