import { createAction } from 'redux-actions'
import http, { getTopicList } from '@/util/api'
export const fetchTopicList = (payload) => (dispatch) => {
  dispatch(createAction('fetch topic list request')({loading: false}))
  getTopicList([{'id': 2, 'page': payload.pageNumber}]).then(res => {
    if (res.result) {
      const { list, total } = res.result.data
      dispatch(createAction('fetch topic list success')({list, total}))
    } else {
      dispatch(createAction('fetch topic list failure')({loading: false}))
    }
  })
}
