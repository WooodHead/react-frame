import { createAction } from 'redux-actions'
import http, { getTopicList } from '@/util/api'
export const fetchTopicList = (payload) => (dispatch) => {
  console.log('fetchTopicList')
  dispatch(createAction('loading show')())
  getTopicList([{'id': 3, 'page': payload.pageNumber, 'pageNum': 10}]).then(res => {
    console.log(res)
    if (res.result) {
      const { list, total } = res.result.data
      dispatch(createAction('fetch topic list success')({list, total}))
      dispatch(createAction('loading hidden')())
    } else {
      dispatch(createAction('loading hidden')())
    }
  })
}
