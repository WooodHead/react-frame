/**
 * topic actions
 */
import { createAction } from 'redux-actions'
import { getTopicAllType, getTopicList } from '@/util/api'

// 获取帖子所有板块
export const fetchTopicAllType = (payload) => (dispatch) => {
  getTopicAllType().then(res => {
    let topicTypes = res.result.data
    dispatch(createAction('fetch topic all type')({topicTypes}))
  })
}

export const fetchTopicList = (payload) => (dispatch) => {
  dispatch(createAction('loading show')())
  getTopicList({'method': payload.method, params: [{'id': payload.id, 'page': 1, 'pageNum': 10}]}).then(res => {
    console.log(res)
    if (res.result) {
      const { data, total } = res.result.data
      dispatch(createAction('fetch topic list success')({data, total}))
      dispatch(createAction('loading hidden')())
    } else {
      dispatch(createAction('loading hidden')())
    }
  })
}
