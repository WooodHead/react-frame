import { createAction } from 'redux-actions'
import http, { getTopicList } from '@/util/api'
export const fetchTopicList = (payload) => (dispatch) => {
  dispatch(createAction('fetch topic list request')({loading: false}))
  getTopicList([{'id': 2, 'pageNum': 10}]).then(res => {
    if (res.result) {
      const list = res.result.data.list
      dispatch(createAction('fetch topic list success')(list))
    }
  })
}
