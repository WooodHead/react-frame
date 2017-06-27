import { createAction } from 'redux-actions'
import http, { getTopicList } from '@/util/api'
export const fetchTopicList = (payload) => (dispatch) => {
  dispatch(createAction('loading show')())
  getTopicList([{'id': 2, 'page': payload.pageNumber}]).then(res => {
    if (res.result) {
      const { list, total } = res.result.data
      dispatch(createAction('fetch topic list success')({list, total}))
      dispatch(createAction('loading hidden')())
    } else {
      dispatch(createAction('loading hidden')())
    }
  })
}
