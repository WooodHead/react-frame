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
  getTopicList({'method': payload.method, params: [{'id': payload.id, 'page': payload.page, 'pageNum': 2}]}).then(res => {
    console.log(res)
    if (res.result) {
      const { data, total } = res.result.data
      const page = payload.page
      const typeid = payload.id
      const lastPage = res.result.data['last_page']
      dispatch(createAction('fetch topic list success')({data, total, page, lastPage, typeid}))
      dispatch(createAction('loading hidden')())
    } else {
      dispatch(createAction('loading hidden')())
    }
  })
}
